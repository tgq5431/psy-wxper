<template>
	<view>
		<cu-custom bgColor="bg-white" :isBack="true" style="font-size: 34rpx;color: #000;font-weight: bold;">
		    <block slot="content">个人信息</block>
		</cu-custom>
		<view class="info_box">
			<view class="info_item">
				<view class="info_icon"><image src="/user/static/img/icon_phone.jpg" mode="widthFix"></image></view>
				<view class="info_ipt"><input type="text" v-model="postForm.phoneNum" placeholder-class="info_pl" placeholder="请输入手机号码" maxlength="11" :disabled="noEdit" :style="noEdit ? 'color:#999' : ''"/></view>
			</view>
			<view class="info_item" v-if="!noEdit">
				<view class="info_icon"><image src="/user/static/img/icon_code.jpg" mode="widthFix"></image></view>
				<view class="info_ipt"><input type="text" v-model="postForm.code" placeholder-class="info_pl" placeholder="请输入短信验证码" maxlength="6"/></view>
				<view class="info_code" @click="getCode">{{tips}}</view>
				<u-verification-code change-text="Xs" :seconds="seconds" @end="end" @start="start" keep-running ref="uCode" @change="codeChange"></u-verification-code>
			</view>
			<view class="info_item" @click="showSex">
				<view class="info_icon"><image src="/user/static/img/icon_sex.jpg" mode="widthFix"></image></view>
				<view class="info_ipt" :style="noEdit ? 'color:#999' : ''">{{getConfigValue(sexList, postForm.gender)}}</view>
				<view class="info_arrow" v-if="!noEdit">
					<u-icon name="arrow-right" color="#999" size="28"></u-icon>
				</view>
			</view>
			<view class="info_item" @click="showGrade">
				<view class="info_icon"><image src="/user/static/img/icon_grade.jpg" mode="widthFix"></image></view>
				<view class="info_ipt" :style="noEdit ? 'color:#999' : ''">{{getConfigValue(gradeList, postForm.grade)}}</view>
				<view class="info_arrow" v-if="!noEdit">
					<u-icon name="arrow-right" color="#999" size="28"></u-icon>
				</view>
			</view>
			<view v-if="!noEdit">
				<u-button type="primary" @click="postData">提交</u-button>
			</view>
		</view>
		<u-action-sheet :list="sexList" v-model="sexShow" :cancel-btn="false" @click="sexClick"></u-action-sheet>
		<u-action-sheet :list="gradeList" v-model="gradeShow" :cancel-btn="false" @click="gradeClick"></u-action-sheet>
	</view>
</template>

<script>
	const defaultForm = {
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
		onLoad() {
			const studentId = uni.getStorageSync(this.studentIdName);
			this.studentId = studentId;
			this.initData();
		},
		methods: {
			initData(){
				if(this.studentId > 0){
					const params = {};
					params.studentId = this.studentId;
					this.$u.api.wxGetUserInfo(params).then((res) => {
						this.noEdit = true;
						this.postForm = JSON.parse(JSON.stringify(res));
					})
				}
			},
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
					// uni.showLoading({
					// 	title: '正在获取验证码'
					// })
					const params = {};
					params.phoneNum = postForm.phoneNum;
					this.$u.api.wxSms(params).then((res) => {
						// uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						this.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					})
					// setTimeout(() => {
					// 	uni.hideLoading();
					// 	// 这里此提示会被this.start()方法中的提示覆盖
					// 	this.$u.toast('验证码已发送');
					// 	// 通知验证码组件内部开始倒计时
					// 	this.$refs.uCode.start();
					// }, 2000);
				} else {
					this.$u.toast('请等待倒计时结束后再重新获取');
				}
			},
			start(){
				//this.$u.toast('倒计时开始');
				console.log('倒计时开始');
			},
			end(){
				//this.$u.toast('倒计时结束');
				console.log('倒计时结束');
			},
			showSex(){
				if(!this.noEdit){
					this.sexShow = true;
				}
			},
			showGrade(){
				if(!this.noEdit){
					this.gradeShow = true;
				}
				
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
				const {postForm, studentId} = this;
				if(this.studentId > 0){
					const params = {};
					params.studentId = studentId;
					params.gender = postForm.gender;
					params.grade = postForm.grade;
					this.$u.api.wxSetUserInfo(params).then((res) => {
						this.$u.toast("修改个人信息成功");
						uni.redirectTo({
							url:"../user/me"
						})
					})
				}else{
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
					const wechatId = uni.getStorageSync(this.wechatIdName);
					const wxUser = uni.getStorageSync(this.wxUserName);
					console.log(wxUser);
					const params = {};
					params.wechatId = wechatId;
					params.gender = postForm.gender;
					params.grade = postForm.grade;
					params.phoneNum = postForm.phoneNum;
					params.code = postForm.code;
					if(wxUser){
						const wxUserObj = JSON.parse(wxUser);
						params.wxNickName = wxUserObj.nickName;
						params.wxAvatarUrl = wxUserObj.avatarUrl;
						params.wxGender = wxUserObj.gender;
						params.wxCountry = wxUserObj.country;
						params.wxProvince = wxUserObj.province;
						params.wxCity = wxUserObj.city;
						params.wxLanguage = wxUserObj.language;
					}
					console.log(params);
					this.$u.api.wxInitInfo(params).then((res) => {
						uni.setStorageSync(this.studentIdName, res.studentId);
						uni.setStorageSync(this.wechatIdName, res.wechatId);
						if(res.studentId > 0){
							uni.setStorageSync(this.tokenName, res.token);
							uni.setStorageSync(this.memberInfoName, res.memberInfo);
						}
						//uni.removeStorageSync(this.wxUserName);
						this.global.setGlobalObj({isUploadWxInfo: true});
						this.$u.toast("完善个人信息成功");
						uni.redirectTo({
							url:"../user/me"
						})
					})
				}
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
