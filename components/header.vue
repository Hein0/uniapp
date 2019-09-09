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
		height: 88upx;
		line-height: 88upx;
		padding: 0 30upx;
		padding-top: 40upx;
		background-color: #00c16f;
		font-size: 28upx;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}    
	.address {
		font-size: 26upx;
	}
            
	.input-wrap {
		width: 500upx;
		height: 70upx;
		padding: 10upx 30upx 10upx 100upx;
		box-sizing: border-box;
		background-color: #fff;
		border-radius: 50upx;
		color: #333333;
		position: relative;
	}
    .input-wrap text {
        position: absolute;
        left: 40upx;
        top: -8upx;
        color: #999999;
        font-size: 30upx;
    }        
    .map-wrap .iconfont {
        font-size: 32upx;
        margin-right: 5upx;
    }    
    .map-wrap .iconfont text {
        font-size: 26upx;
    }    
    
    .blank {
        height: 126upx;
    }
</style>