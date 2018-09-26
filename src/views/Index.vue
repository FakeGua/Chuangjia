<template>
  <div class="home">
    <div class="header">
      <div class="title">
        <span class="title_2">VR看房<span class="color_gray"> / </span>找长租房<span class="color_gray"> / </span>学生专享</span>
        <br> VR看房就找
        <br> Safe创家
      </div>
      <span class="position">
              <van-icon class="icon_position" size="10px" color="" name="location" /> 天津
            </span>
    </div>
    <form action="/">
      <van-search class="search_box" v-model="search_word" placeholder="输入要找的小区开始VR看房～" background="#fff" @click="$router.push('/search')"/>
    </form>
  
    <!-- 分类 -->
  
    <div class="category">
      <div v-for="category in categorys" :key="category.id">
        <router-link :to="category.url"><img :src="category.icon" alt="" width="50%"></router-link>
        <br> {{category.name}}
      </div>
    </div>
  
    <!-- 近期好房 -->
  
    <div class="hot">
      <div class="hot_header">
        近期好房
      </div>
      <div class="hot_body">
        <div v-for="house in houses" :key="house.id">
          <good :house="house"></good>
          <hr style="border: 0.5px solid whitesmoke">
        </div>
      </div>
    </div>
    <div style="font-size:10px;color:gainsboro;padding:20px">我们是有底线哒～</div>
  </div>
</template>

<script>
  import axios from 'axios'
  import good from '../components/GoodList'
  // @ is an alias to /src
  export default {
    name: 'index',
    data() {
      return {
        houses: [],
        search_word: '',
        functions: [],
        categorys: [{
            name: "整租",
            icon: require("../assets/home.png"),
            url:'/home'
          }, {
            name: "合租",
            icon: require("../assets/room.png"),
            url:'/room'
          },
          {
            name: "找房",
            icon: require("../assets/search.png"),
            url:'/search'
          },
          {
            name: "出租",
            icon: require("../assets/sale.png"),
            url:'/sale'
          }
        ],
  
      }
    },
    components: {
      good
    },
    methods: {
      onSearch() {
  
      },
      onCancel() {
  
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
            this.houses.push(result.data.functions[i].house[j]);
        }
      }).catch((err) => {
        console.log(err);
      });
    },
  }
</script>

<style scoped>
  .header {
    background-image: url('../assets/banner.jpg');
    background-size: cover;
    background-color: antiquewhite;
    text-align: left;
    padding: 30px 0 50px 50px;
  }
  
  .header .title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .header .title .title_2 {
    font-size: 12px;
    font-weight: initial;
  }
  
  .header .position {
    font-size: 10px;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 3px 10px;
    border-radius: 30px;
  }
  
  .header .position .icon_position {
    vertical-align: middle;
  }
  
  .search_box {
    border: 1px solid gainsboro;
    border-radius: 100px;
    margin: 0 30px;
    margin-top: -20px;
    background-color: white;
    box-shadow: 1px 5px 5px ghostwhite;
    padding: 5px;
  }
  
  .category {
    padding: 30px;
    display: flex;
    font-size: 13px;
    justify-content: space-around;
    align-items: center;
  }
  
  .hot {
    margin: 0 30px;
    text-align: left;
  }
  
  .hot .hot_header {
    text-align: left;
    font-size: 20px;
    font-weight: bolder;
  }
</style>

