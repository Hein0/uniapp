<template>
	<view class="sharePage">
		<hdBar :leftWords="'好友分享'"></hdBar>
		<view class="wrap-page">
			<view class="itemList">
				<view class="itemOne">
					<view class="oneTitle">您的邀请码</view>
					<view class="oneText">KD45623</view>
					<view class="oneBtu">复制</view>
				</view>
				<view class="itemTow">
					<image class="imageName"></image>
					<view class="imageTis">扫码二维码即可分享好友</view>
					<view class="copybut">复制下载地址</view>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	// import {uniNavBar} from "@dcloudio/uni-ui"
	export default {
		name:"share",
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
	page{background: #dddddd;}
	.wrap-page{padding:137rpx 88rpx 0;}
	.itemList{padding:20rpx 0rpx;width: 574rpx;background: #FFFFFF;border-radius: 10rpx;text-align: center;}
	.itemOne{font-size:28rpx;color: #697190;position: relative;border-bottom: 1rpx solid #E9EFF4;padding:40rpx 0 50rpx;}
	.oneText{color: #37416B;font-size:60rpx;margin-bottom: 30rpx;}
	.oneBtu{margin-top:30rpx;width: 160rpx;background: #3C8BFF;border-radius: 4rpx;text-align: center;font-size:28rpx;margin: 0 auto;padding:17rpx 0;color: #FFFFFF;}
	.itemOne:before,.itemOne:after{width:33rpx;height:33rpx;position: absolute;content: '';border-radius: 100%;background:#dddddd;}
	.itemOne:before{left: -15rpx;margin-top:250rpx}
	.itemOne:after{right:-15rpx;margin-top: 30rpx;}
	
	.itemTow{text-align: center;margin: 0 auto;padding:50rpx 0;}
	.imageName{width: 230rpx;height: 230rpx;border: 1rpx solid red;}
	.imageTis{margin: 10px 0 40rpx;color: #697190;font-size: 24rpx;}
	.copybut{width:386rpx;padding: 22rpx 0;font-size:28rpx;background: #3C8BFF;text-align: center;color: #FFFFFF;margin: 0 auto;border-radius:4rpx}
</style>
