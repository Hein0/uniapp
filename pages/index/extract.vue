<template>
	<view class=" extract">
		<hdBar :leftWords="'提币'" :rightWords='"提币记录"' @eventName="gotoRecord"></hdBar>
		<view class="content">
			<view class="inputCen">
				<view class="inputTit">选择币种</view>
				<view class="inputTxt0">
					<view class="arrow">BTC</view>
				</view>
			</view>
			
			<view class="inputCen matop">
				<view class="inputTit flexs"><text>发布金额</text><text class="blue">可用余额:100UTB</text></view>
				<view class="inputTxt2"><input type="number" placeholder="请输入发布金额" value="" /></view>
			</view>
			
			<view class="inputCen matop">
				<view class="inputTit">收币地址</view>
				<view class="iphoneCen">
					<text class="inputTxt"><input type="text" placeholder="请输入收币地址" :value="USDT" /></text>
					<text class="iphoneTab">USDT</text>
				</view>
			</view>
			
			<view class="inputCen matop">
				<view class="inputTit">支付密码</view>
				<view class="inputTxt2"><input type="password" placeholder="请输入支付密码" value="" /></view>
			</view>
			
			<view class="activate" @click="extractBtu">确定提币</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'extract',
		components:{
			
		}, 
		data() {
			return {
				USDT:100,
			}
		},
		methods: {
			
			//去提币记录
			gotoRecord(){
				uni.navigateTo({
					url:'/pages/index/exRecord'
				})
			}
			
			
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
	.inputCen .iphoneCen{width: 690rpx;height:90rpx;background: #F6F7F9;border-radius:10rpx;display: flex;}
	.inputCen .iphoneCen .iphoneTab{width:130rpx;height:90rpx;text-align: center;font-size:28rpx;color:#37416B;line-height: 90rpx;overflow: hidden;}
	.inputCen .iphoneCen .iphoneTab{width:130rpx;height:90rpx;text-align: center;font-size:28rpx;color:#37416B;line-height: 90rpx;overflow: hidden;}
	.inputCen .inputTxt0{width: 690rpx;height:90rpx;background: #F6F7F9;border-radius:10rpx;line-height: 90rpx;text-indent: 29rpx;font-size: 28rpx;}
	.inputCen .inputTxt{width: 560rpx;height:90rpx;background: #F6F7F9;border-radius:10rpx;line-height: 90rpx;text-indent: 29rpx;font-size: 28rpx;}
	.inputCen .inputTxt input{width: 560rpx;height:90rpx;background: #F6F7F9;text-indent: 29rpx;font-size:28rpx;line-height:90rpx;border-radius:10rpx;}

	.inputCen .inputTxt2{width: 690rpx;height:90rpx;background: #F6F7F9;border-radius:10rpx;}
	.inputCen .inputTxt2 input{width: 690rpx;height:90rpx;background: #F6F7F9;text-indent: 29rpx;font-size:28rpx;line-height:90rpx;border-radius:10rpx;}

	.activate{margin-top: 81rpx;text-align: center;height:90rpx;font-size:28rpx;line-height:90rpx;background:#3C8BFF;color:#FFFFFF;border-radius: 10rpx;}


</style>
