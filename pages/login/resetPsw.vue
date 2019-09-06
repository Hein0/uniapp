<template>
	<view class="content">
		<view class="titleCen">重置密码</view>
		<view class="inputCen">
			<view class="inputTit">登录密码</view>
			<text class="inputTxt"><input type="text" placeholder="请输入新的密码" value="" /></text>
		</view>
		<view class="inputCen matop">
			<view class="inputTit">再确认登录密码</view>
			<text class="inputTxt"><input type="text" placeholder="请输入登录密码" value="" /></text>
		</view>
		<view class="resetPsw"  @click="resetPsw">重置</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			//重置密码
			resetPsw(){
				
			}
		}
	}
</script>

<style>
	.content{padding: 30rpx;}
	.titleCen{font-size: 52rpx;color:#454372;margin:80rpx 0 ;}
	.matop{margin-top:30rpx;}
	.inputCen .inputTit{font-size: 24rpx;color: #37416B;padding-bottom: 20rpx;}
	.inputCen .inputTxt{width: 690rpx;height:90rpx;background: #F6F7F9;border-radius:10rpx;}
	.inputCen .inputTxt input{width: 690rpx;height:90rpx;background: #F6F7F9;text-indent: 29rpx;font-size:28rpx;line-height:90rpx;border-radius:10rpx;}
	.resetPsw{margin-top: 81rpx;text-align: center;height:90rpx;font-size:28rpx;line-height:90rpx;background:#3C8BFF;color:#FFFFFF;border-radius: 10rpx;}

</style>
