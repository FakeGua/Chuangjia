<template>
<div class="root">
    <div class="body" style="background-color:whitesmoke">
        <van-nav-bar title="免费发布租房源" left-text="返回" left-arrow @click-left="onClickLeft">
        </van-nav-bar>
        <!-- 输入框 -->
        <van-cell-group style="margin-top:20px">
            <van-field label="小区名字" icon="question" placeholder="请输入小区名字" @click-icon="$toast('仅供测试，谢谢配合')" />
            <van-field label="楼栋号" placeholder="请输入楼栋号" />
            <van-field label="单元号" placeholder="请输入单元号" />
            <van-field label="门牌号" placeholder="请输入门牌号" />
        </van-cell-group>
        <van-cell-group style="margin-top:10px">
            <van-field error label="期望租价" value="元/月" input-align="right" />
        </van-cell-group>
        <van-cell-group style="margin-top:10px">
            <van-field label="称呼" placeholder="怎么称呼您" />
            <van-field label="手机号" placeholder="请输入手机号" />
            <van-field label="期望出租时间" :value="saleTime" @click="showPicker=true;showOverlay=true" input-align="right" />
            <van-popup v-model="showPicker" position="bottom" :overlay="showOverlay">
                <van-picker show-toolbar title="选择出租时间" :columns="columns" @cancel="showPicker=false" @confirm="onConfirm" />
            </van-popup>
        </van-cell-group>
    </div>
    <van-button @click="$toast.success({message:'敬请期待',duration:1000})" type="primary" style="margin-top:30px;width:66%;font-size:16px;background-color:#38f;border:none">提交</van-button>
</div>
</template>

<style scoped>
    .test {
        color: gainsboro
    }
    
    .body {
        text-align: left;
    }
</style>

<script>
    export default {
        data() {
            return {
                activeNames: ['1'],
                showPicker: false,
                showOverlay: false,
                columns: ['一个月内', '三个月内', '半年内', '观望'],
                saleTime: ''
            }
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1);
            },
            onConfirm(value, index) {
                this.saleTime = value;
                this.showPicker = false;
            }
        },
    }
</script>
