<template>
  <div class="footer-block" id="contacts">
    <img  v-for="item in items" :key="item.img" :src="item.img" alt="">
  </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                 {img: '../../img/footer/item1.jpg'},       
                 {img: '../../img/footer/item2.jpg'},       
                 {img: '../../img/footer/item3.jpg'}   
            ]
        }
    }
}
</script>

<style scoped>
    .footer-block{
        padding: 50px;
        width: 100%;
        height: 50vh;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }
    .footer-block > img{
        width: 150px;
        height: 150px;
    }
</style>