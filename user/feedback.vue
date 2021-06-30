<template>
	<view>
		<view class="homeBox"></view>
		<cu-custom bgColor="bg-white" :isBack="true" style="font-size: 34rpx;color: #000;font-weight: bold;">
		    <block slot="content">意见反馈</block>
		</cu-custom>
		<view class="textarea_box">
			<textarea v-model="content" class="feedback_textarea" placeholder-class="feedback_pl" placeholder="给我们提下宝贵的意见吧~"/>
		</view>
		<view class="feedback_btn_box">
			 <button class="feedback_btn" type="primary" @click="feedback">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: ""
			}
		},
		methods: {
			feedback(){
				console.log(this.content);
				if(this.$u.test.isEmpty(this.content)){
					this.$u.toast("请输入反馈内容");
					return;
				}
				const studentId = uni.getStorageSync(this.studentIdName);
				const params = {};
				params.studentId = studentId;
				params.content = this.content;
				this.$u.api.wxFeedback(params).then((res) => {
					uni.showToast({
						icon: 'success',
						title: '谢谢您的支持！'
					})
					setTimeout(() => {
						uni.reLaunch({
							url: '../user/me'
						})
					}, 1000)
				})
			}
		}
	}
</script>

<style lang="scss">
	.homeBox {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        background-color: #F6F6F6;
    }
	.textarea_box{
		padding: 30rpx;
		.feedback_textarea{
			background: #fff;
			width: 100%;
			height: 400rpx;
			padding: 26rpx;
		}
		.feedback_pl{
			font-size: 26rpx;
			color:#999;
		}
	}
	.feedback_btn_box{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		.feedback_btn{
			border-radius: unset;
			background: #11A8FF;
			font-size: 32rpx;
			padding: 10rpx 0;
		}
	}
</style>
