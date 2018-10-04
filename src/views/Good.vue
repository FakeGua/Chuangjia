<template>
    <div class="root">
        <van-nav-bar title="Safe创家" left-text="返回" left-arrow @click-left="onClickLeft">
            <van-icon name="search" slot="right" @click="$router.push('../search')" />
        </van-nav-bar>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="banner">
                <van-swipe :autoplay="3000">
                    <a href="https://vr.justeasy.cn/view/65829.html">
                        <van-swipe-item>
                            <img :src="house.banner" alt="" width="100%">
                            <span>进入VR看房 <img src="../assets/点击.png" alt="" width="24px" height="24px"></span>
                        </van-swipe-item>
                    </a>
                </van-swipe>
            </div>
            <div class="title">
                <span v-text="house.title" style="fontSize:20px;fontWeight:bold"></span>
                <van-tag plain type="primary" style="position:absolute;right:30px">随时入住</van-tag>
                <div v-text="house.price" style="color:red;fontWeight:bold"></div>
            </div>
            <hr>
            <div class="hint">
                <div><span>户型：</span>{{house.huxing}}<br><span>朝向：</span>{{house.direction}}</div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div><span>面积：</span>{{house.area}}m²<br><span>窗户类型：</span>{{house.window}}</div>
            </div>
            <hr>
            <div class="promise">
                <div>真实房源，假一赔百元<br><span style="font-size:13px;color:darkgray">真实在租，真实价格，真实图片</span></div>
                <img src="../assets/promise.png" width="36px" height="36px" alt="">
            </div>
            <hr>
            <div class="icon_group">
                <div style="fontSize:20px;fontWeight:bold">房源简介</div>
                <div class="icon_1">
                    <div v-if="house.set.tv">
                        <img src="../assets/icon_true/电视.png" width="36px" height="36px" alt=""><br> 电视
                    </div>
                    <div v-else>
                        <img src="../assets/icon_false/电视.png" width="36px" height="36px" alt=""><br>
                        <del>电视</del>
                    </div>
                    <div v-if="house.set.ice">
                        <img src="../assets/icon_true/冰箱.png" width="36px" height="36px" alt=""><br> 冰箱
                    </div>
                    <div v-else>
                        <img src="../assets/icon_false/冰箱.png" width="36px" height="36px" alt=""><br>
                        <del>冰箱</del>
                    </div>
                    <div v-if="house.set.wash">
                        <img src="../assets/icon_true/洗衣机.png" width="36px" height="36px" alt=""><br> 洗衣机
                    </div>
                    <div v-else>
                        <img src="../assets/icon_false/洗衣机.png" width="36px" height="36px" alt=""><br>
                        <del>洗衣机</del>
                    </div>
                    <div v-if="house.set.air">
                        <img src="../assets/icon_true/空调.png" width="36px" height="36px" alt=""><br> 空调
                    </div>
                    <div v-else>
                        <img src="../assets/icon_false/空调.png" width="36px" height="36px" alt=""><br>
                        <del>空调</del>
                    </div>
                </div>
                <div class="icon_2">
                    <div v-if="house.set.water">
                        <img src="../assets/icon_true/热水器.png" width="36px" height="36px" alt=""><br> 热水器
                    </div>
                    <div v-else>
                        <img src="../assets/icon_false/热水器.png" width="36px" height="36px" alt=""><br>
                        <del>热水器</del>
                    </div>
                    <div v-if="house.set.bed">
                        <img src="../assets/icon_true/床.png" width="36px" height="36px" alt=""><br> 床
                    </div>
                    <div v-else>
                        <img src="../assets/icon_false/床.png" width="36px" height="36px" alt=""><br>
                        <del>床</del>
                    </div>
                    <div v-if="house.set.wifi">
                        <img src="../assets/icon_true/宽带.png" width="36px" height="36px" alt=""><br> 宽带
                    </div>
                    <div v-else>
                        <img src="../assets/icon_false/宽带.png" width="36px" height="36px" alt=""><br>
                        <del>宽带</del>
                    </div>
                    <div v-if="house.set.co">
                        <img src="../assets/icon_true/天然气.png" width="36px" height="36px" alt=""><br> 天然气
                    </div>
                    <div v-else>
                        <img src="../assets/icon_false/天然气.png" width="36px" height="36px" alt=""><br>
                        <del>天然气</del>
                    </div>
                </div>
            </div>
            <hr>
            <div class="ps">
                <div v-text="house.ps"></div>
            </div>
            <hr>
            <div class="manager">
                <div>公寓管家：{{house.manager}}
                    <div style="fontSize:10px;color:darkgray">租房问题可以随时联系我</div>
                </div>
                <a href="tel:10086">
                    <van-button type="default" plain style="borderRadius:30px;color:#38f;borderColor:#38f">电话咨询</van-button>
                </a>
            </div>
        </van-pull-refresh>
    </div>
</template>

<style scoped>
    hr {
        border: 0.5px solid whitesmoke;
        width: 85%;
    }
    
    .title,
    .hint,
    .promise,
    .icon_group,
    .ps,
    .manager {
        padding: 15px 30px;
        text-align: left;
    }
    
    .banner span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        font-weight: bold;
        position: absolute;
        bottom: 20px;
        right: 10px;
        background-color: rgba(255, 255, 255, 0.6);
        padding: 5px 15px;
        border-radius: 30px;
    }
    
    .hint {
        display: flex;
        font-size: 15px;
        font-weight: bold;
    }
    
    .hint span {
        color: darkgray;
    }
    
    .promise {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        font-weight: bold;
    }
    
    .icon_group .icon_1,
    .icon_2 {
        text-align: center;
        font-size: 10px;
        display: flex;
        justify-content: space-around;
        padding-top: 20px;
    }
    
    .manager {
        font-weight: bold;
        display: flex;
        justify-content: space-between;
    }
</style>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                house: {
                    "set": {
                        "tv": true,
                        "ice": true,
                        "wash": true,
                        "air": true,
                        "water": true,
                        "bed": true,
                        "hot": true,
                        "wifi": true,
                        "cloth": true,
                        "co": true
                    }
                },
                isLoading: false
            }
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1);
            },
            onRefresh() {
                setTimeout(() => {
                    this.$toast.success({
                        message: '刷新成功',
                        duration: 1000
                    });
                    this.isLoading = false;
                }, 500);
            }
        },
        created() {
            axios("https://www.easy-mock.com/mock/5b9dee98cea0cb6b8af5df0c/chuangjia/data", {
                method: 'get'
            }).then((result) => {
                console.log(result);
                this.functions = result.data.functions;
                for (let i = 0; i < 2; i++) {
                    for (let j in result.data.functions[i].house)
                        if (result.data.functions[i].house[j].id == this.$route.params.id) {
                            this.house = result.data.functions[i].house[j];
                        }
                }
            }).catch((err) => {
                console.log(err);
            });
        }
    }
</script>

