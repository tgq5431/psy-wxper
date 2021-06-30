<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>

<script>
	import Vue from "vue";
	
	export default {
		onLaunch: function() {
			console.log("onLaunch");
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					console.log("StatusBar", e.statusBarHeight);
					console.log("Custom", custom);
					console.log("CustomBar",  custom.bottom + custom.top - e.statusBarHeight);
					// #endif       
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})
			// #ifdef MP-WEIXIN
			// wx.login({
			// 	success(res){
			// 		if (res.code) {
			// 			const params = {};
			// 			params.code = res.code;
			// 			uni.request({
			// 			    url: 'https://psypapi.gycm.net.cn/web/student/wxLogin', //仅为示例，并非真实接口地址。
			// 			    data: params,
			// 			    success: (res) => {
			// 			        console.log(res);
			// 					if(res.data.code === 0){
			// 						res = res.data.data;
			// 						uni.setStorageSync(Vue.prototype.studentIdName, res.studentId);
			// 						uni.setStorageSync(Vue.prototype.wechatIdName, res.wechatId);
			// 						if(res.studentId > 0){
			// 							uni.setStorageSync(Vue.prototype.tokenName, res.token);
			// 							uni.setStorageSync(Vue.prototype.memberInfoName, res.memberInfo);
			// 						}
			// 					}
			// 			    }
			// 			});
			// 		} else {
			// 		  console.log('微信登录失败！' + res.errMsg)
			// 		}
			// 	}
			// })
			// #endif
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "colorui/main.css";
	@import "colorui/icon.css";
</style>
