<template>
<div>
    <van-nav-bar title="Safe创家" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-search id="search" v-model="value" placeholder="请输入小区/地铁/商圈" @search="onSearch"/>
    <div v-show="results.length == 0 && value" style="padding:50px;font-size:20px;color:lightgray">无结果，换个词试试～</div>
    <div v-show="!value" class="history">
        <div class="history_header" style="display: flex;
            justify-content: space-between;
            font-size: 13px;
            color: darkgray;">
            <div>搜索历史</div>
            <div @click="onClearHistorys">
                <van-icon name="clear" /> 全部清除</div>
        </div>
        <hr>
        <div v-for="history in historys" :key="history.id" @click="value = history">
            <div class="history_item" style=" display: flex;
                justify-content: space-between;
                padding: 20px 0;">
                <div>{{ history }}</div>
                <van-icon name="clear" @click.stop="onClearHistoryItem(history)" style="color:darkgray" />
            </div>
            <hr>
        </div>
    </div>
    <div v-show="value" class="result">
        <div class="result_item" v-for="result in results" :key="result.id" @click="onAddHistory">
            <router-link :to="'/good/'+result.id">
                <div style="padding:20px 0;display:flex;justify-content:space-between">
                    <div>{{ result.location }}</div>
                    <div style="color:darkgray">1套</div>
                </div>
                <hr>
            </router-link>
        </div>
    </div>

</div>
</template>

<style scoped>
    hr {
        border: 0.5px solid whitesmoke;
    }
    
    .history,
    .result {
        padding: 20px;
    }
    
    .history .history_item,
    .result_item {
        text-align: left;
        font-size: 15px;
    }
</style>


<script>
    import Axios from 'axios';
    export default {
        data() {
            return {
                value: '',
                houses: [],
                results: [],
                historys: [],
            }
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1);
            },
            onSearch() {
                if (this.value) {
                    this.results = [];
                    for (let i in this.houses) {
                        if (this.houses[i].location.search(this.value) != -1) {
                            this.results.push(this.houses[i]);
                        }
                    }
                }
            },
            onClearHistorys() {
                localStorage.removeItem('historys');
                this.historys = [];
            },
            onClearHistoryItem(history) {
                let array = JSON.parse(localStorage.historys);
                let length = array.length;
                for (let i = 0; i < array.length; i++) {
                    if (array[i] == history) {
                        console.log(array[i], history);
                        array.splice(i, 1);
                        break;
                    }
                }
                localStorage.historys = JSON.stringify(array);
                this.historys = JSON.parse(localStorage.historys);
            },
            onAddHistory() {
                let array = JSON.parse(localStorage.historys);
                if (array.length >= 6) {
                    array.splice(5);
                }
                array.unshift(this.value);
                localStorage.historys = JSON.stringify(array);
            }
        },
        created() {
            // document.getElementById('search').focus();
            Axios('https://www.easy-mock.com/mock/5b9dee98cea0cb6b8af5df0c/chuangjia/data', {
                method: 'get'
            }).then((result) => {
                let functions = result.data.functions;
                for (let i = 0; i < 2; i++) {
                    for (let j in functions[i].house) {
                        this.houses.push(functions[i].house[j]);
                    }
                }
            }).catch((err) => {
                this.$toast.fail('请检查网络:' + err);
            })
        },
        mounted() {
            document.getElementById('search').focus();
            if (!localStorage.historys) {
                let array = [];
                localStorage.historys = JSON.stringify(array);
            }
            this.historys = JSON.parse(localStorage.historys);
        },
        watch: {
            value() {
                this.onSearch();
            }
        },
    }
</script>

