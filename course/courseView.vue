<template>
	<view>
		<cu-custom bgColor="bg-white" :isBack="true"  style="font-size: 34rpx;color: #000;font-weight: bold;">
		    <block slot="backText">《{{course.title}}》</block>
		</cu-custom>
		<view>
			<!-- <view class="course_title" v-if="course.title">{{course.subTitle}}:《{{course.title}}》</view> -->
			<view class="course_video">
				<video id="courseVideo" 
					:src="course.videoUrl" 
					:poster="course.posterUrl" 
					:controls="false" 
					play-btn-position="center" 
					:enable-progress-gesture="false" 
					:show-center-play-btn="false" 
					@click="videoPause(true)" 
					@timeupdate="videoMonitor" 
					@ended="videoEnd" 
					x5-video-player-type='h5' 
					x5-video-player-fullscreen='true' 
					webkit-playsinline="true" 
					playsinline="true" 
					></video>
				<view class="video_icon" v-if="showPlayIcon" @click="startStudy">
					<image src="/course/static/img/icon_play.png" mode="widthFix"></image>
				</view>
				<view class="video_icon" v-if="showPauseIcon" @click="videoPlay">
					<image src="/course/static/img/icon_pause.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="course_content">
				<u-tabs style="margin: 20rpx 0 40rpx 0;" :list="titleList" :is-scroll="false" :current="current" @change="change"></u-tabs>
				<view v-if="current === 0">
					<view class="course_p" v-for="(item, index) in course.themeDesc" :key="index">{{item}}</view>
				</view>
				<view v-if="current === 1">
					<view class="course_p" v-for="(item, index) in course.backGround" :key="index">{{item}}</view>
				</view>
				<view v-if="current === 2">
					<view class="course_text"><span style="font-weight: bold;">认知目标：</span>{{course.ztTarget}}</view>
					<view class="course_text"><span style="font-weight: bold;">情感目标：</span>{{course.qgTarget}}</view>
					<view class="course_text"><span style="font-weight: bold;">行为目标：</span>{{course.xwTarget}}</view>
				</view>
				<view v-if="current === 3">
					<view class="course_text"><span style="font-weight: bold;">重点：</span>{{course.keyNote}}</view>
					<view class="course_text"><span style="font-weight: bold;">难点：</span>{{course.diffNote}}</view>
				</view>
			</view>
		</view>
		<view v-if="!isStart" class="course_btn" @click="startStudy">
			开始学习
		</view>
		<view v-if="isStart" class="course_btn" @click="resetStudy">
			重新学习
		</view>
		
		<!-- 问题弹框begin -->
		<u-popup v-model="questionShow" mode="center" border-radius="10" z-index="999999" length="85%" :mask-close-able="false">
			<view class="question_top">
				<image src="/course/static/img/course_bg.png" mode="widthFix" style="width: 100%;"></image>
			</view>
			<!-- 问题标题beign -->
			<view>
				<view class="question_box" v-if="course.grade <= 3 && questionObj && questionObj.contentPinyin.length > 0">
					<view class="question_pinyin" v-for="(item, index) in (questionObj ? questionObj.contentPinyin : [])" :key="index">
						<view class="pinyin">{{item.p}}</view>
						<view class="wenzi">{{item.w}}</view>
					</view>
				</view>
				<view class="question_box" v-else>
					{{questionObj ? questionObj.content : ""}}
				</view>
			</view>
			<view v-if="specialHandleData[courseId] && specialHandleData[courseId][currentQuestion] && specialHandleData[courseId][currentQuestion].questionImage" style="padding: 20rpx 40rpx 0 40rpx;">
				<image :src="specialHandleData[courseId][currentQuestion].questionImage" mode="widthFix" width="100%"></image>
			</view>
			<!-- 问题标题end -->
			<!-- 问题答案beigin -->
			<view v-if="questionObj && questionObj.selectType == 1">
				<!-- 单选 -->
				<view v-if="specialHandleData[courseId] && specialHandleData[courseId][currentQuestion] && specialHandleData[courseId][currentQuestion].answerImage">
					<view style="display: flex;flex-wrap: wrap;padding: 20rpx;">
						<view style="display: flex;
						flex-direction: column;
						text-align: center;
						padding: 20rpx;
						width: 50%;" 
						v-for="(answer, i) in (questionObj ? questionObj.answers : [])" :key="answer.answerId" 
						@click="answerFun(answer)">
							<view>
								<image :src="specialHandleData[courseId][currentQuestion].answerImage[answer.answerId]" mode="widthFix" width="100%"></image>
							</view>
							<view>
								{{answer.answerContent}}
							</view>
						</view>
					</view>
				</view>
				<view v-else>
					<view v-for="(answer, i) in (questionObj ? questionObj.answers : [])" :key="answer.answerId">
						<view class="answer_box" v-if="course.grade <= 3 && answer.answerContentPinyin.length > 0" @click="answerFun(answer)">
							<view style="margin-right: 4rpx;">{{answer.answerOption}}.</view>
							<view class="answer_pinyin" v-for="(item, j) in answer.answerContentPinyin" :key="j">
								<view class="pinyin">{{item.p}}</view>
								<view class="wenzi">{{item.w}}</view>
							</view>
						</view>
						<view class="answer_box" v-else @click="answerFun(answer)">
							<view>{{answer.answerOption}}. {{answer.answerContent}}</view>
						</view>
					</view>
				</view>
			</view>
			<view v-else>
				<!-- 多选 -->
				<u-checkbox-group @change="checkboxGroupChange" active-color="#007AFF">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(answer, i) in (questionObj ? questionObj.answers : [])" :key="answer.answerId">
						<view>	
							<u-checkbox class="" @change="checkboxChange" :name="i+''" v-model="answerChecked[i].checked" ></u-checkbox>
						</view>
						<view style="margin:0 80rpx 0 10rpx;">{{answer.answerOption}}. {{answer.answerContent}}</view>
					</label>
				</u-checkbox-group>
				<u-button type="primary" :disabled="isCheckboxVal" @click="answerFun(null, true)">提交</u-button>
			</view>
			<!-- 问题答案end -->
		</u-popup>
		<!-- 问题弹框结束end -->
		<!-- 反馈弹框开始begin -->
		<u-popup v-model="feedbackShow" mode="center" border-radius="10" z-index="999999" length="85%" :mask-close-able="false">
			<view v-if="answerFeedback">
				<!-- 反馈文字beign -->
				<view class="feedback_box" v-if="course.grade <= 3 && answerFeedback.feedbackPinyin && answerFeedback.feedbackPinyin.length > 0">
					<view class="feedback_pinyin" v-for="(item, index) in answerFeedback.feedbackPinyin" :key="index">
						<view class="pinyin">{{item.p}}</view>
						<view class="wenzi">{{item.w}}</view>
					</view>

				</view>
				<view class="feedback_box" v-else>
					<rich-text :nodes="answerFeedback.feedback?answerFeedback.feedback:'请再想一想！？'"></rich-text>
				</view>
				<!-- 反馈弹窗按钮 -->
				<view class="speak-wrapper" v-if="showCruxError">
						<u-button class="btn-wrapper" size="medium" type="warning" @click="closeDia(answerFeedback,questionObj)">重新选择</u-button>

				</view>
				<!-- 反馈文字end -->
			</view>
		</u-popup>
		<!-- 反馈弹框结束end -->
		<!-- 对话弹框开始begin -->
		<u-popup v-model="talkShow" mode="center" :zoom="false" border-radius="10" z-index="999999" length="85%" :mask-close-able="false">
			<view v-if="answerFeedback">
				<view class="feedback_box">
					{{talkText.replace(new RegExp('（主角）','g'),wxUser.nickName)}}
				</view>
			</view>
		</u-popup>
		<!-- 对话弹框结束end -->
		<!-- 问卷答题弹框begin -->
		<u-popup v-model="questionnaireShow" mode="center" border-radius="10" z-index="999999" length="85%" :mask-close-able="false">
			<view class="question_top">
				<image src="/course/static/img/course_bg.png" mode="widthFix" style="width: 100%;"></image>
			</view>
			<view v-if="questionnaireObj">
				<view>
					<view class="question_box">
						<rich-text :nodes="questionnaireObj.title"></rich-text>
					</view>
				</view>
				<view class="questionnaire_box">
					<view v-if="!isQuestionnaireResult">
						<view class="questionnaire_question">{{questionnaireObj && questionnaireObj.questions ? questionnaireObj.questions[currentQuestionnaire].id : ''}}. {{ questionnaireObj && questionnaireObj.questions ? questionnaireObj.questions[currentQuestionnaire].content : ''}}</view>
						<view class="questionnaire_answer_box">
							<view class="questionnaire_answer" v-for="(answer, index) in (questionnaireObj && questionnaireObj.questions ? questionnaireObj.questions[currentQuestionnaire].answers : [])" :key="answer.id">
								<view @click="questionnaireAnswerFun(answer, questionnaireObj.questions[currentQuestionnaire].id)">
									{{answer.answerOption ? answer.answerOption : ''}}{{Number(courseId) === 69 || Number(courseId) === 70 ? '-' : '.'}} {{answer.answerContent ? answer.answerContent : ''}}
								</view>
							</view>
						</view>
					</view>
					<view style="font-size: 22rpx;" v-else>
						<view style="margin: 10rpx 0;"><b>共计得分： {{questionnaireValues}}</b></view>
						<rich-text :nodes="questionnaireResult" style="line-height: 26rpx;"></rich-text>
						<view style="margin-top: 20rpx;">
							<u-button type="primary" @click="questionnairePost()">确定</u-button>
						</view>
					</view>
				</view>
			</view>
		</u-popup>
		<!-- 问题弹框结束end -->
		<!-- 学习完成begin -->
		<u-popup class="pay-center-box" v-model="isSuccess" mode="center" border-radius="15" z-index="999999" width="80%" height="35%" :mask-close-able="false">
			<view class="study_result_box" >
				<view class="study_result_top">
					<u-image src="/course/static/img/course_success.png" style="width: 100%; height: 100%;"></u-image>
				</view>
			</view>
			<view class="study_result_title">
				{{course.nextCourseId > 0 ? '你已完成本课学习!' : '你已完成本年级所有课程学习!'}}
			</view>
			<view class="study_result_btn" @click="nextCourse">
				{{course.nextCourseId > 0 ? '下一课' : '返回'}}
			</view>
		</u-popup>
		<!-- 学习完成end -->
		<!-- 学习未完成begin -->
		<u-popup class="pay-center-box" v-model="isFail" mode="center" border-radius="15" z-index="999999" width="80%" height="35%" :mask-close-able="false">
			<view class="study_result_box">
				<view class="study_result_top">
					<image src="/course/static/img/course_fail.png" style="width: 100%; height: 100%;"></image>
				</view>
			</view>
			<view class="study_result_title study_result_title_gray">你未完成本课学习!</view>
			<view class="study_result_btn" @click="resetStudy">
				重新学习
			</view>
		</u-popup>
		<!-- 学习未完成end -->
		<!-- 支付弹框begin -->
		<u-popup class="pay-center-box" v-model="payShow"  mode="center" border-radius="15" z-index="999999" width="77%" height="35%" :mask-close-able="false">
			<view class="study_result_box">
				<view class="pay_top">
					<image src="/course/static/img/pay_title.png" mode="widthFix" ></image>
				</view>
			</view>
			<view class="pay_big_title"><span class="pay_orange">{{gradeList[course.grade ? (course.grade - 1) : 0].text}}</span>交互式课程年费VIP</view>
			<view class="pay_small_title">(购买后一年内免费学习)</view>
			<view class="pay_price_text"><span class="pay_big_price">300</span>元/年</view>
			<view class="pay_btn" @click="pay">
				马上支付
			</view>
			<view class="pay_close_btn" @click="closePay">
				<image src="/course/static/img/icon_close.png" style="width: 100%; height: 100%;"></image>
			</view>
		</u-popup>
		<!-- 支付弹框end -->
		<!-- 支付成功弹框begin -->
		<u-popup class="pay-center-box" v-model="paySuccessShow" mode="center" border-radius="15" z-index="999999" width="77%" height="35%" :mask-close-able="false">
			<view class="study_result_box">
				<view class="pay_success_img" >
					<image src="/course/static/img/icon_success.png" mode="heightFix" style="height: 100%;"></image>
				</view>
			</view>	
			<view class="pay_success_text" >恭喜，你已完成购买</view>
			<view class="pay_btn" @click="paySuccess">
				继续学习
			</view>
			<view class="pay_close_btn" @click="paySuccess">
				<image src="/course/static/img/icon_close.png" style="width: 100%; height: 100%;"></image>
			</view>
		</u-popup>
		<!-- 支付成功弹框end -->
		<!-- 32问题弹框begin -->
		<u-popup v-model="question32Show" mode="center" border-radius="10" z-index="999999" length="85%" :mask-close-able="false">
			<view class="question_top">
				<image src="/course/static/img/course_bg.png" mode="widthFix" style="width: 100%;"></image>
			</view>
			<!-- 问题标题beign -->
			<view>
				<view class="question_box">
					{{specialHandleQuestion.content}}
				</view>
			</view>
			<!-- 问题标题end -->
			<!-- 问题答案beigin -->
			<view style="display: flex;flex-wrap: wrap;padding: 20rpx;">
				<view style="display: flex;
							flex-direction: column;
							text-align: center;
							padding: 20rpx;
							width: 33%;
							font-size: 22rpx;" 
							v-for="(item, i) in specialHandleQuestion.answers" :key="item.answerId" 
							@click="specialHandleAnswerFun(i)">
					<view style="position: relative;">
						<image :src="item.img_url" mode="aspectFit" style="height: 100rpx;;"></image>
						<view style="position: absolute;bottom: 0;right: 0;width: 22rpx;height: 22rpx;" v-if="item.checked">
							<image src="/course/static/img/32/icon_checked.png" mode="widthFix" style="width: 22rpx;height: 22rpx;"></image>
						</view>
					</view>
					<view style="margin-top: 10rpx;">
						{{item.answerContent}}
					</view>
				</view>
			</view>
			<view style="text-align: center;margin-bottom: 40rpx;">
				<u-button type="primary" shape="circle" size="medium" style="font-size: 30rpx;" @click="specialHandlePostBtn()">结账</u-button>
			</view>
			<!-- 问题答案end -->
		</u-popup>
		<!-- 32问题弹框结束end -->
		<!-- <u-top-tips ref="uTips" z-index="999999"></u-top-tips> -->
		<u-modal v-model="infoShow" :title="infoTitle" :content="infoContent"></u-modal>
		<u-toast ref="cruxErrorNumToast" z-index="1000000"/>
	</view>
