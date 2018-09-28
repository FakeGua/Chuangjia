<template>
    <div class="select">
        <div @click="$toast({message:'敬请期待',duration:500})">区域 <img src="../assets/下箭头.png"></div>
        <div @click="$toast({message:'敬请期待',duration:500})">租金 <img src="../assets/下箭头.png"></div>
        <div @click="$toast({message:'敬请期待',duration:500})">筛选 <img src="../assets/下箭头.png"></div>
    </div>
</template>

<style scoped>
    .select {
        display: flex;
        font-size: 13px;
        justify-content: space-around;
    }
    
    .select div {
        display: flex;
        align-items: center;
    }
</style>

