<template>
    <div>
        <van-nav-bar title="Safe创家" left-text="返回" left-arrow @click-left="onClickLeft">
            <van-icon name="search" slot="right" @click="$router.push('./search')" />
        </van-nav-bar>
        <input class="search_box" type="text" name="" id="" placeholder="你想住在哪？" @click="$router.push('/search')">
        <condition></condition>
        <hr style="margin-top:10px;border:0.5px solid whitesmoke">
        <div class="hot">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <div class="hot_body">
                    <div v-for="house in houses" :key="house.id">
                        <good :house="house"></good>
                    </div>
                </div>
            </van-pull-refresh>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import good from '../components/GoodList'
    import condition from '../components/Select';
    export default {
        data() {
            return {
                value: '',
                houses: {},
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
                this.houses = result.data.functions[0].house;
            }).catch((err) => {
                console.log(err);
            });
        },
        components: {
            good,
            condition
        }
    }
</script>

<style scoped>
    .search_box {
        padding: 5px;
        display: block;
        width: 80%;
        margin: 10px auto;
        border-radius: 20px;
        border: none;
        background-color: whitesmoke;
        text-align: center;
        font-size: 13px;
    }
    
    .hot {
        padding: 0 0 0 30px;
    }
</style>

