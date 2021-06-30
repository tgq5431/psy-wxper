<template>
	<view>
		<!-- <cu-custom bgColor="bg-white" style="font-size: 34rpx;color: #000;font-weight: bold;">
		    <block slot="content">心灵广雅(内测版)</block>
		</cu-custom> -->
		<view>
			<view class="home_banner" @click="videoShow = true">
				<image class="banner_img" src="/static/banner_home.jpg" mode="widthFix"></image>
			</view>
			<view class="now_study" v-if="learning">l
				<view class="icon"><image src="/static/icon_now_study.png" mode="widthFix"></image></view>
				<view class="now_study_text">你正在学：{{learning.title}}</view>
			</view>
			<view class="psy_card_box">
				<view class="psy_card_title">
					<view class="psy_card_title_left">
						<view class="icon"><image src="/static/icon_rec_course.png" mode="widthFix"></image></view>
						<view class="pasy_card_title_text">推荐课程</view>
					</view>
					<view class="psy_cord_more" @click="jump('../course/courseList')">
						更多
					</view>
				</view>
				<!-- 推荐课程列表 -->
				<view class="psy_card_content">
					<view class="psy_card_item" v-for="(item, index) in recommendList" :key="item.courseId" @click="jump('../course/courseView?id='+item.courseId)">
						<view class="course_img"><image :src="item.imgUrl" mode="widthFix"></image></view>
						<view class="course_title">《{{item.title}}》</view>
						<view class="course_subTitle">{{item.subTitle}}</view>
					</view>
				</view>
			</view>
			<view class="psy_card_box">
				<view class="psy_card_title">
					<view class="psy_card_title_left">
						<view class="icon"><image src="/static/icon_hot_course.png" mode="widthFix"></image></view>
						<view class="pasy_card_title_text">热门课程</view>
					</view>
					<view class="psy_cord_more" @click="jump('../course/courseList')">
						更多
					</view>
				</view>
				<view class="psy_card_content1">
					<view class="psy_card_item1" v-for="(item, index) in hotList" :key="item.courseId" @click="jump('../course/courseView?id='+item.courseId)">
						<view class="course_img"><image :src="item.imgUrl" mode="widthFix" style="width: 100%;"></image></view>
						<view class="course_text">
							<view class="course_title">《{{item.title}}》</view>
							<view class="course_subTitle">{{item.subTitle}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
		<view class="cu-modal" :class="userInfoModalShow?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">提示信息</view>
					<view class="action" @tap="hideUserInfoModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					需用户授权获取用户基本信息，仅在“我的”页面中显示
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideUserInfoModal">取消</button>
						<button class="cu-btn bg-green margin-left" open-type="getUserInfo" @getuserinfo="userInfo('perfectInfo')">确定</button>
					</view>
				</view>
			</view>
		</view>
		<u-popup v-model="videoShow" mode="center" border-radius="15" z-index="9999" length="85%">
			<view class="study_result_box">
				<view class="course_video">
					<video :src="video_url" style="width: 100%;display: block;"></video>
				</view>
			</view>	
		</u-popup>
		<foot-menu :index="0" @checkLogin="checkLogin"></foot-menu>
	</view>
</template>

<script>
	import footMenu from '@/components/footMenu.vue';
	export default {
		components:{ footMenu },
		data() {
			return {
				video_url: this.cfgData.video_url,
				learning: null,
				hotList:[],
				recommendList: [],
				userInfoModalShow: false,
				videoShow: false,
				code: null,
			}
		},
		onLoad(options) {
			this.init();
			console.log(options.code);
			if(options.code){
				this.wxLogin(options.code);
			}
			//const code = localStorage.getItem("code");
			//this.code = options.code;
			//console.log(this.user);
		},
		methods: {
			init(){
				this.$u.api.wxHome().then((res) => {
					console.log(res);
					this.learning = res.learning;
					this.hotList = res.hotList;
					this.recommendList = res.recommendList;
				})
			},
			jump(url){
				this.checkLogin(() => {
					console.log("执行回调");
					uni.navigateTo({
						url: url
					})
				});
			},
			// userInfo(type){
			// 	this.userInfoModalShow = false;
			//     wx.getUserInfo({
			// 		success: res => {
			// 			console.log(res)
			// 			if(res.errMsg === 'getUserInfo:ok'){
			// 				uni.setStorageSync(this.wxUserName, JSON.stringify(res.userInfo));
			// 				if(type === 'perfectInfo'){
			// 					uni.navigateTo({
			// 						url: "../user/info"
			// 					})
			// 				}
			// 			}
			// 		},
			// 		fail: res => {
			// 			console.log(res);
			// 			this.userInfoModalShow = true;
			// 		}
			//     })
			// },
			checkLogin(callback){
				// console.log("检查登录状态");
				// const token = uni.getStorageSync(this.tokenName);
				// if(!token){
				// 	uni.reLaunch({
				// 		url:"login"
				// 	})
				// }
				// if(callback){
				// 	console.log("-----执行回调-----");
				// 	callback();
				// }
				console.log("-----判断缓存wechatId-----");
				const wechatId = uni.getStorageSync(this.wechatIdName);
				if(wechatId > 0){
					console.log("-----判断缓存studentId-----");
					const studentId = uni.getStorageSync(this.studentIdName);
					if(studentId > 0){
						console.log("-----已设置个人信息-----");
						// console.log(this.global.globalObj.isUploadWxInfo);
						// if(!this.global.globalObj.isUploadWxInfo){
						// 	//this.userInfo();
						// 	console.log("-----获取微信基本信息（仅一次）-----");
						// 	const wxUser = uni.getStorageSync(this.wxUserName);
						// 	if(wxUser){
						// 		const wxUserObj = JSON.parse(wxUser);
						// 		wxUserObj.studentId = studentId;
						// 		this.$u.api.wxSetWxInfo(wxUserObj).then((res) => {
						// 			this.global.setGlobalObj({isUploadWxInfo: true});
						// 			console.log("-----上传微信基本信息成功-----");
						// 		})
						// 	}
						// }
					}else{
						console.log("-----未设置个人信息-----");
						uni.navigateTo({
							url: "../user/info"
						})
						return;
					}
					if(callback){
						console.log("-----执行回调-----");
						callback();
					}
				}else{
					//TODO  如果用户不是自动登录，跳转到登录页面
				}
			},
			wxLogin(code){
				const params = {};
				params.code = code;
				this.$u.api.wxLogin(params).then((res) => {
					console.log(res)
					uni.setStorageSync(this.studentIdName, res.studentId);
					uni.setStorageSync(this.wechatIdName, res.wechatId);
					const wxUser = {};
					wxUser.nickName = res.nickname;
					wxUser.province = res.province;
					wxUser.city = res.city;
					wxUser.country = res.country;
					wxUser.avatarUrl = res.headimgurl;
					uni.setStorageSync(this.wxUserName, JSON.stringify(wxUser));
					if(res.studentId > 0){
						uni.setStorageSync(this.tokenName, res.token);
						uni.setStorageSync(this.memberInfoName, res.memberInfo);
					}
				})
			},
			hideUserInfoModal(){
				this.userInfoModalShow = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	image{
		will-change: transform;
		display: block;
	}
	.icon{
		width: 28rpx;
		height: 28rpx;
	}
	.home_banner{
		padding: 20rpx;
		.banner_img{
			width: 100%;
			display: block;
			border-radius: 10rpx;
		}
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
	}
	.now_study{
		padding: 0 20rpx 20rpx 20rpx;
		display: flex;
		align-items: center;
		.now_study_text{
			font-size: 28rpx;
			color: #11A7FF;
			margin-left: 20rpx;
			overflow: hidden;
			text-overflow:ellipsis;
			white-space:nowrap
		}
	}
	.psy_card_box{
		padding: 20rpx;
		.psy_card_title{
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			.psy_card_title_left{
				display: flex;
				align-items: center;
				.pasy_card_title_text{
					margin-left: 16rpx;
					font-size: 32rpx;
					font-weight: bold;
				}
			}
			
		}
		.psy_cord_more{
			font-size: 24rpx;
			color:#B5BBCD;
		}
	}
	.psy_card_content{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.psy_card_item{
			width: 48%;
			padding: 20rpx 0;
			.course_img image{
				border-radius: 6rpx;
				display: block;
			}
			.course_title{
				font-size: 28rpx;
				color: #353535;
				padding: 8rpx 0;
			}
			.course_subTitle{
				font-size: 24rpx;
				color:#656565;
			}
		}
	}
	.psy_card_content1{
		display: flex;
		flex-direction: column;
		.psy_card_item1{
			margin-top: 20rpx;
			position: relative;
			.course_img{
				image{
					width: 100%;
					border-radius: 6rpx;
					display: block;
				}
			}
			.course_text{
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				//background: #000;
				color: #fff;
				background:rgba(0,0,0,0.42);
				text-align: center;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				.course_title{
					font-size: 38rpx;
				}
				.course_subTitle{
					margin-top: 10rpx;
					font-size: 28rpx;
				}
			}
		}
	}
</style>
