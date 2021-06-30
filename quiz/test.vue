<template>
	<view>
		<view class="homeBox"></view>
		<cu-custom bgColor="bg-white" :isBack="true" style="font-size: 34rpx;color: #000;font-weight: bold;">
		    <block slot="content">{{title}}</block>
		</cu-custom>
		<view v-if="!isResult">
			<view class="progress_box">
				<view style="color:#999">
					<span style="font-size: 36rpx;margin-right: 4rpx;color:#666">{{currentTest}}</span> /{{totalTest}}
				</view>
				<view style="width: 100%;margin-left: 30rpx;">
					<u-line-progress height="23" :percent="currentTest/totalTest*100" :round="false" active-color="#FF9A1D" :show-percent="false" round></u-line-progress>
				</view>
			</view>
			<view class="test_box"> 
				<view class="test_title">{{currentTest}}、{{currentTestObj.topicContent}}</view>
				<view class="test_supplement" v-for="(item, index) in currentTestObj.supplement" :key="index">{{item}}</view>
				<view :class="[answer_logo==item.answer_logo?'test_active':'','test_answer']" :data-answer_logo=item.answer_logo v-for="(item, index) in currentTestObj.vos" :key="item.id" @click="selectedAswer">
					{{item.answer_logo}}、{{item.content}}
				</view>
				<view class="test_btn">
					<view class="btnn" >
						 <button v-if="!isPostBtn" style="padding: 20rpx 0;width: 300rpx;" size="mini" type="primary" :style="btnStatus ? 'background: #11A8FF;color:#fff' : 'background: #B6BBCE;color:#fff'" :disabled="!btnStatus" @click="next">下一题</button>
						 <button v-else size="mini" type="primary" :style="postBtn ? 'background: #11A8FF;color:#fff;padding: 20rpx 0;width: 300rpx;' : 'background: #B6BBCE;color:#fff;padding: 20rpx 100rpx;'" :disabled="!postBtn" @click="quizPost">提交测试</button>
					</view>
					<!-- <view class="btnn" v-else> -->
						<!-- style="background: #11A8FF;color:#fff;padding: 20rpx 100rpx;" -->
					<!-- </view> -->
					<view class="btnn2" >
						<!-- style="background: #11A8FF;color:#fff;padding: 20rpx 100rpx;" -->
						<button v-if="isProgress" size="mini" type="primary" style="background:#ecf5ff;color:#11A8FF;border: 1rpx solid #11A8FF; padding: 20rpx 0;width: 300rpx;" @click="resetTest">重新答题</button>
						<button v-else size="mini" type="primary" style="background:#ecf5ff;color:#11A8FF;border: 1rpx solid #11A8FF; padding: 20rpx 0;width: 300rpx;" @click="progressFn">保存进度</button>
					</view>	
					
				</view>
			</view>
		</view>
		<view v-else>
			<view class="test_box">
				<view style="text-align: center;">
					<image :src="'/quiz/static/img/state' + resultObj.score + '.png'" mode="widthFix" style="width: 280rpx;margin-bottom: 20rpx;" />
				</view>
				<view v-for="(item, i) in resultObj.topicAnalyze" :key="item.id">
					<view class="test_title">{{i + 1}}、{{item.topicContent}}</view>
					<view class="test_supplement" v-for="(item1, index) in item.supplement" :key="index">{{item1}}</view>
					<view :class="[
						item.normalAnswer === obj.answer_logo ? 'test_active_blue' : '', 
						(item.studentAnswer === obj.answer_logo && item.studentAnswer != item.normalAnswer) ? 'test_active_red' : '' , 'test_answer']" v-for="(obj, j) in item.vos" :key="item.id">
						{{obj.answer_logo}}、{{obj.content}}
					</view>
					<view class="test_normalAnswer">正确答案：{{item.normalAnswer}}</view>
					<view class="test_remark">
						<view>测试要点：{{item.testPoints}}</view>
						<view>内容领域：{{item.scopes}}</view>
						<view>答案解析：{{item.answerAnalyze}}</view>
					</view>
				</view>
				<view class="test_answer test_rest_btn" @click="resetTest">重新测试</view>
			</view>
		</view>
		<view style="position: fixed;bottom: 0;left:0;width: 100%;z-index:-1">
			<image src="/quiz/static/img/test_bottom_bg.png" mode="widthFix" style="width:100%;display: block;height: auto;"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '测试题',
				grade: 0,//年级数
				totalTest: 10,
				currentTest: 1,
				testAnswer: [],
				//"id":null,"topicContent":"上课的时候，同学找我讲话，老师提醒了我。此时，我的合适的做法是","topicContentPinyin":null,"supplement":null,"vos":[{"id":1,"answer_logo":"A","content":"继续讲话，不理睬老师。"},{"id":2,"answer_logo":"B","content":"跟老师说不是我先说话的。"},{"id":3,"answer_logo":"C","content":"停止讲话，认真听老师讲课。"}]
				currentTestObj: {},
				isPostBtn: false,
				btnStatus: false,
				postBtn: false,
				isResult: false,
				resultObj: {},
				studentId: 0,
				// btnWord:'保存进度',
				isProgress:false,
				answer_logo:"",//选中后的答案选项
			}
		},
		onLoad(options) {
			const studentId = uni.getStorageSync(this.studentIdName);
			this.studentId = studentId;
			console.log(options.grade);
			if (options.grade && options.grade<3) {
			    this.totalTest=20
			}else{
				this.totalTest=50
			}
			
			if(options.grade){
				const gradeName = this.utils.getConfigValue(this.cfgData.gradeList, options.grade);
				this.title = gradeName + '测试题';
				this.grade = parseInt(options.grade);
			}else{
				uni.reLaunch({
					url:'../quiz/quizList'
				})
			}
			this.getProgress();
			// this.initTest();
		},
		methods: {
			//初始化
			initTest(){
				const params = {};
				params.grade = this.grade;
				params.orderNum = this.currentTest;

				this.$u.api.wxGetNextTopic(params).then((res) => {
					console.log(res);
					this.currentTestObj = res;
					
				})
			},
			//获取答题进度
			getProgress(){
				const params = {};
				params.grade =this.grade;
				params.studentId=this.studentId
				console.log(params)
				
				this.$u.api.wxGetProgress(params).then((res) => {
					let answerData=res
					console.log(res);
					if(answerData.isFinish===0 ){
						console.log('有数据');
						//将上次的答题数据保存
						this.testAnswer=JSON.parse(answerData.testAnswer)
						if(this.testAnswer.length>0){
							
							let answer= this.testAnswer[this.testAnswer.length-1]
					
							this.currentTest=answer.questionId+1
							if(this.currentTest===this.totalTest ){
								this.isPostBtn = true;
							}
							if(this.currentTest>this.totalTest){
								this.isPostBtn = true;
								this.currentTest=answer.questionId
							}
							// this.btnWord='重新答题'
							this.isProgress=true
							this.initTest();
						}
					}else{
						console.log('没数据');	
						this.initTest();	
					}
				})
			},
			//保存进度
			progressFn(){
					if(this.testAnswer.length>0){
						const params = {};
						params.grade =this.grade;
						params.studentId=this.studentId
						params.testAnswer=JSON.stringify(this.testAnswer);
						this.$u.api.wxKeepProgress(params).then((res) => {
							console.log(res);

						})
						uni.showToast({
							icon: 'success',
							title: '保存成功'
						})
					}
						// uni.showToast({
						// 	icon: 'warning',
						// 	title: '第一题还没答哦'
						// })
			},
			// 选中答案数据添加到数组
			addAnswerList(){
				const answerObj = {}
				answerObj.questionId = this.currentTestObj.id;
				answerObj.option = this.answer_logo;
				this.testAnswer[this.currentTest - 1] = answerObj;
				console.log(this.testAnswer);
			},
			
			//答案选项
			//:class="[testAnswer[currentTest - 1] && (testAnswer[currentTest - 1].option === item.answer_logo) ? 'test_active' : '', 'test_answer']"
			selectedAswer(e){
				console.log(e)
				this.answer_logo=e.target.dataset.answer_logo
				if(this.currentTest === this.totalTest){
					this.postBtn = true;
					this.addAnswerList();
				}
				if(!this.btnStatus){
					this.btnStatus = true;
				}
				this.$forceUpdate();
				
			},
			
			// 下一题
			next(){
				this.addAnswerList();
				this.currentTest = this.currentTest + 1;
				this.isProgress=false
				// this.btnWord='保存进度'
				this.answer_logo=""
				if(this.currentTest === this.totalTest){
					this.isPostBtn = true;
					
				}
				this.btnStatus = false;
				this.postBtn = false;
				this.initTest();
			},
			// 提交测试
			
			quizPost(){
				const params = {};
				params.studentId  = this.studentId;
				params.grade = this.grade;
				params.testAnswer  = JSON.stringify(this.testAnswer);
				this.$u.api.wxAnswerAdd(params).then((res) => {
					this.resultObj = res;
					this.isResult = true;
				})
				// this.$u.api.wxSelectAllByGrade(params).then((res) => {
				// 	console.log(res);
				// 	this.resultArray = res;
				// 	this.isResult = true;
				// })
			},
			
			// 重新测试
			resetTest(){
				this.resultObj = {};
				this.isResult = false;
				this.testAnswer = [];
				this.currentTest = 1;
				// this.btnWord='保存进度';
				this.isProgress=false;
				this.isPostBtn = false;
				this.btnStatus = false;
				this.postBtn = false;
				this.answer_logo="";
				
				this.initTest();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.homeBox {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        background-color: #11A8FF;
		z-index: -1;
    }
	.progress_box{
		margin: 25rpx;
		padding: 60rpx 120rpx;
		background: #fff;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
	}
	.test_box{
		margin: 25rpx;
		padding: 46rpx 16rpx;
		background: #fff;
		border-radius: 20rpx;
		margin-bottom: 140rpx;
		.test_title{
			font-size: 32rpx;
			font-weight: bold;
			margin-bottom: 20rpx;
		}
		.test_supplement{
			line-height: 1.5;
			margin-bottom: 10rpx;
			color: #666;
		}
		.test_answer{
			border:1px solid #CCC;
			margin: 30rpx 0;
			padding: 36rpx;
			border-radius: 16rpx;
			font-size: 29rpx;
		}
		.test_active{
			background: #FF9A1D;
			color:#fff;
		}
		.test_active_blue{
			background: #11A8FF;
			color:#fff;
		}
		.test_active_red{
			background: #FB5544;
			color:#fff;
		}
		.test_btn{
			// text-align: center;
			margin-top: 64rpx;
			display: flex;
			justify-content: space-around;
		}
		.btnn2{
			
		}
		.test_normalAnswer{
			color: #11A8FF;
			margin-top: 40rpx;
			font-size: 29rpx;
		}
		.test_remark{
			color: #666;
			margin-top: 40rpx;
			margin-bottom: 100rpx;
			font-size: 29rpx;
			line-height: 2;
		}
		.test_rest_btn{
			background: url(/psyWx/gzh/quiz/static/img/btn_bg.png) no-repeat;
			background-size: cover;
			text-align: center;
			color: #fff;
			border: none;
		}
	}
</style>
