<script scoped>

export default {
    data(){
        return {
            items: [
                {Id: 1 , img: '../../img/item1.jpg'},
                {Id: 2 , img: '../../img/item2.jpg'},
                {Id: 3 , img: '../../img/item3.jpg'},
                {Id: 4 , img: '../../img/item4.jpg'},
                {Id: 5 , img: '../../img/item5.jpg'},
                {Id: 6 , img: '../../img/item6.jpg'},
                {Id: 7 , img: '../../img/item7.jpg'},
                {Id: 8 , img: '../../img/item8.jpg'},
            ],
        }            
    },
}

</script>

<template scoped>
  <div class="gallery" >
    <a v-for="item in items" :href="item.img" data-fancybox="gallery">
        <img  class="anim-gallery _anim-items" :key="item.Id" :src="item.img" alt="" >
    </a>
  </div>
    
</template>

<style>
    .gallery{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        padding: 30px 0 30px 0;
    }
    .gallery a{
        width: 25%;
        cursor: pointer;
        min-width: 300px;
        height: 250px;
    }
    .gallery  img{
        width: 100%;
        height: 100%;
        transition: 0.5s;
    }
    .gallery  img:hover{
        opacity: 0.5;
    }
    .anim-gallery{
        transform: translate(1000%, 0px);
    }
    .anim-gallery._active{
        transform: translate(0px, 0px);
        transition: 1s;
    }
    .gallery-show{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
     }
    .gallery-show-img{
        width: 600px;
        height: 500px;
    }
    .next, .prev{
        display: block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: white;
        opacity: 0.5;
        color: #1a1a1a;
        position: absolute;
        content: "";
    }
    .next{
        right: 180px;
    }
    .prev{
        left: 180px;
    }
</style>