<script>
import Navigation from './components/Navigation.vue';
import MainGallery from './components/MainGallery.vue';
import Program from './components/Program.vue';
import Program1 from './components/Program1.vue';
import Program2 from './components/Program2.vue';
import FooterBlockVue from './components/FooterBlock.vue';



export default {
  data() {
    return {
      days: [
        { id: 1, dayName: '21.10' },
        { id: 2, dayName: '22.10' },
        { id: 3, dayName: '23.10' },
      ],
      selected: '',
    }
  },
  methods: {

  },
  components: { Navigation, MainGallery, Program, Program1, Program2, FooterBlockVue }
}
</script>
  
<template>
    <header>
      <Navigation />
      <div class="header-title" id="tickets">
        <h1 class="_anim-items">Festival</h1>
        <a href="#" class="header-title-btn btn txt-uppercase _anim-items">квитки</a>
      </div>
    </header>


    <main class="bg-white">

      <div class="main-title">
        <p class="text-bold title-p-anim _anim-items">Ми продовжуємо наш ритуал створення, і запрошуємо вас долучитися до перевтілень у гущавині
          соснового лісу, до
          магічних ранків, до незабутніх ночей, і безкінечних танців.</p>
      </div>
      <div class="main-option-block" id="about-us">
        <p>12 гуртів</p>
        <p>4 сцени</p>
        <p>30 будиночків</p>
        <p>Кейтеринг</p>
      </div>
      <MainGallery />

      <div class="program-wrap" id="program">
        <h2 class="txt-uppercase">Афіша</h2>
        <select v-model="selected">
          <option disabled value="">Дата</option>
          <option>21.10</option>
          <option>22.10</option>
          <option>23.10</option>
        </select>
        <div class="programs-wrap" v-if="selected == 21.10 ">
          <Program />
        </div>
        <div class="programs-wrap" v-else-if="selected == 22.10">
          <Program1 />
        </div>
        <div class="programs-wrap" v-else-if="selected == 23.10">
          <Program2 />
        </div>
        <p v-else class="program-wrap-text _anim-items title-p-anim">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vitae dolore
          ex
          alias blanditiis. Alias,
          unde sequi ad, aut dolores optio laudantium nulla corrupti ex ducimus, accusamus modi inventore iure?
          Neque, eligendi! Molestiae impedit nulla asperiores tempora accusantium incidunt repellendus necessitatibus
          quo
          consequuntur soluta, obcaecati laboriosam numquam saepe temporibus suscipit corrupti commodi ab! Sed hic
          dignissimos sint error! Magni, dolor.
          Vel repellat esse rerum voluptas ut, iusto vero obcaecati. Accusantium debitis ullam dolorum suscipit quia aut
          iusto necessitatibus quasi? A quo doloribus aliquam in qui deserunt perferendis eum explicabo molestias.</p>
        <a href="" class="btn txt-uppercase"> Квитки</a>
      </div>

    </main>

    <footer class="bg-white">
      <h2 class="text-bold txt-uppercase">Партнери</h2>
      <FooterBlockVue />
      <div class="footer-sprite">
        <a href="#" class="icon"><i class="fab fa-telegram"></i></a>
        <a href="#" class="icon"><i class="fab fa-instagram"></i></a>
        <a href="#" class="icon"><i class="fas fa-at"></i></a>
      </div>
    </footer>
</template>

<style>
/* All */

* {
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  transition: 0.8s;
  scroll-behavior: smooth;
  box-sizing: border-box;
}
body{
  background-color: #1a1a1a;
}

.bg-white{
  background-color: #fff;
}
a {
  text-decoration: none;
  color: #fff;
}

header {
  background-image: url(../img/header.jpg);
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
}

.header-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

h1 {
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  color: #fff;
  font-size: 7vh;
  padding-bottom: 20px;
  text-shadow: 0px 0px 10px #1a1a1a;
  animation-name: title1;
  animation-duration: 1s;
}

@keyframes title1 {
  0%{
    top: -1500px;
    opacity: 0;
  } 
  100%{
    top: 0px;
    opacity: 1;

  } 
}
   
.txt-uppercase{
  text-transform: uppercase;

}
.btn{
  display: block;
  padding: 20px 30px 20px 30px;
  text-align: center;
  background-color: #1a1a1a;
  border: #111 2px solid;
  border-radius: 30px;
}
.header-title-btn {  
  animation-name: header-title-btn;
  animation-duration: 1s;
}
@keyframes header-title-btn{
  0%{
    transform: rotate(45deg) ;
  } 
  50%{
    transform: rotate(-45deg) ;
  }
  100%{
    transform: rotate(0deg);

  } 
}
.btn:hover {
  opacity: 1;
  background-color: #fff;
  color: #1a1a1a;
  box-shadow: 0 0 15px;

}

/*  Main  */
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-title {
  height: 50vh;
  text-align: center;
  display: flex;
  align-items: center;  
}

._active{
  transform: translate(0px, 0px);
  opacity: 1;
  transition: 1s;
}
.text-bold {
  font-size: 30px;
  font-weight: bold;
}

.main-option-block {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin: -15px;
  padding: 20px 0 20px 0;
}
.title-p-anim {
  opacity: 0;
  transform: translate(0px , 100%);
}
.title-p-anim._active{
  opacity: 1;
  transform: translate(0px , 0px);

}
.main-option-block>p {
  display: block;
  width: 100%;
  font-size: 30px;
  margin: 15px;
  text-align: center;
}

.main-option-block>p::after {
  content: "";
  display: block;
  width: 100%;
  margin-top: 10px;
  height: 3px;
  background-color: #1a1a1a;
}

.program-wrap {
  padding: 40px 0 40px 0;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.program-wrap> h2{
  font-size: 5vh;
}
/*.programs-wrap::after {
      position: relative;
      content: "";
      height: inherit;
      width: 3px;
      background-color: #1a1a1a;
      right: 61%;
      top: 0;
      z-index: -1;
      opacity: .7;
    }*/
.programs-wrap {
  display: flex;
  width: 100%;
  padding-bottom: 30px;
}

select {
  width: 200px;
  height: 60px;
  border: 1px #1a1a1a solid;
  border-radius: 30px;
  margin: 20px 0 20px 0;
  background-color: #1a1a1a;
  color: #fff;
  font-size: 3vh;
  font-weight: bold;
  text-align: center;
}
select:hover{
   background-color: #fff;
    color: #1a1a1a;
    box-shadow: 0px 0px 15px #1a1a1a;
}
option{
  background-color: #1a1a1a;
  color: #fff;
}
.program-wrap-text{
  padding: 30px;
  font-size: 25px;
}

footer{
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.footer-sprite {
  width: 100%;
  padding: 30px 0 30px;
  display: flex;
  align-items: center;
  background-color: #1a1a1a;
  justify-content: center;
}

.icon {
  width: 30px;
  height: 30px;
  background-size: cover;
  margin: 0px 10px 0 10px;
}

.icon>i {
  font-size: 30px;
  color: #fff;
}

.icon>i:hover {
  color: #1a1a1a;
  text-shadow:0px 0px 5px #fff;
  transition: 0.4s;
}
@media (min-width: 560px) {
  .main-option-block>p {
    width: calc(50% - 30px);
  }
}
@media (min-width: 900px) {
  .main-option-block>p {
    width: calc(25% - 30px);
  }
}
</style>
