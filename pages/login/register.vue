<template>
	<view class="registerWrap">
		<hdBar></hdBar>
		<view class="content">
			<view class="titleCen">设置密码</view>
			<view class="inputCen">
				<view class="inputTit">登录密码</view>
				<text class="inputTxt"><input type="password" placeholder="请输入登录密码" value="" /></text>
			</view>
			<view class="inputCen matop">
				<view class="inputTit">支付密码</view>
				<text class="inputTxt"><input type="password" placeholder="请输入登录密码" value="" /></text>
			</view>
			<view class="inputCen matop">
				<view class="inputTit">再输入支付密码</view>
				<text class="inputTxt"><input type="password" placeholder="请再输入支付密码" value="" /></text>
			</view>
			<view class="inputCen matop">
				<view class="inputTit">邀请码(非必填)</view>
				<text class="inputTxt"><input type="text" placeholder="请输入邀请码" value="" /></text>
			</view>
			<view class="register">注册</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'registerWrap',
		data() {
			return {
				
			}
		},
		methods: {
			//忘记密码
			gotoPsw(){
				uni.navigateTo({
					url:"/pages/login/retrievePsw",
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			//去注册
			gotoRegister(){
				uni.navigateTo({
					url:"/pages/login/emRegister"
				})
			}
		}
	}
</script>

<style>
	.content{padding: 30rpx;}
	.titleCen{font-size: 52rpx;color:#454372;margin:0 0 80rpx ;}
	.matop{margin-top:30rpx;}
	.inputCen .inputTit{font-size: 24rpx;color: #37416B;padding-bottom: 20rpx;}
	.inputCen .inputTxt{width: 690rpx;height:90rpx;background: #F6F7F9;border-radius:10rpx;}
	.inputCen .inputTxt input{width: 690rpx;height:90rpx;background: #F6F7F9;text-indent: 29rpx;font-size:28rpx;line-height:90rpx;border-radius:10rpx;}
	.register{margin-top: 81rpx;text-align: center;height:90rpx;font-size:28rpx;line-height:90rpx;background:#3C8BFF;color:#FFFFFF;border-radius: 10rpx;}



</style>
