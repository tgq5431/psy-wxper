<template>
	<view>
		<view class="fixed">
			<cu-custom bgColor="text-white" :isBack="false" style="font-size: 34rpx;color: #000;font-weight: bold;">
			</cu-custom>
		</view>
		<view class="user_bg" :style="[{'padding-top':StatusBar + 'px'}]">
			<view class="info_box">
				<view><u-avatar :src="wxUser.avatarUrl" size="large"></u-avatar></view>
				<view class="info_right">
					<view style="font-size: 42rpx;">{{wxUser.nickName}}</view>
					<view style="font-size: 24rpx;margin-top: 10rpx;" @click="jump('../user/info')">
						<span class="info_subText">{{getConfigValue(gradeList, userInfo.grade)}}</span>
						<span class="info_subText">{{getConfigValue(sexList, userInfo.gender)}}</span>
							<u-icon  name="arrow-right" size="24" color="#fff" ></u-icon>
						
					</view>
				</view>
			</view>
		</view>
		<view class="user_title_box">
			<view>历史学习记录</view>
			<view v-if="historyList.length > 0" @click="jump('../user/history')"><u-icon name="arrow-right" color="#999" size="28"></u-icon></view>
		</view>
		<view v-if="historyList.length > 0" class="user_content_box"> 
		    <!--横向滚动-->
		    <scroll-view class="user_content" scroll-x>
		        <view style="display: flex;margin: 0 26rpx;">
					<view class="user_content_item"
						v-for="(item, index) in historyList" :key="index" @click="jump('../course/courseView?id='+item.courseId)"
					>
						<view class="user_history_img">
							<image :src="item.imgUrl" mode="widthFix"></image>
						</view>
						<view class="user_history_text">《{{item.title}}》</view>
						<view class="user_history_text">{{item.subTitle}}</view>
					</view>
				</view>
		    </scroll-view>
		</view>
		<!-- <u-empty v-else mode="history" text="无历史学习记录"></u-empty> -->
		<view v-else style="display: flex;align-items: center;justify-content: center;">
			<image src="/static/icon_nodata.png" mode="widthFix" style="width: 40rpx;"></image>
			<view style="font-size: 28rpx;color:#999;margin-left: 10rpx;">暂无数据</view>
		</view>
		<view class="user_title_box">
			<view>已完成测试</view>
		</view>
		<view v-if="quizList.length > 0" class="user_quiz_box">
			<view class="user_quiz_item" v-for="(item, index) in quizList" :key="item.recordNum" @click="jump('../quiz/result?recordNum='+item.recordNum+'&gradeNum='+item.gradeNum)">
				{{item.gradeName}}
			</view>
		</view>
		<view v-else style="display: flex;align-items: center;justify-content: center;">
			<image src="/static/icon_nodata.png" mode="widthFix" style="width: 40rpx;"></image>
			<view style="font-size: 28rpx;color:#999;margin-left: 10rpx;">暂无数据</view>
		</view>
		<view class="user_title_box" @click="jump('../user/buyHistory')">
			<view class="user_title_left">
				<view class="user_icon">
					<image src="/user/static/img/icon_buy.png" mode="widthFix"></image>
				</view>
				<view class="user_title_text">已购买课程</view>
			</view>
			<view><u-icon name="arrow-right" color="#999" size="28"></u-icon></view>
		</view>
		<view class="user_title_box" @click="jump('../user/feedback')">
			<view class="user_title_left">
				<view class="user_icon">
					<image src="/user/static/img/icon_feedback.png" mode="widthFix"></image>
				</view>
				<view class="user_title_text">意见反馈</view>
			</view>
			<view><u-icon name="arrow-right" color="#999" size="28"></u-icon></view>
		</view>
		<view class="user_title_box" @click="jump('../user/about')">
			<view class="user_title_left">
				<view class="user_icon">
					<image src="/user/static/img/icon_about.png" mode="widthFix"></image>
				</view>
				<view class="user_title_text">关于我们</view>
			</view>
			<view><u-icon name="arrow-right" color="#999" size="28"></u-icon></view>
		</view>
		<view class="user_title_box" @click="contact">
			<view class="user_title_left">
				<view class="user_icon">
					<image src="/user/static/img/icon_contact.png" mode="widthFix"></image>
				</view>
				<view class="user_title_text">联系我们</view>
			</view>
			<view><u-icon name="arrow-right" color="#999" size="28"></u-icon></view>
		</view>
		<u-action-sheet :list="contactList" @click="contactClick" v-model="contactShow"></u-action-sheet>
		<view class="cu-tabbar-height"></view>
		<foot-menu :index="3" @checkLogin="checkLogin"></foot-menu>
	</view>
