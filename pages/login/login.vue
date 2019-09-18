<template>
	<view class="content">
		<view class="titleCen">
			欢迎登录
		</view>
		<view class="inputCen">
			<view class="inputTit">手机号或邮箱号</view>
			<text class="inputTxt"><input type="text" placeholder="请输入手机号或邮箱号" value="" /></text>
		</view>
		<view class="inputCen matop">
			<view class="inputTit">登录密码</view>
			<text class="inputTxt"><input type="text" placeholder="请输入登录密码" value="" /></text>
		</view>
		<view class="loginBto" @click="loginBto">登录</view>
		<view class="forgetPassword">
			<text @click="gotoPsw">忘记密码</text>
		</view>
		<view class="goRegistered">
			<text class="noaccout" @click="gotoRegister">还没账号?<text class="zhuce">注册</text></text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
			//登录
			loginBto(){
				uni.switchTab({
					url: '/pages/index/index'
				});
			},
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
	.titleCen{font-size: 52rpx;color:#454372;margin:80rpx 0 ;}
	.matop{margin-top:30rpx;}
	.inputCen .inputTit{font-size: 24rpx;color: #37416B;padding-bottom: 20rpx;}
	.inputCen .inputTxt{width: 690rpx;height:90rpx;background: #F6F7F9;border-radius:10rpx;}
	.inputCen .inputTxt input{width: 690rpx;height:90rpx;background: #F6F7F9;text-indent: 29rpx;font-size:28rpx;line-height:90rpx;border-radius:10rpx;}
	.loginBto{margin-top: 81rpx;text-align: center;height:90rpx;font-size:28rpx;line-height:90rpx;background:#3C8BFF;color:#FFFFFF;border-radius: 10rpx;}
	.forgetPassword{margin-top: 59rpx;text-align: center;color:#3C8BFF;font-size:28rpx;}
	.goRegistered{margin-top:58rpx;text-align: center;font-size:28rpx;}
	.goRegistered .noaccout{color:#9BA0B5}
	.goRegistered .zhuce{color:#3C8BFF}
</style>
