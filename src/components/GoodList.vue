<template>
    <router-link :to="'/good/'+house.id">
        <div class="hot_row" style="padding:20px 0;display:flex">
            <img :src="house.cover" alt="" style="border-radius: 5px">
            <div class="hot_col" style="padding-left:15px">
                <div v-text="house.title" style="font-size:15px;font-weight:bold"></div>
                <div style="font-size:10px">{{house.huxing}}/{{house.area}}m²</div>
                <div style="color:red;font-size:13px;font-weight:bold;">{{house.price}}</div>
                <div>
                    <van-tag plain>地铁</van-tag>&nbsp;
                    <van-tag plain>随时看房</van-tag>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: 'good',
        props: ['house']
    }
</script>

<style scoped>
    .hot .hot_body .hot_col {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: left;
        white-space: nowrap;
    }
</style>