</template>

<script>
	import footMenu from '@/components/footMenu.vue';
	export default {
		components:{ footMenu },
		data() {
			return {
				wxUser: {},
				StatusBar: this.StatusBar,
				sexList: this.cfgData.sexList,
				gradeList:this.cfgData.gradeList,
				userInfo: {},
				contactShow: false,
				historyList:  [],
				quizList:[],
				contactList:[
					{
						text: this.contactPhone,
						color: '#999',
					},
					{
						text: '呼叫'
					}
				]
			}
		},
		onLoad() {
			const studentId = uni.getStorageSync(this.studentIdName);
			console.log(studentId);
			this.initMemberInfo(studentId);
			this.initHistory(studentId);
			this.initQuiz(studentId);
		},
		methods: {
			initMemberInfo(studentId){
				const wxUser = uni.getStorageSync(this.wxUserName);
				console.log(wxUser);
				const wxUserObj = JSON.parse(wxUser);
				console.log(wxUserObj);
				this.wxUser = wxUserObj;
				const params = {};
				params.studentId = studentId;
				this.$u.api.wxGetUserInfo(params).then((res) => {
					console.log(res)
					this.userInfo = res;
				})
			},
			initHistory(studentId){
				const params = {};
				params.studentId = studentId;
				params.start = 0;
				params.num = this.defaultPageSize;
				this.$u.api.wxHistory(params).then((res) => {
					console.log(res);
					this.historyList = this.historyList.length > 0 ? this.historyList : res;
				})
			},
			initQuiz(studentId){
				const params = {};
				params.studentId = studentId;
				this.$u.api.wxFinishQuiz(params).then((res) => {
					console.log(res);
					this.quizList = this.quizList.length > 0 ? this.quizList : res;
				})
			},
			jump(url){
				uni.navigateTo({
					url: url
				})
			},
			checkLogin(callback){
				if(callback){
					callback();
				}
			},
			getConfigValue(data, value) {
				return this.utils.getConfigValue(data, value);
			},
			contact(){
				this.contactShow = true;
			},
			contactClick(index){
				if(index === 1){
					uni.makePhoneCall({
					    phoneNumber: this.contactPhone
					});
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.fixed {
		position: fixed;
		z-index: 99;
	}
	.user_bg{
		background: url(/psyWx/gzh/user/static/img/bg.png) no-repeat 100% 100%;
		background-size: cover;
	}
	.info_box{
		display: flex;
		align-items: center;
		padding: 150rpx 0 130rpx 80rpx;
		.info_right{
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			color:#fff;
			margin-left: 20rpx;
			.info_subText{
				margin-right: 18rpx;
			}
		}
	}
	.user_title_box{
		display: flex;
		justify-content: space-between;
		padding: 30rpx;
		font-size: 30rpx;
		.user_title_left{
			display: flex;align-items: center;
			.user_icon{
				width: 28rpx;
				height: 28rpx;
				image{
					display: block;
				}
			}
			.user_title_text{
				margin-left: 10rpx;
			}
		}
	}
	.user_content_box{
		position: relative;
		white-space:nowrap;
		.user_content{
			min-width:100%;
			.user_content_item{
				display: flex;
				flex-direction: column;
				padding: 0 4rpx;
				width: 32%;
				.user_history_img{
					display: block;
				}
				.user_history_text{
					font-size: 22rpx;
					color:#999;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space:nowrap;
				}
			}
		}
	}
	.user_quiz_box{
		display: flex;
		flex-wrap: wrap;
		padding: 0 24rpx;
		margin-bottom: 20rpx;
		.user_quiz_item{
			width: calc(33.3% - 12rpx);
			background: #E7F6FF;
			margin: 6rpx;
			padding: 20rpx 0;
			font-size: 22rpx;
			color:#999;
			border-radius: 4rpx;
			text-align: center;
		}
	}
</style>
