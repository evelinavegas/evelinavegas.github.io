<script scoped>

export default {
    data(){
        return{
        items: [
            {
                itemId: 1,
                itemImg: '../../img/item1.jpg',
                itemH: 'Tattoo salon',
                itemP: 'Lorem, ipsum dolor sit amet'
            },
            {
                itemId: 2,
                itemImg: '../../img/item2.jpg',
                itemH: 'Lorem',
                itemP: 'Lorem, ipsum dolor sit amet'
            },
            {
                itemId: 3,
                itemImg: '',
                itemH: 'Loren ipsun',
                itemP: 'Lorem, ipsum dolor sit amet'
            }
        ]
        }
    },
    
}
</script>
<template scoped>
    <div class="item-wrap _anim-items" v-for="item in items" :key="item.itemId">
        <a href="#">
            <div class="item" :style="{backgroundImage: 'url('+ item.itemImg +')'}">
                <div class="item-text-block">
                    <h2> {{ item.itemH }} </h2>
                    <p> {{ item.itemP }} </p>
                </div>
            </div>
        </a>
    </div>
</template>
<style scoped>
.item-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2% 0 5% 0;
    opacity: 0;
}
._active{
      transform: translate(0px, 0px);
      opacity: 1;
      transition: 1s;
    }
.item {
    width: 50%;
    width: 200px;
    height: 200px;
    margin: 15px;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin-right: 30px;
    background-position: center;
    
}
.item-text-block{
    display: none;
}

.item:hover > .item-text-block{
    display: block;
    text-align: center;
    padding: 0 2px 0 2px;
    background-color: #1a1a1a;
    color:#fff;
}
.item:hover {
    box-shadow: 0px 0px 41px 6px red;
    transition: 0.4s;
}
</style>