</template>

<script>
	const jweixin = require('jweixin-module');
	//视频锁，用于延时暂停，避免调用多次延时暂停
	let videoLock = false;
	//默认弹框支付时间（秒）(如果出现第一个问题交互的时间大于默认弹框支付时间时，使用问题交互时间)
	const default_pay_time = 2*60;
	//上一次播放进度变化时间
	let last_timeupdate = 0;
	//两次播放进度变化间隔时间（last_timeupdate用于计算last_timeupdate，设置延时暂停的间隔时间）
	let interval_time = 0;
	export default {
		data() {
			return {
				videoContext: null,
				audioContext: null,
				courseId: 0,
				course: {},
				wxUser: {},
				infoShow: false,
				infoTitle: "",
				infoContent: "",
				answerFeedback:{},
				talks:[],
				talkText: '',
				titleList: [{
					name: '主题说明'
				}, {
					name: '背景知识'
				}, {
					name: '教学目标'
				}, {
					name: '重点难点'
				}],
				specialHandleData: this.specialHandleData,//特殊视频问题数据
				gradeList: this.cfgData.gradeList,
				current: 0,
				studentId: 0,//学生ID
				isStart: false,//是否开始学习
				recordId: 0,//课程记录id
				showPlayIcon: true,//是否显示播放按钮
				showPauseIcon: false,//是否显示暂停按钮
				questionShow: false,//是否显示问题弹框
				question32Show: false, //问题ID为32的问题弹框
				feedbackShow: false,//是否显示反馈弹框
				talkShow: false,//是否显示对话弹框
				questionnaireShow: false,//是否显示问卷答题弹框
				questionObj:{},//当前问题对象
				currentQuestion: 0,//当前问题序号，默认是0，第一个问题
				currentTalk: 0,//当前对话序号
				cruxErrorNum: 0 ,//关键问题错误次数 答题完后需清空
				isFail: false, //未完成本课学习
				isSuccess: false,//完成本课学习
				frameEnd: 0,//视频片段结束时间点  视频片段结束后清空该值
				frameNext: 0,//视频片段播放结束后，跳转回主线的时间点  视频片段结束后清空该值
				answerOptions: [], //记录用户回答问题的答案 
				multipleAnswerOptions: [], //记录用户多选问题的答案
				extend: [], //记录问卷答案
				questionnaireObj: null,//问卷答题对象
				questionnaireResult: "",//问卷答题结果
				isQuestionnaireResult: false,//是否显示问卷答题结果
				currentQuestionnaire: 0,//当前问卷答题序号
				questionnaireValues: 0, //问卷答题的value累加值
				endResult: true,//为true则是学习完成，为false则是学习未完成
				payShow:false , //支付弹框显示
				paySuccessShow: false, //支付成功弹框显示
				nextQuestionIndex: 0, //下一题序号(临时字段)  为连续问题后的下一个问题的序号使用
				specialHandleQuestion: {}, //特殊问题（不在接口中返回的问题）
				videoShow: true,
				isCheckboxVal:true,//根据多选框的值判断是否显示按钮
				//多选框是否选中
				answerChecked:[
					{
						id:0,
						checked:false
					},
					{
						id:1,
						checked:false
					},
					{
						id:2,
						checked:false
					},
					{
						id:3,
						checked:false
					},
				],
				showCruxError:false,//重点问题错误次数为2时，重新选择按钮
			}
		},
		onLoad(options) {
			this.studentId = uni.getStorageSync(this.studentIdName);
			const wxUser = uni.getStorageSync(this.wxUserName);
			if(wxUser){
				this.wxUser = JSON.parse(wxUser);
			}
			if(options.id){
				this.courseId = options.id;
				this.initCourse(options.id);
			}
			this.initWxConfig();
		},
		onReady() {
			this.videoContext = uni.createVideoContext('courseVideo');
			this.audioContext = uni.createInnerAudioContext();
			// uni.onNetworkStatusChange(function (res) {
			//     console.log(res.isConnected);
			//     console.log(res.networkType);
			// 	if(!res.isConnected){
			// 		this.videoPause();
			// 	}
			// });
		},
		onShow() {
			console.log('Show');
			//this.videoPlay();
		},
		onHide() {
			console.log('Hdie');
			this.feedbackShow = false;
			this.talkShow = false;
			//this.videoPause();
		},
		methods: {
			//初始化课程
			initCourse(id){
				const params = {};
				params.studentId = this.studentId;
				params.courseId = id;
				this.$u.api.wxCourseDetail(params).then((res) => {
					console.log(res);
					console.log(this.specialHandleData);//特殊视频问题数据
					console.log(this.currentQuestion);
					this.course = res;
					this.questionObj = this.course.questions[this.currentQuestion];					console.log(this.questionObj)					//给多选框添加checked					this.addAnswerChecked(this.questionObj)
					
					const specialHandleObj = this.specialHandleData[res.courseId];
					if(specialHandleObj && specialHandleObj.talkArray){
						this.talks= specialHandleObj.talkArray;
					}
					if(specialHandleObj && specialHandleObj.specialHandleQuestion){
						this.specialHandleQuestion = specialHandleObj.specialHandleQuestion;
					}
				})
			},
			focus(){
				console.log("获得焦点")
			},
			change(index) {
				this.current = index;
			},
			//给多选框添加checked
			addAnswerChecked(questionObj){
				console.log(questionObj)
				if(questionObj && questionObj.selectType==2){
					for(let i=0;i<questionObj.answers.length;i++){
						let temp={}
						temp.id=i
						temp.checked=false
						this.answerChecked.push(temp)
					}
				}
			},
			checkboxChange(e){
				console.log(e)
			},
			//多选框
			checkboxGroupChange(e){
				
				
				console.log(e);
				const multipleAnswerArray = []
				if(e.length > 0){
					e.forEach((item) => {
						const answer = this.questionObj.answers[item];
						multipleAnswerArray.push({
							questionId: this.questionObj.questionId,//问题的id
							option: answer.answerOption,//答案的选项，如'B'
							answerId: answer.answerId,//答案的id
						})
					})
					this.isCheckboxVal=false
				}else{
					this.isCheckboxVal=true
				}
				this.multipleAnswerOptions = multipleAnswerArray;
			},
			specialHandleAnswerFun(i){
				const new_array = this.specialHandleQuestion.answers.filter(function(item){
					return item.checked;
				})
				if(new_array.length >= 3 && (!this.specialHandleQuestion.answers[i].checked)){
					return;
				}	
				this.specialHandleQuestion.answers[i].checked = !this.specialHandleQuestion.answers[i].checked;
				this.$forceUpdate();//进行视图层重新渲染
			},
			specialHandlePostBtn(){
				const new_array = this.specialHandleQuestion.answers.filter(function(item){
					return item.checked;
				})
				if(new_array.length < 3){
					this.$u.toast("请选择三样商品！");
					return;
				}
				let count = 0;
				new_array.forEach((item) => {
					count += Number(item.value);
				});
				console.log(count);
				this.question32Show = false;
				//count为0则代表没有零食，count大于0则代表有零食
				if(count === 0){
					this.videoContext.seek(144.56);
					this.videoPlay();
				}else{
					this.videoContext.seek(120.84);
					this.currentQuestion = 4;
					this.questionObj = this.course.questions[this.currentQuestion];
					this.videoPlay();
				}
				this.specialHandleQuestion.answers.forEach((item, index) => {
					item.checked = false;
				})
			},
			//开始学习
			startStudy(){
				this.isStart = true;
				this.currentQuestion = 0;//当前问题初始化	
				this.showCruxError= false;//错误答案标记初始化
				this.cruxErrorNum=0;//错误答案次数初始化
				const params = {};
				params.studentId = this.studentId;
				params.courseId = this.course.courseId;
				this.$u.api.wxStart(params).then((res) => {
					console.log("开始学习课程");
					this.recordId = res.recordId;
					this.showPlayIcon = false;
					console.log(res)
					this.videoPlay();
				})
			},
			//重新学习
			resetStudy(){
				console.log("点击了重新学习")
				this.currentQuestion = 0;
				this.questionObj = this.course.questions[this.currentQuestion];
				this.answerFeedback = {};
				this.talks = [],
				this.isStart = false;
				this.videoContext.seek(0);
				this.videoContext.pause();
				this.questionShow = false;
				this.showPlayIcon = true;
				this.showPauseIcon = false;
				this.questionnaireObj = {};
				this.questionnaireShow = false;
				this.isFail = false;
				this.showCruxError= false;
				this.cruxErrorNum=0
				
			},
			//结束学习
			endStudy(result){
				//判断结束学习是否有问卷答题
				const params = {};
				params.recordId = this.recordId;
				params.options = JSON.stringify(this.answerOptions);
				params.result = result;
				params.extend = JSON.stringify(this.extend);
				this.$u.api.wxEnd(params).then((res) => {
					console.log("本课学习结束")
					console.log(this.courseId);
					//结束后  属性数据初始化
					this.answerOptions = [];
					this.extend = [];
					//this.resetStudy();
				});
			},
			//视频播放
			videoPlay(){
				console.log("视频播放");
				if(!this.videoShow){
					this.videoShow = true;
				}
				if(this.videoContext){
					this.videoContext.play();
				}
				this.showPauseIcon = false;
			},
			//视频暂停
			videoPause(isShow){
				if(this.videoContext){
					console.log("视频暂停");
					this.videoContext.pause();
					this.showPauseIcon = true;
					if(!isShow){
						this.videoShow = false;
					}
				}
			},
			//初始化音频组件
			//closePopTime:时间数
			initAudio(src, closePopTime, callback){
				console.log("开始播放反馈内容音频");
				this.audioContext = uni.createInnerAudioContext();
				this.audioContext.src = src;
				this.audioContext.play();
				//onEnded	callback	音频自然播放结束事件
				this.audioContext.onEnded(() => {
					setTimeout(() => {
						if(callback){
							callback();
						}
					}, closePopTime)
				})
			},
			//关闭支付弹框（返回课程列表页面）
			closePay(){
				this.payShow = false;
				uni.redirectTo({
					url: 'courseList'
				})
			},
			initWxConfig(){
				const params = {};
				params.wyUrl = encodeURIComponent(location.href.split('#')[0]);
				params.accountId = this.studentId;
				this.$u.api.wxTicketSign(params).then((res) => {
					console.log(res)
					//公众号 微信网页开发JS-SDK
					jweixin.config({
						debug : false,
						appId : res.appId,
						timestamp : res.timestamp,
						nonceStr : res.nonceStr,
						signature : res.signature,
						jsApiList : ['chooseWXPay']//想要使用哪些功能，就把方法的名称写在这里，在验证成功之后才能够使用
					});
					
					jweixin.error(function(res){
						console.log(res);
					})
				})
			},
			//点击支付按钮
			pay(){
				const params = {};
				const studentId = uni.getStorageSync(this.studentIdName);
				params.studentId = studentId;
				params.grades = this.course.grade;
				console.log(params);
				this.$u.api.wxBuyCourse(params).then((res) => {
					this.payment(res);
				})
			},
			payment(payObj) {
				const that = this;
				jweixin.chooseWXPay({
				  timestamp: payObj.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
				  nonceStr: payObj.nonceStr, // 支付签名随机串，不长于 32 位
				  package: payObj.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
				  signType: payObj.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
				  paySign: payObj.paySign, // 支付签名
				  success: function (res) {
					that.queryWx(payObj.orderNo);
				  }
				});
				
				// if (typeof WeixinJSBridge == "undefined"){
				//    if( document.addEventListener ){
				// 	   setTimeout(function(){
				// 		   document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady(payObj), false);
				// 	   }, 500)
				//    }else if (document.attachEvent){
				//        document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady(payObj)); 
				//        document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady(payObj));
				//    }
				// }else{
				//    this.onBridgeReady(payObj);
				// }
			},
			// onBridgeReady(payObj){
			// 	console.log(payObj);
			// 	const that = this;
			// 	WeixinJSBridge.invoke(
			// 	  'getBrandWCPayRequest', {
			// 		 "appId":'wx1d04d5352d5c369b',  
			// 		 "timeStamp":payObj.timeStamp,
			// 		 "nonceStr":payObj.nonceStr,
			// 		 "package":payObj.package,
			// 		 "signType":payObj.signType,
			// 		 "paySign":payObj.paySign
			// 	  },
			// 	  function(res){
			// 	  if(res.err_msg == "get_brand_wcpay_request:ok" ){
			// 		// 使用以上方式判断前端返回,微信团队郑重提示：
			// 		//res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
			// 		that.queryWx(payObj.orderNo);
			// 	  } 
			//    }); 
			// },
			queryWx(order_num){
				this.$u.toast("查询微信订单");
				let params = {};
				params.orderNo = order_num;
				this.$u.api.wxPayQuery(params).then((res) => {
					if(res.state === 1){
						//支付成功
						this.initCourse(this.courseId);
						this.payShow = false;
						this.paySuccessShow = true;
					}
				})
			},
			//支付成功后，点击继续播放事件
			paySuccess(){
				this.paySuccessShow = false;
				this.videoPlay();
			},
			//判断是否支付
			psyOrder(e){
				let _this=this
				if(_this.course && _this.course.hasBuy === 0){
					let pay_time = default_pay_time;
					/**
					 * @param {Object} type
					 * 实时监听视频进度
					 * 1.是否是选择答案后的判断
					 * 		是，延后2秒暂停并弹出支付弹框
					 * 		否，实时监听，
					 * 			1.有问题弹窗
					 * 			判断第一个问题弹窗时间是否大于2分钟
					 * 				是，在2分钟时弹出支付框
					 * 				否，不做任何判断，在第一个弹窗时间加3秒弹出支付框
					 * 			2.没有问题弹窗
					 * 				在2分钟时弹出支付框
					 */
					if(!e){
						console.log('点击了答案');
						//延后2秒暂停并弹出支付弹框
						let times=setTimeout(function(){
							console.log("该年级课程未支付，显示支付弹框1")
							_this.videoPause();
							_this.payShow = true;
							return;
						},3000)
					}else{
						if(_this.course.questions.length > 0){
							const showTime = _this.course.questions[0].showTime;
							if(showTime > pay_time){
								if(e.detail.currentTime > pay_time
									&& e.detail.currentTime < (pay_time + 1)){
									console.log("该年级课程未支付，显示支付弹框2")
									this.videoPause();
									this.payShow = true;
									return;
								}
							}
						}else{
							if(e.detail.currentTime > pay_time
								&& e.detail.currentTime < (pay_time + 1)){
								console.log("该年级课程未支付，显示支付弹框3")
								this.videoPause();
								this.payShow = true;
								return;
							}
						}
					}
				}
			},
			// if(this.course.hasBuy === 0){
			// 	console.log(this.course.hasBuy);
			// 	let pay_time = default_pay_time;
			// 	if(this.course.questions.length > 0){
			// 		const showTime = this.course.questions[0].showTime;
			// 		if(showTime < pay_time){
			// 			pay_time = showTime + 3;
			// 		}
			// 	}
			// 	console.log(pay_time)
			// 	//延后2秒暂停并弹出支付弹框
			// 	if(e.detail.currentTime > pay_time
			// 		&& e.detail.currentTime < (pay_time + 1)){
			// 		console.log("该年级课程未支付，显示支付弹框1")
			// 		this.videoPause();
			// 		this.payShow = true;
			// 		return;
			// 	}
			// 	if(e.detail.currentTime > pay_time){
			// 		console.log("该年级课程未支付，显示支付弹框2")
			// 		this.videoPause();
			// 		this.payShow = true;
			// 		return;
			// 	}
			// },
			//视频播放进度变化时触发方法，触发频率 250ms 一次
			videoMonitor(e){
				// console.log(e.detail.currentTime, e.detail.duration);
				// console.log(e.detail.currentTime)
				if(videoLock){
					console.log("方法锁定，等待下一次请求");
					return;
				}
				interval_time = e.detail.currentTime - last_timeupdate;
				//console.log(interval_time, e.detail.currentTime, last_timeupdate);
				last_timeupdate = e.detail.currentTime;
				this.psyOrder(e)
				//32 特殊处理
				if(Number(this.courseId) === 32 && e.detail.currentTime > 118.8 
						&& e.detail.currentTime < 119.8){
					this.videoPause();
					this.question32Show = true;
				}
				//如果有视频片段结束时间和视频主线的时间点，判断结束时间，回到视频主线
				// if(this.frameEnd > 0 && this.frameNext > 0){
				// 	if( e.detail.currentTime > (this.frameEnd - 2) 
				// 		&& e.detail.currentTime < this.frameEnd - 1 ){
				// 		console.log("视频片段播放完毕，回到主线，frameEnd=", this.frameEnd, "frameNext=", this.frameNext);
				// 		this.videoContext.seek(this.frameNext);
				// 		this.videoPlay();
				// 		this.frameEnd = 0;
				// 		this.frameNext = 0;
				// 	}
					
				// 	//启动延时暂停逻辑
				// 	// this.delayProgram(e.detail.currentTime, this.frameEnd, () => {
				// 	// 	console.log("视频片段播放完毕，回到主线，frameEnd=", this.frameEnd, "frameNext=", this.frameNext);
				// 	// 	this.videoContext.seek(this.frameNext);
				// 	// 	this.videoPlay();
				// 	// 	this.frameEnd = 0;
				// 	// 	this.frameNext = 0;
				// 	// })
				// }
				// //如果有视频片段结束时间没有视频主线的时间点，判断结束时间，直接结束
				// if(this.frameEnd > 0 && (!this.frameNext || this.frameNext <=0 )){
				// 	if( e.detail.currentTime > (this.frameEnd - 2)
				// 		&& e.detail.currentTime < this.frameEnd - 1){
				// 		console.log("视频提前结束，frameEnd=", this.frameEnd)
				// 		this.videoEnd();
				// 		this.frameEnd = 0;
				// 		this.frameNext = 0;
				// 		return;
				// 	}
					
				// 	//启动延时暂停逻辑
				// 	// this.delayProgram(e.detail.currentTime, this.frameEnd, () => {
				// 	// 	console.log("视频片段播放完毕，回到主线，frameEnd=", this.frameEnd, "frameNext=", this.frameNext);
				// 	// 	this.videoContext.seek(this.frameNext);
				// 	// 	this.videoPlay();
				// 	// 	this.frameEnd = 0;
				// 	// 	this.frameNext = 0;
				// 	// })
				// }
				//判断当前问题序号是否正确
				if(this.course.questions.length >= (this.currentQuestion + 1) ){
					//const currentQuestionObj = this.course.questions[this.currentQuestion];
					//启动延时暂停逻辑
					this.questionObj = this.course.questions[this.currentQuestion];
					this.delayProgram(e.detail.currentTime, this.questionObj.showTime, () => {
						console.log("视频暂停，显示问题弹框， showTime=", this.questionObj.showTime);
						this.videoPause();
						this.questionShow = true;
						return;
					})
				}
				//特殊处理（对话）
				if(this.talks && this.talks.length > 0){
					if(this.talks.length >= (this.currentTalk + 1)){
						// console.log("当前对话序号:", this.currentTalk);
						const talkObj = this.talks[this.currentTalk];
						if(!talkObj){
							return;
						}
						const showTalkTime = talkObj.showTime;
						const talkArray = talkObj.talks;
						this.delayProgram(e.detail.currentTime, showTalkTime, () => {
							console.log("视频暂停，显示对话弹框",talkObj , this.talks, "序号：", this.currentTalk, ", 时间：", showTalkTime);
							this.videoPause();
							talkArray.forEach((item, index) => {
								setTimeout(() => {
									this.talkText = item;
									this.talkShow = true;
									if(talkArray.length === (index + 1)){
										setTimeout(() => {
											console.log("多个对话弹框显示完毕，播放视频");
											if(talkObj.fail){
												console.log("流程失败，设置课程状态为未完成");
												this.endResult = false;
											}
											this.talkShow = false;
											if(this.talks.length >= (this.currentTalk + 1)){
												this.currentTalk = this.currentTalk + 1;
											}
											this.videoPlay();
										}, talkObj.duration)
									}
								}, talkObj.duration * index )
							})
						})
					}
				}
				//解锁
				videoLock = false;
			},
			//视频自然结束 学习完成
			videoEnd(e){
				console.log("学习结束");
				this.videoPause();
				this.currentQuestion = 0;
				this.questionObj = this.course.questions[this.currentQuestion];
				console.log(this.specialHandleData);
				let specialHandleObj = this.specialHandleData[this.courseId];
				console.log(specialHandleObj);
				
				//视频结束判断是否有问卷题目
				if(specialHandleObj && specialHandleObj.questionnaire){
					console.log(specialHandleObj.questionnaire);
					this.questionnaireShow = true;
					this.questionnaireObj = specialHandleObj.questionnaire;
					this.questionnaireResult = specialHandleObj.result || "";
					return;
				}else{
					if(this.endResult){
						console.log("学习完成");
						this.isSuccess = true;
						this.endStudy(1);
					}else{
						console.log("学习未完成");
						this.isFail = true;
						this.endResult = true;
						this.endStudy(0);
					}
				}
			},
			//下一课  如果是最后一个点击跳转到课程列表页
			nextCourse(){
				if(this.course.nextCourseId > 0){
					const url = '../course/courseView?id='+this.course.nextCourseId;
					uni.redirectTo({
						url: url
					})
				}else{
					uni.reLaunch({
						url: '../course/courseList'
					})
				}
			},
			checkCruxErrorNum(obj,cruxNum){
				/**
				 * 当选择重点问题错误答案后，this.cruxErrorNum==1
				 * 一，有反馈弹窗播放完后
				 * 		（1）.有跳转视频，跳转玩后，重新弹出问题弹窗
				 * 			1.选择错误答案，弹出反馈框，显示返回按钮和我有话说文本框
				 * 				 this.cruxErrorNum==2
				 * 			2.选择正确答案，this.cruxErrorNum==0，跳转正常流程
				 * 		（2）没有跳转视频，this.cruxErrorNum==0，跳转正常流程
				 */
				
				//判断当前问题序号是否正确
				if(cruxNum && cruxNum==1){
					if(obj.frameEnd || obj.frameEnd>0){
						setTimeout(() => {
							// console.log(this.course.questions.length, this.currentQuestion);
							//const currentQuestionObj = this.course.questions[this.currentQuestion];
							//启动延时暂停逻辑

							this.currentQuestion=this.currentQuestion-1
							//this.videoContext.seek(obj.frameStart);

							this.questionObj = this.course.questions[this.currentQuestion];
							console.log(this.questionObj);
							console.log("视频暂停2，显示问题弹框， showTime=", this.questionObj);
							
							this.videoPause();
							this.questionShow = true;
						}, (obj.frameEnd - obj.frameStart) * 1000+500)
						
					}else{
						setTimeout(() => {
							// console.log(this.course.questions.length, this.currentQuestion);
							//const currentQuestionObj = this.course.questions[this.currentQuestion];
							//启动延时暂停逻辑
							console.log(this.nextQuestionIndex);
							console.log(this.currentQuestion)
							this.currentQuestion=this.currentQuestion-1
							//this.videoContext.seek(obj.frameStart);
							
							this.questionObj = this.course.questions[this.currentQuestion];
							console.log(this.questionObj);
							console.log("视频暂停3，显示问题弹框， showTime=", this.questionObj);
							
							this.videoPause();
							this.questionShow = true;
						},100)
						
					}
				}
				if(cruxNum && cruxNum==2){
					this.currentQuestion=this.currentQuestion-1
					this.videoPause();
					this.feedbackShow = true;
					this.showCruxError= true;
				}
			},
		    // 重点问题答错了点击了重新选择
			closeDia(answerFeedback,questionObj) {
				console.log('重新选择')
				this.feedbackShow = false;
				this.showCruxError= false;

				this.questionObj = this.course.questions[this.currentQuestion];
				setTimeout(() => {
					
					console.log("视频暂停3，显示问题弹框， showTime=", this.questionObj);
					this.videoPause();
					this.questionShow = true;
				}, 500)
			},
			/**
			 * 点击答案处理逻辑
			 * this.questionObj：所有问题数据
			 * obj:当前问题数据
			 */
			answerFun(obj, isMultiple){
				console.log(obj);
				console.log(isMultiple);
				console.log("点击回答问题");
				//判断是否是重点问题（如果有跳转则需重新播放对应点的视频再作答）
				if(this.questionObj.crux === 1){ 
					console.log("关键问题");
					//判断是否选中的是关键答案
					if(!obj.crux || obj.crux==0){
						this.cruxErrorNum = this.cruxErrorNum + 1;
						console.log("关键问题回答错误, 错误次数", this.cruxErrorNum);
						//关键问题打错3次直接结束学习
						if(this.cruxErrorNum >=3){
							console.log("关键问题回答错误超过3次，未完成本课学习，需重新学习")
							this.isFail = true;
							this.cruxErrorNum = 0;
							this.endStudy(0);
							this.videoContext.seek(0);
							return;

							// this.$refs.cruxErrorNumToast.show({
							// 	title: '回答错误，请重新选择',
							// 	type: 'warning',
							// 	duration:'1000'
							// })
						}
						//判断操作类型有无跳转
						// if(obj.type === 3 || obj.type === 4){
						// 	console.log("关键问题回答错误, 跳转相应起始点重新观看视频片段");
						// 	this.questionShow = false;
						// 	// this.videoContext.seek(obj.frameStart);
						// 	// this.frameEnd = obj.frameEnd;
						// 	// this.frameNext = obj.frameNext;
						// 	this.videoContext.seek(this.frameStart);
						// 	this.videoPlay();
						// }
						
					}else{
						//关键问题回答正确，初始化关键问题错误次数
						this.cruxErrorNum = 0;
						this.showCruxError= false;
					}
				}
				
				if(this.nextQuestionIndex > 0){
					console.log('指定下一题序号, nextQuestionIndex=', this.nextQuestionIndex);
					setTimeout(() => {
						this.currentQuestion = this.nextQuestionIndex;
						this.questionObj = this.course.questions[this.nextQuestionIndex];
						this.nextQuestionIndex = 0;
					}, 100)	
				}else{
					console.log('默认正常问题流程');
						setTimeout(() => {
							this.currentQuestion = this.currentQuestion + 1;
							console.log('当前问题序号,'+this.currentQuestion)
							this.questionObj = this.course.questions[this.currentQuestion];
						}, 100)	
						
				}
				
				
				if(!isMultiple){
					console.log("单选问题");
					//记录用户回答问题的答案
					this.answerOptions.push({
						questionId: this.questionObj.questionId,
						option: obj.answerOption,
						answerId: obj.answerId,
					});
					console.log(this.specialHandleData)
					//如存在问题间有相互跳转的情况时，序号为指定序号
					const specialHandleObj = this.specialHandleData[this.course.courseId];
					if(specialHandleObj){
						if(specialHandleObj.questionJump && specialHandleObj.questionJump.length > 0){
							try{
								specialHandleObj.questionJump.forEach((item, index) => {

									if(obj.answerId === item.answerId){
											console.log(item)
											console.log(index)
										if(item.questionIndex >= 0){
											console.log('指定问题序号，questionIndex=', item.questionIndex);
											setTimeout(() => {
												this.currentQuestion = item.questionIndex;
												this.questionObj = this.course.questions[this.currentQuestion];
												if(item.nextQuestionIndex && item.nextQuestionIndex > 0){
													this.nextQuestionIndex = item.nextQuestionIndex;
												}
												this.addAnswerChecked(this.questionObj)
											},100)	
											if(item.isNext){
												throw new Error("结束循环，跳出方法并结束方法")
											}
											if(item.fail){
												console.log("设置课程未完成");
												this.endResult = false;
											}
										}
										if(item.talkIndex >= 0){
											console.log('指定对话序号，talkIndex=', item.talkIndex);
											this.currentTalk = item.talkIndex;
										}
										//throw new Error("结束循环，跳出方法并结束方法")
									}
								})
							}catch(e){
								console.log(e);
								return;
							}
							
						}
					}
					//判断后续操作类型
					switch(obj.type){
						//无反馈，无跳转
						case 1:
							console.log("无反馈，无跳转");
							//如果是重点问题,并选择了错误答案,判断重新选择
							// if(this.cruxErrorNum==1 ){
							// 	this.checkCruxErrorNum(obj,1)
							// }
							// if(this.cruxErrorNum==2){
							// 	this.checkCruxErrorNum(obj,2)
							// 	return;
							// }
							if(this.cruxErrorNum>0){
								this.currentQuestion=this.currentQuestion-1
								this.videoPause();
								this.feedbackShow = true;
								this.showCruxError= true;
								return;
							}
							
							this.questionShow = false;
							this.videoPlay();
								this.psyOrder()
							break;
						//有反馈，无跳转
						case 2:
							console.log("有反馈，无跳转");
							//给反馈对象赋值
							this.answerFeedback = obj;
							this.questionShow = false;
							this.feedbackShow = true;
							this.initAudio(obj.feedbackVoice, obj.feedbackDuration, () => {
								console.log("执行音频结束后回调方法");
								//如果是重点问题,并选择了错误答案,判断重新选择
								// if(this.cruxErrorNum==1 ){
								// 	this.checkCruxErrorNum(obj,1)
								// }
								// if(this.cruxErrorNum==2){
								// 	this.checkCruxErrorNum(obj,2)
								// 	return;
								// }
								console.log(this.cruxErrorNum);
								if(this.cruxErrorNum>0){
									this.currentQuestion=this.currentQuestion-1
									this.videoPause();
									this.feedbackShow = true;
									this.showCruxError= true;
									return;
								}
								
								this.feedbackShow = false;
								this.$forceUpdate();//进行视图层重新渲染
								this.videoPlay();
								this.psyOrder()
							})
							break;
						//无反馈，有跳转
						case 3:
							console.log("无反馈，有跳转, frameEnd=", obj.frameEnd, "frameNext=", obj.frameNext);
							this.questionShow = false;
							//如果是重点问题,并选择了错误答案,判断重新选择
							if(this.cruxErrorNum==1 ){
								this.checkCruxErrorNum(obj,1)
							}
							if(this.cruxErrorNum==2){
								this.checkCruxErrorNum(obj,2)
								return;
							}

							
							this.$forceUpdate();//进行视图层重新渲染
							this.videoContext.seek(obj.frameStart);
							this.videoPlay();
							// this.frameEnd = obj.frameEnd;
							// this.frameNext = obj.frameNext;
							console.log(obj.frameEnd - obj.frameStart);
							//如果有视频片段结束时间和视频主线的时间点，判断结束时间，回到视频主线
							if(obj.frameEnd > 0 && obj.frameNext > 0){
								setTimeout(() => {
									console.log("视频片段播放完毕，回到主线，frameEnd=", obj.frameEnd, "frameNext=", obj.frameNext);
									if(this.payShow == true || this.questionShow == true){
										this.videoPause();
									}else{
										this.videoContext.seek(obj.frameNext);
										this.videoPlay();
									}

								}, (obj.frameEnd - obj.frameStart) * 1000+200)
							}
							//如果有视频片段结束时间没有视频主线的时间点，判断结束时间，直接结束
							if(obj.frameEnd > 0 && (!obj.frameNext || obj.frameNext <=0 )){
								setTimeout(() => {
									console.log("视频提前结束，frameEnd=", obj.frameEnd)
									this.videoEnd();
								}, (obj.frameEnd - obj.frameStart)* 1000)
							}
							this.psyOrder();
							break;
						//有反馈，有跳转
						case 4:
							console.log("有反馈，有跳转, frameEnd=", obj.frameEnd, "frameNext=", obj.frameNext);
							this.answerFeedback = obj;
							this.questionShow = false;//是否显示问题弹框
							this.feedbackShow = true;//是否显示反馈弹框
							console.log('错误答案次数,'+this.cruxErrorNum)
							this.initAudio(obj.feedbackVoice, obj.feedbackDuration, () =>{
								console.log("执行音频结束后回调方法");
								//如果是重点问题,并选择了错误答案,判断重新选择
								if(this.cruxErrorNum==1 ){
									this.checkCruxErrorNum(obj,1)
								}
								if(this.cruxErrorNum==2){
									this.checkCruxErrorNum(obj,2)
									return;
								}
								
								this.feedbackShow = false;//是否显示反馈弹框
								this.$forceUpdate();//进行视图层重新渲染
								this.videoContext.seek(obj.frameStart);
								this.videoPlay();
								// this.frameEnd = obj.frameEnd;
								// this.frameNext = obj.frameNext;
								//如果有视频片段结束时间和视频主线的时间点，判断结束时间，回到视频主线
								if(obj.frameEnd > 0 && obj.frameNext > 0){
									setTimeout(() => {
										console.log("视频片段播放完毕，回到主线，frameEnd=", obj.frameEnd, "frameNext=", obj.frameNext);
										if(this.payShow == true || this.questionShow == true){
											this.videoPause();
										}else{
											this.videoContext.seek(obj.frameNext);
											this.videoPlay();
										}
										//特殊视频Id的视频跳转修改
										},(obj.frameEnd - obj.frameStart) * 1000+260)
									// }, this.courseId==17 ?(obj.frameEnd - obj.frameStart) * 1000+300:(obj.frameEnd - obj.frameStart) * 1000)
								}

								//如果有视频片段结束时间没有视频主线的时间点，判断结束时间，直接结束
								if(obj.frameEnd > 0 && (!obj.frameNext || obj.frameNext <=0 )){
									setTimeout(() => {
										console.log("视频提前结束，frameEnd=", obj.frameEnd)
										this.videoEnd();
									}, (obj.frameEnd - obj.frameStart) * 1000)
								}
									this.psyOrder()
							});

							break;
						default:
							console.error("type参数错误");
								this.psyOrder()
							break;
					}
				}else{
					if(this.multipleAnswerOptions.length <= 0){
						this.$u.toast("请选择答案");
					}
					console.log("多选问题")
					//多选
					this.answerOptions.push.apply(this.answerOptions, this.multipleAnswerOptions);
					this.multipleAnswerOptions = [];
					console.log(this.answerOptions);
					this.questionShow = false;
					// if(this.nextQuestionIndex && this.nextQuestionIndex > 0){
					// 	console.log('多选指定下一题序号, nextQuestionIndex=', this.nextQuestionIndex);
					// 	setTimeout(() => {
					// 		this.currentQuestion = this.nextQuestionIndex;
					// 		this.questionObj = this.course.questions[this.nextQuestionIndex];
					// 		this.nextQuestionIndex = 0;
					// 	}, 500)	
					// }
					// if(this.course.hasBuy === 0){
					// 	console.log("该年级课程未支付，显示支付弹框")
					// 	this.videoPause();
					// 	this.payShow = true;
					// 	return;
					// }
					this.videoPlay();
					this.psyOrder()
				}
			},
			//点击问卷答题答案处理逻辑
			questionnaireAnswerFun(obj, qid){
				const str = '{"q'+qid+'": "'+obj.answerOption+'"}';
				this.extend.push(
					str
				);
				this.questionnaireValues = this.questionnaireValues + Number(obj.value);
				console.log(this.extend);
				console.log(this.questionnaireValues);
				if((this.currentQuestionnaire + 1) >= this.questionnaireObj.questions.length){
					console.log("最后一题");
					//课程ID=28，《三人行必有我师》问卷处理
					if(Number(this.courseId) === 28){
						if(this.questionnaireValues > 2*60){
							this.infoShow = true;
							this.infoTitle = "提示信息";
							this.infoContent = "时间总和不能超过2个小时, 请重新选择哦",
							this.currentQuestionnaire = 0;
							this.questionnaireValues = 0;
							this.extend = [];
							return;
						}
						this.currentQuestionnaire = 0;
						this.questionnaireValues = 0;
						this.questionnaireShow = false;
						this.questionnaireObj = {};
						this.isSuccess = true;
						this.endStudy(1);
						return;
					}else if(Number(this.courseId) === 69 || Number(this.courseId) === 70){
						this.extend = {
							"count": this.questionnaireValues,
							"questions": this.extend
						}
						console.log(this.extend);
						this.isQuestionnaireResult = true;
						return;
					}
					this.currentQuestionnaire = 0;
					this.questionnaireValues = 0;
					this.questionnaireShow = false;
					this.questionnaireObj = {};
					if(this.endResult){
						this.isSuccess = true;
						console.log("学习完成");
						this.endStudy(1);
					}else{
						console.log("学习未完成");
						this.isFail = true;
						this.endResult = true;
						this.endStudy(0);
					}
					return;
				}else{
					this.currentQuestionnaire = this.currentQuestionnaire + 1;
					return;
				}
			},
			questionnairePost(){
				this.endStudy(1);
				this.currentQuestionnaire = 0;
				this.questionnaireValues = 0;
				this.extend = [];
				this.questionnaireShow = false;
				this.questionnaireObj = {};
				this.questionnaireResult = "";
				this.isQuestionnaireResult = false;
				this.isSuccess = true;
			},
			//延时暂停方法
			delayProgram(currentTime, showQuestionTime, callback){
				//判断当前时间是否大于延时1s的显示时间并且小于显示时间
				showQuestionTime = showQuestionTime - 0.5
				//间隔时间在跳转到指定位置视频的时候会出现差值过的情况，在这里判断避免此类问题发生
				interval_time = interval_time < 0.5 ? interval_time : 0.5;
				if(currentTime - showQuestionTime < interval_time && currentTime - showQuestionTime > 0){
					console.log("触发延时暂停,interval_time=", interval_time, ",currentTime=", currentTime, ",showQuestionTime=", showQuestionTime);
					//触发延时暂停, 上锁
					videoLock = true;
					setTimeout(() => {
						// console.log("视频暂停，显示问题弹框");
						// this.videoPause();
						// this.questionShow = true;
						// //视频暂停，解锁
						// videoLock = false;
						if(callback){
							callback();
						}
					}, (currentTime - showQuestionTime) * 1000)
				}
			} 
		}
	}
