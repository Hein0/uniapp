<template>
	<view class="rechargePage">
		<hdBar :leftWords="'充币'"></hdBar>
		<view class="content">
			<view class="inputCen">
				<view class="inputTit">选择币种</view>
				<view class="inputTxt0">
					<view class="arrow">BTC</view>
				</view>
			</view>
			
			<view class="inputCen matop">
				<view class="addre">
					<view class="addre-title">收币地址</view>
					<view class="addre-url">
						<view class="urls">asdfd6fsdf6sdf6sd6fasdfd6fsdf6sdf6sd6fasdfd6fsdf6sdf6sd6fasdfd6fsdf6sdf6sd6f</view>
						<view class="copy"></view>
					</view>
				</view>
			</view>
			
			<view class="inputCen matop">
				<view class="qrcode">
					<view class="qrcodeImg">
						
					</view>
					<view class="saves">保存二维码</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import pagehede from '@/components/header.vue'
	export default {
		name:'extract',
		comments:{
			pagehede:pagehede,
		}, 
		data() {
			return {
				USDT:100
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.content{padding: 30rpx;}
	.matop{margin-top:30rpx;}
	.arrow{background:url(../../static/images/arrow.png) no-repeat 95% center !important;background-size:14rpx 22rpx !important;}
	.flexs{display: flex;justify-content: space-between;}
	.blue{color: #3C8BFF;font-size: 24rpx;}
	
	.inputCen{width: 690rpx;}
	.inputCen .inputTit{font-size: 24rpx;color: #37416B;padding-bottom: 20rpx;}
	.inputCen .inputTxt0{width: 690rpx;height:90rpx;background: #F6F7F9;border-radius:10rpx;line-height: 90rpx;text-indent: 29rpx;font-size: 28rpx;}

	.addre{padding:25rpx;border-radius: 20rpx;background: #F6F7F9;}
	.addre .addre-title{font-size:28rpx;color: #37416B;margin-bottom: 12rpx;}
	.addre .addre-url{display: flex;font-size: 28rpx;color: #37416B;justify-content: space-between;}
	.addre .addre-url .urls{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;flex: 1;}
	.addre .addre-url .copy{width: 30rpx;height: 30rpx;margin-left:20rpx;background:url(../../static/images/charge_copy.png) no-repeat center center;background-size:28rpx 28rpx}
	
	.qrcode{background: #F6F7F9;border-radius: 20rpx;padding:40px 0;}
	.qrcode .qrcodeImg{width: 350rpx;height:350rpx;margin: 0 auto;border: 1rpx solid red;}
	.qrcode .saves{text-align: center;margin-top:30rpx;font-size:28rpx;color:#3C8BFF}
	
</style>
