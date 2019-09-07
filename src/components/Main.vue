<template>
  <div class="main">

    <div class="border-left"></div>
    <div class="border-right"></div>
    <header>
      <div class="header-nav">
        <div class="header-nav-left">
          <ul class="header-nav-list">
            <li><i class="el-icon-s-flag" style="color: red;font-size: 16px;"></i></li>
            <li>BESTSELLERS</li>
            <li>CONTACT</li>
            <li>NEWSLETTER</li>
          </ul>
        </div>
        <div class="header-nav-right" v-on:click="tologin">
          <span>LOGIN</span>
          <i class="el-icon-s-custom"></i>
        </div>
      </div>
      <div class="header-menu">
        <div class="header-logo">
          <h1>TASCHEN</h1>
        </div>
        <div class="menu-display">
        <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" background-color="#000" text-color="#ccc" active-text-color="#fff" @select="handleSelect">
          <el-menu-item index="1">BOOKS</el-menu-item>
          <el-menu-item index="2">LIMITED EDITIONS</el-menu-item>
          <el-menu-item index="3">PRINT EDITIONS</el-menu-item>
          <el-menu-item index="4">STORES</el-menu-item>
          <el-menu-item index="5">INSPIRATION</el-menu-item>
          <el-menu-item index="6">PLANET TASCHEN</el-menu-item>
        </el-menu>
        <div class="header-menu-right">
          <i class="el-icon-shopping-cart-1"></i>
          <i class="el-icon-search"></i>
        </div>
        </div>
      </div>
    </header>

    <div class="wrapper">
      <div class="wrapper-content">
        <router-view></router-view>
      </div>
    </div>

    <footer>
      <div class="footer">Footer</div>
    </footer>
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'Main',
  data: function() {
    return {
      activeIndex: ''
    }
  },
  methods: {
    handleSelect: function(key,keyPath) {
      console.log(key,keyPath)
    },

    tologin: function() {
      router.push({ name: 'Login'})
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  width: 100vw;
}

.border-left{
  position: fixed;
  top: 0;
  left: 0;
  width: 30px;
  height: 100vh;
  background-color: #000;
  opacity: 0.8;
  z-index: 600;
}

.border-right{
  position: fixed;
  top: 0;
  right: 0;
  width: 30px; 
  height: 100vh;
  background-color: #000;
  opacity: 0.8;
  z-index: 600;
}

.header-nav{
  width: 92%;
  height: 26px;
  padding: 0 4%;
  background-color: #f5f5f5;
  position: fixed;
  top: 0;
  z-index: 1000;
}

.header-nav-left{
  height: 26px;
  line-height: 26px;
  float: left;
}

.header-nav-left ul li{
  height: 26px;
  list-style: none;
  display: inline;
  float: left;
  font-size: 12px;
  margin-left: 15px;
}

.header-nav-right{
  height: 26px;
  float: right;
  font-size: 12px;
  line-height: 26px;
}

.header-nav-right .el-icon-s-custom{
  font-size: 16px;
}

.header-menu{
  width: 100%;
  height: 60px;
  padding: 0 30px 0 30px;
  position: fixed;
  top: 26px;
  z-index: 1000;
  background-color: #000;
}

.header-logo{
  margin-left: 30px;
  width: 180px;
  height: 60px;
  line-height: 60px;
  color: #fff;
  float: left;
}

.el-menu{
  width: 60%;
  height: 60px;
  float: left;
  font-size: 12px;
  color: #fff;
}

.menu-display{
  display: block;
}

.header-menu-right{
  width: 160px;
  height: 60px;
  float: right;
  color: #ccc;
  font-size: 26px;
  font-weight: bold;
  line-height: 60px;
}

.wrapper{
  font-size: 14px;
  padding-top: 86px;
  width: 100vw;
  height: 100%;
  background-color: #fff;
}


.wrapper .wrapper-content{
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.footer{
  background-color: #000;
  width: 100%;
  height: 60px;
  line-height: 60px;
  z-index: 1000;
  text-align: center;
  color: #EAEAEA;
  font-size: 18px;
  font-weight: bold;
}

@media screen and (max-width: 550px){

.menu-display{
  display: none;
}

.header-nav{
  display: none;
}

.header-menu{
  top: 0;
}

.wrapper{
  padding-top: 60px;
}

}
</style>