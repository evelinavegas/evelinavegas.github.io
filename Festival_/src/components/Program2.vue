<script scoped>
    export default {
        data(){
            return {
                programs: [
                    { id: 1, img: '../../img/program3/item3-1.jpg', time: '12:30 - 14:30', name: 'Assonance ', city: 'Paris, France' },
                    { id: 2, img: '../../img/program3/item3-2.jpg', time: '15:00 - 17:00', name: 'Louwave', city: 'Lviv, Ukraine' },
                    { id: 3, img: '../../img/program3/item3-3.jpg', time: '17:30 - 19:30', name: 'Sqeef ', city: 'Kyiv, Ukraine' },
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
                <h2>{{ program.name }}</h2>
                <p>{{ program.city }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .programs-wrap::after{
        height: 65vh;
        top: -100vh;
    }
</style>