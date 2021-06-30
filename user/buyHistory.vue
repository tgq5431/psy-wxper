<template>
	<view>
		<cu-custom bgColor="bg-white" :isBack="true" style="font-size: 34rpx;color: #000;font-weight: bold;">
		    <block slot="content">购买记录</block>
		</cu-custom>
		<!-- <view v-if="historyList.length > 0"> -->
			<mescroll-uni :down="downOption" @down="downCallback" :up="upOption" @up="upCallback" :top="top">
				<view class="history_box">
					<view class="history_item" v-for="(item, index) in historyList" :key="index">
						<view style="display: flex;">
							<view class="history_item_img">
								<image :src="'/user/static/img/grade'+item.grade+'.jpg'" mode="widthFix" width="200rpx"></image>
								<view class="history_item_expired" v-if="item.usable === 0">
									<image src="/user/static/img/expired.png" mode="widthFix"></image>
								</view>
							</view>
							<view class="history_item_text">
								<view class="history_item_text_top">
									<view class="history_item_title">{{item.gradeName}}交互式课程</view>
								</view>
								<view class="history_item_time">有效期：{{item.startDay}}至{{item.endDay}}</view>
								<view class="history_item_time">支付时间：{{item.payTime}}</view>
							</view>
						</view>
					</view>
				</view>
			</mescroll-uni>
		<!-- </view>
		<u-empty v-else mode="history"></u-empty> -->
	</view>
</template>

<script>
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
	
	export default {
		components:{ MescrollUni },
		data() {
			return {
				historyList:  [],
				top: this.CustomBar * 2,
				downOption: {
					use: false, // 是否启用下拉刷新; 默认true
					auto: true, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
				},
				upOption: {
					use: true, // 是否启用上拉加载; 默认true
					auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
					page: {
						num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
						size: 10 // 每页数据的数量,默认10
					},
					noMoreSize: 5, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
					empty: {
						tip: '暂无相关数据'
					}
				},
			}
		},
		onLoad() {
			
		},
		methods: {
			/*上拉加载的回调*/
			upCallback(mescroll) {
				// 此时mescroll会携带page的参数:
				let pageNum = mescroll.num; // 页码, 默认从1开始
				let pageSize = mescroll.size; // 页长, 默认每页10条
				const studentId = uni.getStorageSync(this.studentIdName);
				const params = {};
				params.studentId = studentId;
				params.start = (pageNum - 1) * this.defaultPageSize;
				params.num = this.defaultPageSize;
				this.$u.api.wxOrderHistory(params).then((res) => {
					console.log(res);
					let curPageData = res; 
					let hasNext = true;
					if(res != null || res.length <= 0){
						hasNext = false;
					}
					if(mescroll.num == 1) this.historyList = [];
					this.historyList = this.historyList.concat(curPageData);
					mescroll.endSuccess(curPageData.length, hasNext); 
					this.$nextTick(()=>{
						mescroll.endSuccess(curPageData.length)
					})
				})
			},
			jump(url){
				uni.navigateTo({
					url: url
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.history_box{
		display: flex;
		flex-direction: column;
		padding: 30rpx;
		.history_item{
			display: flex;
			justify-content: space-between;
			margin-bottom: 30rpx;
			.history_item_img{
				width: 200rpx;
				position: relative;
				image{
					display: block;
				}
				.history_item_expired{
					background:rgba(218, 218, 218,0.59);
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					image{
						width: 80rpx;
						position: absolute;
						right: 10rpx;
						bottom: 10rpx;
					}
					
				}
			}
			.history_item_text{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin-left: 20rpx;
				.history_item_text_top{
					display: flex;
					flex-direction: column;
					.history_item_title{
						font-size: 26rpx;
						color:#333
					}
					.history_item_subTitle{
						font-size: 26rpx;
						color:#666
					}
				}
				.history_item_time{
					font-size: 22rpx;
					color:#999
				}
			}
		}
	}
</style>
