<template>
	<view class="content">
		<view class="cartCent">
			<view class="lefCart">
				<view class="usdt">我的USDT</view>
				<view class="usdtNumber">110015</view>
			</view>
			<view class="rightCart">
				<view class="usdt">冻结的BTLB</view>
				<view class="usdtNumber">110015</view>
			</view>
		</view>
		
		<view class="inputCen">
			<view class="inputTit">需消耗</view>
			<view class="iphoneCen">
				<text class="inputTxt"><input type="text" placeholder="请输入USDT" disabled="disabled" :value="USDT" /></text>
				<text class="iphoneTab">USDT</text>
			</view>
		</view>
		
		<view class="inputCen matop">
			<view class="inputTit">支付密码</view>
			<text class="inputTxt2"><input type="password" placeholder="请输入支付密码" value="" /></text>
		</view>
		
		<view class="activate" @click="activate">激活</view>
		
	</view>
</template>

<script>
	export default {
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
	.cartCent{width: 690rpx;display: flex;margin-bottom: 50rpx;}
	.cartCent .lefCart{width: 335rpx;color: #FFFFFF;margin-right:20rpx;height: 240rpx;border-radius: 20rpx;background: url(../../static/images/activation_my.png) no-repeat center center;background-size:100% 100%;}
	.cartCent .rightCart{width: 335rpx;color: #FFFFFF;height: 240rpx;border-radius: 20rpx;background: url(../../static/images/activation_freeze.png) no-repeat center center;background-size:100% 100%;}
	.usdt{margin: 100rpx 0rpx 20rpx 30rpx;font-size:24rpx;}
	.usdtNumber{font-size:35rpx;margin-left: 30rpx;}
	.matop{margin-top:30rpx;}
	
	.inputCen .inputTit{font-size: 24rpx;color: #37416B;padding-bottom: 20rpx;}
	.inputCen .iphoneCen{width: 690rpx;height:90rpx;background: #F6F7F9;border-radius:10rpx;display: flex;}
	.inputCen .iphoneCen .iphoneTab{width:130rpx;height:90rpx;text-align: center;font-size:28rpx;color:#37416B;line-height: 90rpx;overflow: hidden;}
	.inputCen .inputTxt{width: 560rpx;height:90rpx;background: #F6F7F9;border-radius:10rpx;}
	.inputCen .inputTxt input{width: 560rpx;height:90rpx;background: #F6F7F9;text-indent: 29rpx;font-size:28rpx;line-height:90rpx;border-radius:10rpx;}

	.inputCen .inputTxt2{width: 690rpx;height:90rpx;background: #F6F7F9;border-radius:10rpx;}
	.inputCen .inputTxt2 input{width: 690rpx;height:90rpx;background: #F6F7F9;text-indent: 29rpx;font-size:28rpx;line-height:90rpx;border-radius:10rpx;}

	.activate{margin-top: 81rpx;text-align: center;height:90rpx;font-size:28rpx;line-height:90rpx;background:#3C8BFF;color:#FFFFFF;border-radius: 10rpx;}


</style>
