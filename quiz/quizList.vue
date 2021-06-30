<template>
	<view>
		<!-- <cu-custom bgColor="bg-white" style="font-size: 34rpx;color: #000;font-weight: bold;">
		    <block slot="content">测试</block>
		</cu-custom> -->
		<view>
			<view class="quiz_banner">
				<image class="banner_img" src="/quiz/static/img/banner_quiz.png" mode="widthFix"></image>
			</view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles" style="color:#009BF5"></text>
					<text class="text-bold" style="font-size: 32rpx;">全部测试题目</text>
				</view>	
			</view>
			<view class="cu-list menu">
				<view class="cu-item arrow" v-for="(item, index) in gradeList" :key="index" @click="jump('../quiz/test?grade='+item.value)">
					<view class="content">
						<text class="text-grey" style="color:#333;font-size: 28rpx;">{{item.text}}测试题</text>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
		<foot-menu :index="2" @checkLogin="checkLogin"></foot-menu>
	</view>
</template>

<script>
	import footMenu from '@/components/footMenu.vue';
	export default {
		components:{ footMenu },
		data() {
			return {
				gradeList: this.cfgData.gradeList
			}
		},
		methods: {
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
		}
	}
</script>

<style lang="scss" scoped>
	.quiz_banner{
		padding: 20rpx;
		.banner_img{
			width: 100%;
			display: block;
			border-radius: 6rpx;
		}
	}
	.cu-list.menu-avatar>.cu-item:after, .cu-list.menu>.cu-item:after{
		border-bottom: unset;
	}
</style>
