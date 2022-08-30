<script>
    export default {
        data(){
            return {
                programs: [
                    { id: 1, img: '../../img/program/item1-1.jpg', time: '9:30 - 14:30', name: 'Реєстрація', city: '.....' },
                    { id: 2, img: '../../img/program/item1-2.jpg', time: '15:00 - 17:00', name: 'Korridor', city: 'Stockholm, Sweden' },
                    { id: 3, img: '../../img/program/item1-3.jpg', time: '17:30 - 19:30', name: '1914', city: 'Lviv, Ukraine' },
                    { id: 4, img: '../../img/program/item1-4.jpg', time: '20:00 - 22:00', name: 'Motanka', city: 'Lutsk, Ukraine' },
                    { id: 5, img: '../../img/program/item1-5.jpg', time: '22:00-00:00', name: 'Svarog', city: 'Lviv, Ukraine' },
                ],
                
            }
            
        },
    }
</script>

<template>
    <div class="program">
        <div class="program-block" v-for="program in programs" :key="program.id">
            <p class="program-dlock-time"> {{ program.time }}</p>
            <img class="program-block-img" :src="program.img" alt="">
            <div class="program-block-title">
                <h2 class="txt-uppercase">{{ program.name }}</h2>
                <p>{{ program.city }}</p>
            </div>
        </div>
    </div>
</template>

<style>
    .program{
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .program-dlock-time{
        font-weight: bold;
        font-size: larger;
        padding: 0 20px 0 20px;
        width: calc(100% / 3);
    }
    .program-block{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 25vh;
        padding: 30px 0 30px 0;
        width: 80%;
    }
    .program-block-img{
        width: 100px;
        height: 100px;
        border-radius: 70%;
    }
    
    .program-block-title{
        display: flex;
        flex-direction: column;
        width: calc(100% / 3);
        padding: 0 20px 0 20px;
    }
    .program-block-title *{
        padding: 5px 0 5px 0;
    }
    
    @media (min-width: 760px) {
        .program-block{
            width: 50%;
        }
    }
</style>