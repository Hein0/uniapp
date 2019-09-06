<template>
	<view class="content">
		<image class="logo" src="../../static/images/activation_freeze.png"></image>
		
		<view class="news">
			<text class="newsIcon"><image style="width: 30rpx;height: 24rpx;" src="../../static/images/home_notice.png" mode=""></image></text>
			<view class="newslist">啊是的范德萨范德萨</view>
			<text class="more">更多</text>
		</view>
		
		<view class="wrap">
			<view class="wrapTitle">
				<view class="titleItem">
					<view class="textIcon"><image style="width: 56rpx;height: 44rpx;" src="../../static/images/home_charge.png" mode=""></image></view>
					<view class="texts">充币</view>
				</view>
				<view class="titleItem">
					<view class="textIcon"><image style="width: 56rpx;height: 44rpx;" src="../../static/images/home_mention.png" mode=""></image></view>
					<view class="texts">充币</view>
				</view>
				<view class="titleItem">
					<view class="textIcon"><image style="width: 56rpx;height: 59rpx;" src="../../static/images/home_activation.png" mode=""></image></view>
					<view class="texts">充币</view>
				</view>
			</view>
			
			<view class="wrapList">
				<view class="listTitle">我的资产</view>
				<view class="list-item">
					<text class="itemImg"><image style="width: 54rpx;height: 54rpx;" src="../../static/images/trad_complete.png" mode=""></image></text>
					<text class="itemTxt">USDT</text>
				</view>
				<view class="list-item">
					<text class="itemImg"><image style="width: 54rpx;height: 54rpx;" src="../../static/images/trad_complete.png" mode=""></image></text>
					<text class="itemTxt">USDT</text>
				</view>
				<view class="list-item">
					<text class="itemImg"><image style="width: 54rpx;height: 54rpx;" src="../../static/images/trad_complete.png" mode=""></image></text>
					<text class="itemTxt">USDT</text>
				</view>
				<view class="list-item">
					<text class="itemImg"><image style="width: 54rpx;height: 54rpx;" src="../../static/images/trad_complete.png" mode=""></image></text>
					<text class="itemTxt">USDT</text>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '成哥牛逼'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	page{background: #F9FAFC;}
	.content {
		position: relative;
	}
	.news{position: absolute;top:309rpx;width: 690rpx;height: 80rpx;left: 30rpx;right: 30rpx;display: flex;background: #FFFFFF;border-radius:8rpx;box-shadow:0rpx 0rpx 12rpx 0rpx rgba(0, 0, 0, 0.03);}
	.newsIcon{width: 40rpx;margin: 10rpx 25rpx;text-align: center;}
	.newslist{flex-grow: 1;text-align: left;overflow: hidden;font-size:26rpx;color: #707479;line-height: 80rpx;}
	.more{color: #00A3DB;font-size: 26rpx;padding: 0 30rpx;height: 80rpx;line-height: 80rpx;}
	.logo {width: 750rpx;height: 350rpx;}
	.wrap{margin-top: 60rpx;padding: 0rpx 30rpx 30rpx;}
	.wrapTitle{display: flex;text-align: center;background: #FFFFFF;box-shadow:0rpx 0rpx 12rpx 0rpx rgba(0, 0, 0, 0.03);border-radius: 20rpx;}
	.titleItem{flex: 1;padding: 25rpx 0px 5rpx;}
	.titleItem .textIcon{height: 62rpx;}
	.titleItem .texts{color: #3A4668;font-size: 25rpx;padding-bottom: 15rpx;}

	.wrapList{margin-top: 35rpx;}
	.listTitle{color: #3A4668;font-size: 32rpx;}
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
