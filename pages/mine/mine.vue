<template>
	<view class="content">
		<view class="personage">
			<view class="perImg"><image style="width: 60rpx;height: 60rpx;" src="../../static/images/my_photo.png" mode=""></image></view>
			<view class="perCent">
				<view class="perName">我的名字</view>
				<view class="perMsg">介绍之类的话</view>
			</view>
		</view>
		<view class="list-item" @click="gotoExtract">
			<text class="itemImg"><image style="width: 33rpx;height: 40rpx;" src="../../static/images/my_detail.png" mode=""></image></text>
			<text class="itemTxt">收入明细</text>
		</view>
		<view class="list-item">
			<text class="itemImg"><image style="width: 34rpx;height: 34rpx;" src="../../static/images/my_share.png" mode=""></image></text>
			<text class="itemTxt">分享好友</text>
		</view>
		<view class="list-item">
			<text class="itemImg"><image style="width: 35rpx;height: 40rpx;" src="../../static/images/my_password.png" mode=""></image></text>
			<text class="itemTxt">修改登录密码</text>
		</view>
		<view class="list-item" @click="revamPaypasw">
			<text class="itemImg"><image style="width: 32rpx;height: 38rpx;" src="../../static/images/my_pay.png" mode=""></image></text>
			<text class="itemTxt">修改支付密码</text>
		</view>
		<view class="list-item" @click="logout">
			<text class="itemImg"><image style="width: 34rpx;height: 36rpx;" src="../../static/images/my_exit.png" mode=""></image></text>
			<text class="itemTxt">注销登录</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				openid:""
			}
		},
		created(){
			uni.setStorage({
				key:"openid",
				data:"123456"
			})
		},
		//挂载完成
		mounted(){
			let self = this;
			 uni.getStorage({
				key:"openid",
				success: function (res) {
					self.openid = res.data;
				}
			})
		},
		//方法
		methods: {
			
			//收支明细
			gotoExtract(){
				uni.navigateTo({
					url:'/pages/mine/paymentlist'
				})
			},
			
			//修改支付密码
			revamPaypasw(){
				uni.navigateTo({
					url:'/pages/mine/revampPayPsw'
				})
			},
			//注销登录
			logout(){
				uni.clearStorage();
				uni.reLaunch({
					url:'/pages/login/login'
				})
			}
			
		}
	}
</script>
	
<style>
	page{background: #F9FAFC;}
	.content{padding: 30rpx;}
	.personage{
		width: 690rpx;
		height:146rpx;
		background: #FFFFFF;
		display: flex;
		display: -webkit-flex;
		border-radius: 20rpx;
		box-shadow: 0rpx 0rpx 12rpx 0rpx rgba(0, 0, 0, 0.1);
	}
	.personage .perImg{
		width: 60rpx;
		height: 60rpx;
		margin: 43rpx 30rpx;
		border-radius: 50%;
		text-align: center;
	}
	.personage .perCent{
		padding: 30rpx 0;
	}
	.personage .perCent .perName{font-size: 35rpx;color: #37416B;}
	.personage .perCent .perMsg{font-size: 24rpx;color: #9BA0B5;margin-top: 10rpx;}
	.list-item{
		width: 690rpx;
		height:100rpx;
		line-height: 100rpx;
		margin-top: 30rpx;
		background: #FFFFFF;
		display: flex;
		display: -webkit-flex;
		border-radius: 20rpx;
		box-shadow: 0rpx 0rpx 12rpx 0rpx rgba(0, 0, 0, 0.1);
		background:url(../../static/images/arrow.png) no-repeat 95% center;
		background-size:14rpx 22rpx;
	}
	.list-item .itemImg{
		width: 40rpx;
		height: 40rpx;
		margin: 30rpx 20rpx 30rpx 30rpx;
		text-align: center;
		line-height: 40rpx;
	}
	.itemTxt{font-size: 28rpx;color:#37416B}
	
	
	
	
</style>
