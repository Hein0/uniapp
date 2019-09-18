<template name="pageHead">
    <view class="pageHead">
        <view class="header-wrap">
            <view class="index-header">
				<view class="leftWrap">
					<text class="backIcon" @click="goToBack"></text>
					<text class="leftTitle" v-if="leftWords">{{leftWords}}</text>
				</view>
                
                <view class="input-wrap" v-if="title">{{title}}</view>
                <view class="map-wrap">
                    <text class="iconfont" v-if="rightIcon" :class="rightIcon" @click="rightIconClick"></text>
                    <text  v-if="rightWords" @click="rightClick()">{{rightWords}}</text>
                </view>
            </view>
        </view>
        <view class="blank"></view>

    </view>
</template>

<script>
    export default {
        name: "pageHead",
        props: [
            'leftWords',//返回按钮
            'title',//标题
            'rightIcon',//右边图标
            'rightWords', //右边文字
        ],
        data () {
            return {
                value: ''
            }
        },
        methods: {
			//返回上一层
			goToBack(){
				uni.navigateBack({
					
				})
			},

			//点击右边文字
            rightClick() {
				this.$emit("eventName")
            },
			//筛选
			rightIconClick(){
				this.$emit("eventName")
			}
        }
    }
</script>

<style>
    .header-wrap {
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 999;
    }    
	.index-header {
		height: 88rpx;
		line-height: 88rpx;
		padding: 0 30rpx;
		padding-top: 40rpx;
		background-color: #FFFFFF;
		font-size: 28rpx;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}    
	.leftWrap{
		line-height: 88rpx;
		display: flex;
		justify-content: space-between;
	}
	.backIcon{width:50rpx;height:88rpx;text-align: center;display: block;margin-right: 15rpx;background: url(../static/images/back.png) no-repeat left center;background-size:36rpx 26rpx;}
	.leftTitle {
		font-size: 36rpx;
		color: #37416B;
	}
            
	.input-wrap {
		height: 70rpx;
		line-height:70rpx;
		box-sizing: border-box;
		background-color: #fff;
		color: #37416B;
		flex: 1;
		text-align: center;
	}
	.map-wrap{
		display: flex;
	}	   
    .map-wrap .iconfont {
        font-size: 32rpx;
        margin-right: 5rpx;
		width: 100rpx;
		height: 88rpx;
		text-align: center;
		display: block;
	}    
    .map-wrap text {
        font-size: 28rpx;
		color: #37416B;
    }   
	.sx{background:url(../static/images/detail_screening.png) no-repeat 95% center ;background-size: 26rpx 30rpx;}
    
    .blank {
        height: 126rpx;
    }
</style>