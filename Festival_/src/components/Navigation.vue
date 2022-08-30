<script>
    export default {
         data() {
          return {
              showMenu: false,
          };
      },
      methods: {
          menuBtn() {
              this.showMenu = !this.showMenu;
          }

      },
    }
</script>
<template>
  <button @click="menuBtn" class="menu-o-btn menu-show"></button>
    <div class="logo text-decor-logo"></div>
    <div v-if="showMenu" class="menu">
      <a href="" class="menu-o-btn menu-o-btn-link">
        <span :="!showMenu" class="menu-open-span"></span>
      </a>
      <ul class="menu-o-nav">
        <li><a href="#tickets" >Квитки</a></li>
        <li><a href="#about-us">Про нас</a></li>
        <li><a href="#program" >Афіша</a></li>
        <li><a href="#contacts">Контакти</a></li>
      </ul>
    </div>
    <div :="showMenu" v-else class="menu menu-close">
      <a href="" class="menu-o-btn menu-o-btn-link">
        <span class="menu-close-span"></span>
      </a>
    </div>
</template>


<style>
    .menu-show {
      z-index: 1;
      opacity: 0;
      background-color: #fff;
    }
  
    .menu {
      padding: 20px;
      position: absolute;
      width: 100%;
    }
  
    .menu-o-nav {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .menu-o-nav>li {
      list-style: none;
      padding: 10px 0 10px 0;
      width: 100%;
      text-align: center;
    }
    .menu-o-nav>li:hover{
      text-shadow: 0px 0px 15px #fff;
      text-decoration: underline;
    } 
    .menu-o-btn {
      display: block;
      position: absolute;
      right: 10px;
      top: 5px;
      border: none;
      cursor: pointer;
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
</style>