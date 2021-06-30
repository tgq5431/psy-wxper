<template>
	<view>
		<!-- <cu-custom bgColor="bg-white" :isBack="true" style="font-size: 34rpx;color: #000;font-weight: bold;">
		    <block slot="content">个人信息</block>
		</cu-custom> -->
		<view class="info_box">
			<view class="info_item">
				<view class="info_icon"><image src="/user/static/img/icon_phone.jpg" mode="widthFix"></image></view>
				<view class="info_ipt"><input type="text" v-model="postForm.nickName" placeholder-class="info_pl" placeholder="请输入昵称" maxlength="20"/></view>
			</view>
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
			<view class="info_item" @click="showSex">
				<view class="info_icon"><image src="/user/static/img/icon_sex.jpg" mode="widthFix"></image></view>
				<view class="info_ipt">{{getConfigValue(sexList, postForm.gender)}}</view>
				<view class="info_arrow">
					<u-icon name="arrow-right" color="#999" size="28"></u-icon>
				</view>
			</view>
			<view class="info_item" @click="showGrade">
				<view class="info_icon"><image src="/user/static/img/icon_grade.jpg" mode="widthFix"></image></view>
				<view class="info_ipt">{{getConfigValue(gradeList, postForm.grade)}}</view>
				<view class="info_arrow">
					<u-icon name="arrow-right" color="#999" size="28"></u-icon>
				</view>
			</view>
			<view>
				<u-button type="primary" @click="postData">注册</u-button>
			</view>
		</view>
		<u-action-sheet :list="sexList" v-model="sexShow" :cancel-btn="false" @click="sexClick"></u-action-sheet>
		<u-action-sheet :list="gradeList" v-model="gradeShow" :cancel-btn="false" @click="gradeClick"></u-action-sheet>
	</view>
</template>

<script>
	import Vue from "vue";
	
	const defaultForm = {
		nickName: '',
		phoneNum: '',
		code: '',
		gender: 1,
		grade: 1
	}
	
	export default {
		data() {
			return {
				postForm: Object.assign({}, defaultForm),
				seconds: 60,
				tips: '',
				sexList: this.cfgData.sexList,
				gradeList:this.cfgData.gradeList,
				sexShow: false,
				gradeShow: false,
				noEdit: false,
				studentId: 0,
			}
		},
		methods: {
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
			showSex(){
				this.sexShow = true;
			},
			showGrade(){
				this.gradeShow = true;
			},
			sexClick(index){
				console.log(this.sexList[index]);
				this.postForm.gender = this.sexList[index].value;
			},
			gradeClick(index){
				console.log(this.gradeList[index]);
				this.postForm.grade = this.gradeList[index].value;
			},
			postData(){
				const {postForm} = this;
				if(this.$u.test.isEmpty(postForm.nickName)){
					this.$u.toast("请输入昵称");
					return;
				}
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
				params.nickName = postForm.nickName;
				params.gender = postForm.gender;
				params.gradeNum = postForm.grade;
				params.telephoneNum = postForm.phoneNum;
				params.codeNum = postForm.code;
				this.$u.api.hRegister(params).then((res) => {
					console.log(res);
					uni.setStorageSync(this.studentIdName, res.studentId);
					uni.setStorageSync(this.tokenName, res.token);
					Vue.prototype.user = res;
					uni.redirectTo({
						url:"../pages/home"
					})
				})
			},
			getConfigValue(data, value) {
				return this.utils.getConfigValue(data, value);
			}
		}
	}
</script>

<style lang="scss" scoped>
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
	.u-drawer-content{
		height: 500rpx !important;
	}
</style>
