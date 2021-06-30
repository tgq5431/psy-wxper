<template>
	<view>
		<view class="homeBox"></view>
		<cu-custom bgColor="bg-white" :isBack="true" style="font-size: 34rpx;color: #000;font-weight: bold;">
		    <block slot="content">测试试题解析</block>
		</cu-custom>
		<view class="test_box">
			<view style="text-align: center;">
				<image :src="'/quiz/static/img/state' + score + '.png'" mode="widthFix" style="width: 280rpx;margin-bottom: 20rpx;" />
			</view>
			<view v-for="(item, i) in resultArray" :key="item.id">
				<view class="test_title">{{i + 1}}、{{item.topicContent}}</view>
				<view class="test_supplement" v-for="(item1, index) in item.supplement" :key="index">{{item1}}</view>
				<view :class="[
					item.normalAnswer === obj.answer_logo ? 'test_active_blue' : '', 
					(item.studentAnswer === obj.answer_logo && item.studentAnswer != item.normalAnswer) ? 'test_active_red' : '' , 'test_answer']" v-for="(obj, j) in item.vos" :key="obj.id">
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
		<view style="position: fixed;bottom: 0;left:0;width: 100%;z-index:-1">
			<image src="/quiz/static/img/test_bottom_bg.png" mode="widthFix" style="width:100%;display: block;height: auto;"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				score: '',
				resultArray: [],
				grade: 0,
			}
		},
		onLoad(options){
			console.log(options.recordNum, options.gradeNum)
			if(options.recordNum && options.gradeNum){
				this.initResult(options.recordNum);
				this.grade = options.gradeNum;
			}else{
				uni.reLaunch({
					url: '../user/me'
				})
			}
		},
		methods: {
			initResult(recordNum){
				const params = {};
				params.recordNum = recordNum;
				this.$u.api.wxGetNearResult(params).then((res) => {
					console.log(res)
					this.score = res.score;
					this.resultArray = res.nearResultListVo;
				})
			},
			resetTest(){
				const url = '../quiz/test?grade=' + this.grade;
				uni.redirectTo({
					url: url
				})
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
			text-align: center;
			margin-top: 40rpx;
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
			border:none;
		}
	}
</style>
