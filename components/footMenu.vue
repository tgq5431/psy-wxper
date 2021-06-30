<template>
	<view>
		<view class="cu-bar foot tabbar bg-white">
			<view class="action" v-for="(item, index) in barList" :key="item.id" @click="clickBar(index)">
				<view class="cuIcon-cu-image">
					<image :src="`/static/${item.icon}.png`" mode="aspectFit"></image>
				</view>
				<view :class="[item.color, 'margin-5']">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	const defaultBar = [
		{
			id: 1,
			name: '首页',
			icon: 'home_icon',
			color: 'text-gray',
			path: '../pages/home',
		},
		{
			id: 2,
			name: '课程',
			icon: 'course_icon',
			color: 'text-gray',
			path: '../course/courseList'
		},
		{
			id: 3,
			name: '测试',
			icon: 'ceshi_icon',
			color: 'text-gray',
			path: '../quiz/quizList'
		},
		{
			id: 4,
			name: '我的',
			icon: 'me_icon',
			color: 'text-gray',
			path: '../user/me'
		},
	]
		
	export default {
		props:{
			index: {
				type: Number,
				default: 0
			}, 
		},
		data() {
			return {
				barList: JSON.parse(JSON.stringify(defaultBar)),
				currentIndex: this.index,
			};
		},
		mounted() {
			this.initBar();
		},
		methods:{
			clickBar(index){
				if(this.currentIndex === index){
					return;
				}
				//console.log("检测是否登录");
				this.$emit("checkLogin", () => {
					// const wxUser = uni.getStorageSync(this.wxUserName);
					// if(!wxUser){
					// 	return;
					// }
					console.log("回调，跳转页面");
					const obj = this.barList[index];
					console.log(obj.path);
					uni.reLaunch({
						url: obj.path
					})
				});
			},
			initBar(){
				this.barList = JSON.parse(JSON.stringify(defaultBar));
				this.barList[this.currentIndex].icon = this.barList[this.currentIndex].icon + '1';
				this.barList[this.currentIndex].color = 'text-custom-blue';
				this.$forceUpdate();
			}
		}
	}
</script>

<style>
	.margin-5{
		margin-top: 10rpx;
	}
	.footBar{
		position: fixed;
		bottom: 0;
		left: 0;
	}
	.text-custom-blue{
		color: #11a8ff;
	}
</style>
