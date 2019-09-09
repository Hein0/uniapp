<template>
	<view class="content">
		<view class="inputCen">
			<view class="inputTit">手机号</view>
			<text class="inputTxt"><input type="text" placeholder="请输入手机号" value="" /></text>
		</view>
		
		<view class="inputCen matop">
			<view class="inputTit">验证码</view>
			<view class="verification">
				<text class="verificationCode"><input type="text" placeholder="请输入验证码" value="" /></text>
				<text class="getCode">获取验证码</text>
			</view>
		</view>
		
		<view class="inputCen matop">
			<view class="inputTit">新支付密码</view>
			<text class="inputTxt"><input type="password" placeholder="请输入新支付密码" value="" /></text>
		</view>
		
		<view class="nexts">确认修改</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {

		}
	}
</script>

<style>
	.content{padding: 30rpx;}
	.matop{margin-top:30rpx;}
	.inputCen .inputTit{font-size: 24rpx;color: #37416B;padding-bottom: 20rpx;}
	.inputCen .inputTxt{width: 690rpx;height:90rpx;background: #F6F7F9;border-radius:10rpx;}
	.inputCen .inputTxt input{width: 690rpx;height:90rpx;background: #F6F7F9;text-indent: 29rpx;font-size:28rpx;line-height:90rpx;border-radius:10rpx;}
	.inputCen .verification{width: 690rpx;height:90rpx;border-radius:10rpx;display: flex;}
	.inputCen .verification .verificationCode{width: 514rpx;height:90rpx;background: #F6F7F9;border-radius:10rpx;}
	.inputCen .verification .verificationCode input{width: 490rpx;height:90rpx;background: #F6F7F9;text-indent: 29rpx;font-size:28rpx;line-height:90rpx;border-radius:10rpx;}
	.inputCen .verification .getCode{width: 180rpx;height:90rpx;line-height: 90rpx;text-align: center;border-radius: 10rpx;font-size:24rpx;margin-left: 20rpx;background: #F6F7F9;color:#3C8BFF}
	.nexts{margin-top: 81rpx;text-align: center;height:90rpx;font-size:28rpx;line-height:90rpx;background:#3C8BFF;color:#FFFFFF;border-radius: 10rpx;}

	.gotoiphonReg {margin-top: 57rpx;}
	.gotoiphonReg .iphonReg{color: #3C8BFF;font-size:28rpx;}
	
</style>
