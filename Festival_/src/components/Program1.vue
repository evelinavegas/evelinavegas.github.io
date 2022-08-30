<script scoped>
    export default {
        data(){
            return {
                programs: [
                    { id: 1, img: '../../img/program2/item2-1.jpg', time: '9:30 - 14:30', name: 'Technobotanica', city: 'Kyiv, Ukraine' },
                    { id: 2, img: '../../img/program2/item2-2.jpg', time: '15:00 - 17:00', name: 'Derrikc & Tonika ', city: 'Lviv, Ukraine' },
                    { id: 3, img: '../../img/program2/item2-3.jpg', time: '17:30 - 19:30', name: 'Mavka', city: 'Lviv, Ukraine' },
                    { id: 4, img: '../../img/program2/item2-4.jpg', time: '20:00 - 22:00', name: 'Trøath', city: 'Lutsk, Ukraine' },
                    { id: 5, img: '../../img/program2/item2-5.jpg', time: '22:00-00:00', name: 'Sqeef', city: ' (Kyiv, Ukraine)' },
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