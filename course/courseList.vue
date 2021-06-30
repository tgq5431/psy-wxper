<template>
	<view>
		<!-- <cu-custom bgColor="bg-white" style="font-size: 34rpx;color: #000;font-weight: bold;">
		    <block slot="content">课程</block>
		</cu-custom> -->
		<view>
			<view class="course_banner">
				<image class="banner_img" src="/course/static/img/banner_course.jpg" mode="widthFix"></image>
			</view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles" style="color:#009BF5"></text>
					<text class="text-bold" style="font-size: 32rpx;">全部交互课程</text>
				</view>	
			</view>
			<view class="course_grade_box">
			    <!--横向滚动-->
			    <scroll-view class="course_grade" scroll-x :scroll-left="scrollLeft">
			        <view style="display: flex;margin: 0 26rpx;position: relative;padding-top: 40rpx;">
						<view :class="[currentGrade === item.grade ? 'course_grade_active' : '', 'course_grade_item']"
							v-for="(item, index) in gradeList" :key="item.grade" @click="clickGrade(item.grade)"
						>
							<view class="course_grade_text">{{item.name}}</view>
							<view class="course_grade_isPay" v-if="item.hasBuy === 1"><image src="/course/static/img/icon_pay.png" mode="widthFix"></image></view>
						</view>
					</view>
			    </scroll-view>
			</view>
			<view class="psy_card_content1">
				<view class="psy_card_item1" v-for="(item, index) in courseList" :key="item.courseId" @click="jump('../course/courseView?id='+item.courseId)">
					<view class="course_img"><image :src="item.imgUrl" mode="widthFix" style="width: 100%;"></image></view>
					<view class="course_text">
						<view class="course_title">《{{item.title}}》</view>
						<view class="course_subTitle">{{item.subTitle}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
		<foot-menu :index="1" @checkLogin="checkLogin"></foot-menu>
	</view>
</template>

<script>
	import footMenu from '@/components/footMenu.vue';
	export default {
		components:{ footMenu },
		data() {
			return {
				gradeList: [],
				courseList: [],
				currentGrade: 1,
				scrollLeft: 0,
			}
		},
		onLoad() {
			this.initGradeList();
		},
		methods: {
			initUserInfo(){
				const studentId = uni.getStorageSync(this.studentIdName);
				const params = {};
				params.studentId = studentId;
				this.$u.api.wxGetUserInfo(params).then((res) => {
					this.currentGrade = res.grade;
					this.scrollLeft = res.grade - 3 > 0 ? 83 * (res.grade - 3) + 13 : 0;
					this.initCourseList(res.grade);
				})
			},
			initGradeList(){
				const params = {};
				const studentId = uni.getStorageSync(this.studentIdName);
				params.studentId = studentId;
				this.$u.api.wxGradeList(params).then((res) => {
					this.gradeList = res
					this.initUserInfo();
				})
			},
			initCourseList(grade){
				const params = {};
				const studentId = uni.getStorageSync(this.studentIdName);
				params.studentId = studentId;
				params.grade = grade;
				this.$u.api.wxCourseList(params).then((res) => {
					this.courseList = res;
				})
			},
			clickGrade(grade){
				this.currentGrade = grade;
				this.initCourseList(grade);
			},
			jump(url){
				uni.navigateTo({
					url: url
				})
			},
			checkLogin(callback){
				if(callback){
					callback();
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	image{
		will-change: transform;
		display: block;
	}
	.course_banner{
		padding: 20rpx;
		.banner_img{
			width: 100%;
			display: block;
			border-radius: 6rpx;
		}
	}
	.psy_card_content1{
		display: flex;
		flex-direction: column;
		margin-bottom: 20rpx;
		padding: 0 20rpx;
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
	.course_grade_box{
		position: relative;
		white-space:nowrap;
		.course_grade{
			min-width:100%;
			.course_grade_item{
				padding: 38rpx 80rpx;
				margin-right: 6rpx;
				background: url(/psyWx/gzh/course/static/img/course_tag_bg.png) no-repeat;
				background-size: contain;
				position: relative;
			}
			.course_grade_active{
				background: url(/psyWx/gzh/course/static/img/course_tag_active.png) no-repeat;
				background-size: contain;
			}
			.course_grade_text{
				position: absolute;
				width: 100%;
				top: calc(50% - 22rpx);
				left: 0;
				text-align: center;
				color:#fff;
				font-size: 28rpx;
			}
			.course_grade_isPay{
				width: 40rpx;
				position: absolute;
				top: -40rpx;
				left: 50%;
				transform:translate(-50%,0);
			}
		}
	}
</style>