</script>

<style lang="scss" scoped>
	image{
		will-change: transform;
		display: block;
	}
	.course_title{
		font-size: 32rpx;
		color: #333;
		padding: 42rpx 30rpx;
	}
	.course_video{
		height:0;
		padding-bottom:56.25%;
		position: relative;
		video{
			position:absolute;
			left:0;top:0;
			width:100%;
			height:100%;
			align-items:center;
			display: block;
		}
		.video_icon{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			z-index: 99999;
			background: rgba(0,0,0,0.34);
			image{
				width: 80rpx;
			}
		}
	}
	.course_content{
		padding: 0 30rpx;
		margin-bottom: 140rpx;
		.course_p{
			font-size: 28rpx;
			color: #333333;
			line-height: 1.8;
			text-indent: 2em;
		}
		.course_text{
			font-size: 28rpx;
			color: #333333;
			line-height: 1.8;
			margin: 30rpx 0;
		}
	}
	.course_btn{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 110rpx;
		background: #11A8FF;
		color: #fff;
		line-height: 110rpx;
		text-align: center;
		font-size: 36rpx;
	}
	.question_box{
		padding: 40rpx 40rpx 12rpx 40rpx;
		color: #11A8FF;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-end;
		.question_pinyin{
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 0 4rpx;
		}
		.pinyin{
			font-size: 20rpx;
		}
	}
	.answer_box{
		margin: 0 40rpx;
		padding: 28rpx 0;
		border-bottom: 1px solid #eee;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-end;
		.answer_pinyin{
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 0 4rpx;
		}
		.pinyin{
			font-size: 20rpx;
		}
	}
	.questionnaire_box{
		margin: 0 40rpx;
		padding: 28rpx 0;
		border-bottom: 1px solid #eee;
		display: flex;
		flex-direction: column;
		.questionnaire_question{
			margin-bottom: 20rpx;
		}
		.questionnaire_answer_box{
			display: flex;
			flex-direction: column;
			.questionnaire_answer{
				padding: 10rpx;
				border-bottom: 1px solid #eee;
			}
		}
	}
	.feedback_box{
		padding: 40rpx;
		color: #11A8FF;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-end;
		.feedback_pinyin{
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 0 4rpx;
		}
		.pinyin{
			font-size: 20rpx;
		}
	}
	.speak-wrapper{
		padding:20rpx;
		text-align: center;
		.btn-wrapper{
			width: 90%;
		}
	}
	.study_result_box{
		width: 100%;
		height: 100%;
		position: relative;
		.study_result_top{
			width: 405rpx;
			height: 280rpx;
			position: absolute;
			top: 8%;
			left: 50%;
			transform:translate(-50%,-50%);
		}
		// .study_result_top{
		// 	width: 35%;
		// 	position: absolute;
		// 	top: -80rpx;
		// 	left: 50%;
		// 	transform:translate(-50%,-50%);
		// }
	}
	.study_result_title{
		width: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform:translate(-50%,-50%);
		font-size: 36rpx;
		font-weight: bold;
		color: #11A8FF;
		text-align: center;
		// margin-top: 180rpx;
		// margin-bottom: 80rpx;
	}
	.study_result_title_gray{
		color: #999;
	}
	.pay_success_img{
		width: 180rpx;
		height: 220rpx;
		position: absolute;
		top: 35%; 
		left: 50%;
		transform:translate(-50%,-50%);
	}
	.pay_success_text{
		width: 100%;
		position: absolute;
		top: 73%;
		left: 50%;
		transform:translate(-50%,-50%);
		text-align: center;
		font-size: 36rpx;
		font-weight: bold;
	}
	.pay_big_title{
		width: 100%;
		position: absolute;
		top: 40%;
		left: 50%;
		transform:translate(-50%,-50%);
		text-align: center;
		font-size: 36rpx;
		font-weight: bold;
	}
	.pay_orange{
		color: #FF7A16;
	}
	.pay_small_title{
		width: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform:translate(-50%,-50%);
		/* font-size: 18rpx; */
		color: #999;
		text-align: center;
		// margin-top: 14rpx;
	}
	.pay_price_text{
		position: absolute;
		top: 70%;
		left: 50%;
		transform:translate(-50%,-50%);
		color:#FF7A16;
		text-align: center;
		// margin: 40rpx 0 110rpx 0;
		.pay_big_price{
			font-size: 48rpx;
			font-weight: bold;
		}
	}
	.study_result_btn{
		width: 100%;
		position: absolute;
		top: 80%;
		left: 50%;
		transform:translate(-50%,-50%);
		font-size: 36rpx;
		color: #fff;
		background: #11A8FF;
		text-align: center;
		padding: 28rpx 0;
		width: 50%;
		border-radius: 50rpx;
	}
	.pay_btn{
		font-size: 34rpx;
		text-align: center;
		padding: 28rpx 0;
		width: 340rpx;
		position: absolute;
		bottom: -10%;
		left: 50%;
		transform:translate(-50%,0);
		background-image: linear-gradient(to left, #FE6B2A, #FF9A1D);
		border-radius: 50rpx;
		color:#fff;
	}
	.pay_close_btn{
		position: absolute;
		left: 50%;
		transform:translate(-50%,0);
		bottom: -36%;
		width: 64rpx;
		height: 64rpx;
	}
	.uni-list-cell {
	    display: flex;
		padding: 20rpx 40rpx;
	}

</style>
