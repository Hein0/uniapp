<template>
	<view class="paymentlistPage">
		<hdBar :leftWords="'收支明细'" :rightIcon="'sx'" @eventName="screen"></hdBar>
		<view class="wrap-page">
			<view class="itemList" v-for="(item,index) in list" :key="index">
				<view class="itemTitle">
					<text class="state">支出</text>
					<text class="numbers">{{item.number}}</text>
				</view>
				<view class="itemTime">{{item.time}}</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	// import {uniNavBar} from "@dcloudio/uni-ui"
	export default {
		name:"paymentlist",
		components:{
			
		},
		data() {
			return {
				
				list:[{number:'100',time:"2019/9/9 17:47"},{number:'100',time:"2019/9/9 17:47"},{number:'100',time:"2019/9/9 17:47"}]
			}
		},
		methods: {
			//筛选
			screen(){
				uni.showModal({
					content: 'ss',
					showCancel: false
				});
			}
		}
	}
</script>

<style>
	.wrap-page{padding: 30rpx;}
	.itemList{padding:20rpx 0rpx;width: 690rpx;border-bottom:1rpx solid #E9EFF4;}
	.itemTitle{display: flex;justify-content: space-between;color: #37416B;font-size:32rpx;}
	.itemTime{font-size: 24rpx;color: #B2B6C6;margin-top:10rpx;}
	
</style>
