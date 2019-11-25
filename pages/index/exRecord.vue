<template>
	<view class="exRecord">
		<hdBar :leftWords="'提币记录'"></hdBar>
		<view class="content ">
			<view class="inputCen mabot">
				<view class="listItem">
					<view class="itemTitle">
						<view class="title">提币</view>
						<view class="number">10000</view>
					</view>
					<view class="itemTem">
						<view class="tiem">2019-9-16</view>
						<view class="statu">未完成</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:'exRecord',
		components:{
		
		},

		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	page{background: #F8F9FB;}
	.content{padding: 30rpx;}
	.mabot{margin-bottom:30rpx;}
	
	.inputCen{width: 690rpx;}
	
	.listItem{padding:25rpx;border-radius: 20rpx;background: #FFFFFF;}
	.listItem .itemTitle{font-size:28rpx;color: #37416B;margin-bottom: 12rpx;display: flex;justify-content: space-between }
	.listItem .itemTem{display: flex;font-size: 25rpx;color: #B2B6C6;justify-content: space-between;}
	.listItem .itemTem .statu.gray{color: #B2B6C6;}
	.listItem .itemTem .statu.blue{color: #00A3DB;}

	
</style>
