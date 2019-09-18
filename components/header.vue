<template name="pageHead">
    <view class="pageHead">
        <view class="header-wrap">
            <view class="index-header">
                <text class="address" v-if="leftWords">{{leftWords}}</text>
                <view class="input-wrap" v-if="input">
                    <input type="text" 
                           placeholder="请输入搜索"
                            v-model="value"
                           @change="inputChange"/>
                    <text class="iconfont iconfangdajing"></text>
                </view>
                <view class="map-wrap"
                      v-if="rightWords||rightIcon"
                      @click="rightClick">
                    <text class="iconfont" :class="rightIcon"></text>
                    <text>{{rightWords}}</text>
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
            'leftWords',
            'input',
            'rightIcon',
            'rightWords'
        ],
        data () {
            return {
                value: ''
            }
        },
        methods: {
            inputChange: function () {
                this.$emit('change',this.value)
            },
            rightClick: function () {
                this.$emit("rightClick")
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
		background-color: #3C8BFF;
		font-size: 28rpx;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}    
	.address {
		font-size: 26rpx;
	}
            
	.input-wrap {
		width: 500rpx;
		height: 70rpx;
		padding: 10rpx 30rpx 10rpx 100rpx;
		box-sizing: border-box;
		background-color: #fff;
		border-radius: 50rpx;
		color: #333333;
		position: relative;
	}
    .input-wrap text {
        position: absolute;
        left: 40rpx;
        top: -8rpx;
        color: #999999;
        font-size: 30rpx;
    }        
    .map-wrap .iconfont {
        font-size: 32rpx;
        margin-right: 5rpx;
    }    
    .map-wrap text {
        font-size: 26rpx;
    }    
    
    .blank {
        height: 126rpx;
    }
</style>