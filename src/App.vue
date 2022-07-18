<script>
import Item from './components/Item.vue';

  export default {
    data() {
        return {
            showMenu: false,
        };
    },
    methods: {
        menuBtn() {
            this.showMenu = !this.showMenu;
        },

    },
     components: { Item }
}

</script>

<template>
  <div class="wrap">
    <header>
      <button @click="menuBtn" class="menu-o-btn menu-show"></button>
      <div class="logo text-decor-logo">Evlina Vegas</div>
      <div v-if="showMenu" class="menu">
        <a href="" class="menu-o-btn menu-o-btn-link">
          <span :="!showMenu" class="menu-open-span"></span>
        </a>
        <ul class="menu-o-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#progect">About us</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </div>
      <div :="showMenu" v-else class="menu menu-close">
        <a href="" class="menu-o-btn menu-o-btn-link">
          <span class="menu-close-span"></span>
        </a>
      </div>
      <div class="hd-item">
        <div class="hd-item-img _anim-items"></div>
        <div class="hd-item-txt">
          <h1 class="text-decor-logo">evelina vegas</h1>
          <p class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quisquam quis labore excepturi reiciendis
          iusto maiores</p>
        </div>
      </div>
      <div class=""></div>
    </header>
    <main>
      <h2>My progects</h2>
      <div class="row" id="progect">
        <Item/>
      </div>
      <div class="">

      </div>
    </main>
    <footer>
      <div class="footer-container">
        <a href="#" class="icon"><i class="fab fa-telegram"></i></a>
        <a href="#" class="icon"><i class="fab fa-instagram"></i></a>
        <a href="#" class="icon "><i class="fas fa-at"></i></a>
      </div>
      <!-- <back-to-top bottom="50px" right="50px" width="50px" visibleoffset = " 300 ">
        <div class="btn-back-to-top">
          <i class="fas fa-chevron-up"></i>
        </div>
      </back-to-top> -->
    </footer>
    
  </div>
</template>

<style>
    * {
      padding: 0;
      margin: 0;
      font-family: 'Roboto', sans-serif;
      box-sizing: border-box;
    }
    
    .logo{
      position: absolute;
      top: 10px;
      left: 10px;
      z-index: 1;
      font-size: 1.3em ;
    }
    .text-decor-logo{
      text-transform: uppercase;
      text-align: center;
      height: 1.3em;      
      color: #fff;
    }
    .menu-show {
      z-index: 1;
      opacity: 0;
      background-color: #fff;
    }
  
    .menu {
      padding: 15px;
      position: absolute;
      width: 100%;
      background-color: #1a1a1a;
      opacity: 0.5;
    }
  
    .menu-o-nav {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .menu-o-nav>li {
      list-style: none;
      padding: 5px 0 5px 0;
    }
  
    a {
      text-decoration: none;
      color: #fff;
    }
  
    .menu-o-btn {
      display: block;
      position: absolute;
      right: 10px;
      top: 10px;
      border: none;
      width: 30px;
      height: 30px;
    }
  
    .menu-open-span,
    .menu-close-span,
    .menu-open-span:before,
    .menu-close-span:before,
    .menu-close-span::after {
      position: absolute;
      top: 50%;
      margin-top: -1.5px;
      left: 50%;
      margin-left: -10px;
      width: 20px;
      height: 3px;
      background: #fff;
      transition: 0.3s;
    }
  
    .menu-open-span {
      transform: rotate(45deg);
    }
  
    .menu-open-span:before {
      content: '';
      transform: rotate(90deg);
    }
  
    .menu-close-span:before,
    .menu-close-span::after {
      content: '';
    }
  
    .menu-close-span:before {
      top: -4px;
    }
  
    .menu-close-span::after {
      top: 7px;
    }
  
    .menu-close {
      height: 20px;
    }
  
    header {
      background-image: url(./img/bd-header.jpg);
      background-attachment: fixed;
      height: 100vh;
    }
  
    .hd-item {
      padding: 20px 20% 20px 20%;
      display: flex;
      height: 100vh;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    
    
    .hd-item-img {
      background-image: url(./img/avatar.jpg);
      background-size: cover;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      box-shadow: 0px 0px 37px 23px #111;
      animation-duration: 0.5s;
      animation-name: hd-item-img;
    }
    @keyframes hd-item-img{
      0%{
        transform: translate(0px, -300px); 
      } 
      100%{
        transform: translate(0px, 0px); 
      } 
    }
    .hd-item-txt{
      padding-top: 30px;
    }
    h1{
      text-shadow: #1a1a1a;
      animation-duration: 2s;
      animation-name: h1;
    }
    @keyframes h1{
      0%{
        opacity: 0; 
      } 
      100%{
        opacity: 1; 
      } 
    }
    .hd-item p {
      color: white;
      text-align: center;
      font-size: 1.1em;
      animation-duration: 4s;
      animation-name: hd-item-p;
    }
    @keyframes hd-item-p{
      0%{
        opacity: 0; 
      } 
      100%{
        opacity: 1; 
      } 
    }
    main > h2{
      color: #1a1a1a;
      font-weight: bold;
      font-size: 1.5em;
      padding: 20px;
    }
    main > h2::after{
      content: "";
      display: block;
      background-color: red;
      width: 100%;
      height: 2px;
      margin-top: 10px;
    }
    .row {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
  
    footer{
      width: 100%;
      background-color: #1a1a1a;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 200px;
      
    }
    .footer-container{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon{
      width: 30px;
      height: 30px;
      background-size: cover;
      margin: 0px 10px 0 10px;
    }
    .icon > i{
      font-size: 30px;
    }

    .icon > i:hover{
      color: red;
      transition: 0.4s;
    }    

    .back-to-top{
      border-radius: 50%;
      background-color: #1a1a1a;
      height: 44px;
      width: 44px;
      text-align: center;
      cursor: pointer;
    }
    .back-to-top > i{
      font-size: 2em;
      padding-top: 5px;
      color: red;
    }
    @media (max-width: 760px) {
      
    }
    .fa-chevron-up{
      padding: 4px 5px;
      color: #fff;
    }
    .btn-back-to-top {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      font-size: 22px;
      line-height: 22px;
      color: #fff;
      background-color: red;
      border-radius: 50%;
    }
</style>