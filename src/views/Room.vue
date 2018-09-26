<template>
    <div>
        <van-nav-bar title="Safe创家" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
        <input class="search_box" type="text" name="" id="" placeholder="你想住在哪？"  @click="$router.push('/search')">
        <div class="select">
            <span>区域</span>
            <span>租金</span>
            <span>筛选</span>
        </div>
        <hr style="margin-top:10px;border:0.5px solid whitesmoke">
        <div class="hot">
            <div class="hot_body">
                <div v-for="house in houses" :key="house.id">
                    <good :house="house"></good>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import good from '../components/GoodList'
    export default {
        data() {
            return {
                value: '',
                houses: {}
            }
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1);
            },
            onClickRight() {
                Toast('按钮');
            }
        },
        created() {
            axios("https://www.easy-mock.com/mock/5b9dee98cea0cb6b8af5df0c/chuangjia/data", {
                method: 'get'
            }).then((result) => {
                console.log(result);
                this.houses = result.data.functions[0].house;
            }).catch((err) => {
                console.log(err);
            });
        },
        components: {
            good
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
    
    .select {
        display: flex;
        font-size: 13px;
        justify-content: space-around;
    }
    
    .hot {
        padding: 0 0 0 30px;
    }
</style>

