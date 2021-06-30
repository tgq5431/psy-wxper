<template>
	<view>
		<!-- <cu-custom bgColor="bg-white" style="font-size: 34rpx;color: #000;font-weight: bold;">
			<block slot="content">登录</block>
		</cu-custom> -->
		<view class="info_box">
			<view class="info_item">
				<view class="info_icon"><image src="/user/static/img/icon_phone.jpg" mode="widthFix"></image></view>
				<view class="info_ipt"><input type="text" v-model="postForm.phoneNum" placeholder-class="info_pl" placeholder="请输入手机号码" maxlength="11"/></view>
			</view>
			<view class="info_item">
				<view class="info_icon"><image src="/user/static/img/icon_code.jpg" mode="widthFix"></image></view>
				<view class="info_ipt"><input type="text" v-model="postForm.code" placeholder-class="info_pl" placeholder="请输入短信验证码" maxlength="6"/></view>
				<view class="info_code" @click="getCode">{{tips}}</view>
				<u-verification-code change-text="Xs" :seconds="seconds" @end="end" @start="start" keep-running ref="uCode" @change="codeChange"></u-verification-code>
			</view>
			<view>
				<u-button type="primary" @click="postData">登录</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	import Vue from "vue";
	
	const defaultForm = {
		phoneNum: '',
		code: '',
	}
	
	export default {
		data() {
			return {
				postForm: Object.assign({}, defaultForm),
				seconds: 60,
				tips: '',
			}
		},
		methods:{
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if(this.$refs.uCode.canGetCode) {
					const {postForm} = this;
					if(this.$u.test.isEmpty(postForm.phoneNum)){
						this.$u.toast("请输入手机号");
						return;
					}
					if(!this.$u.test.mobile(postForm.phoneNum)){
						this.$u.toast("请输入正确的手机号");
						return;
					}
					const params = {};
					params.phoneNum = postForm.phoneNum;
					this.$u.api.wxSms(params).then((res) => {
						this.$u.toast('验证码已发送');
						this.$refs.uCode.start();
					})
				} else {
					this.$u.toast('请等待倒计时结束后再重新获取');
				}
			},
			start(){
				console.log('倒计时开始');
			},
			end(){
				console.log('倒计时结束');
			},
			postData(){
				const {postForm} = this;
				if(this.$u.test.isEmpty(postForm.phoneNum)){
					this.$u.toast("请输入手机号");
					return;
				}
				if(!this.$u.test.mobile(postForm.phoneNum)){
					this.$u.toast("请输入正确的手机号");
					return;
				}
				if(this.$u.test.isEmpty(postForm.code)){
					this.$u.toast("请输入短信验证码");
					return;
				}
				const params = {};
				params.telephoneNum = postForm.phoneNum;
				params.codeNum  = postForm.code;
				this.$u.api.hLogin(params).then((res) => {
					console.log(res);
					uni.setStorageSync(this.studentIdName, res.studentId);
					uni.setStorageSync(this.tokenName, res.token);
					Vue.prototype.user = res;
					uni.redirectTo({
						url:"../pages/home"
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.info_box{
		padding: 20rpx;
		.info_item{
			display: flex;
			align-items: center;
			border-bottom: 1px solid #eee;
			margin-bottom: 40rpx;
			padding: 8rpx 0;
			position: relative;
			color: #666666;
			.info_icon{
				width: 30rpx;
				height: 30rpx;
				image{
					display: block;
				}
			}
			.info_ipt{
				margin-left: 20rpx;
			}
			.info_pl{
				font-size: 30rpx;
			}
			.info_code{
				position: absolute;
				right: 0;
				top: 50%;
				transform:translate(0,-50%);
				color: #11A8FF;
				font-size: 22rpx;
				width: 120rpx;
				text-align: center;
			}
			.info_arrow{
				position: absolute;
				right: 0;
				top: 50%;
				transform:translate(0,-50%);
			}
		}
	}
</style>
