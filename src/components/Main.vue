<template>
  <div class="main">
    
    <!--common-nav-->
    <div class="common-nav">
      <div class="common-nav-left">
        <div class="location">
          <i class="el-icon-location-information"></i>
          location
        </div>
      </div>
      <div class="common-nav-right">
        <div class="login">
          <router-link :to="{name:'login'}">
            <i class="el-icon-user-solid"></i>
            login
          </router-link>
        </div>
      </div>
    </div>

    <!--header-->
    <header>
      <div class="header" :style="headerstyle">
        <div class="header-nav">
          <ul>
            <li>商城</li>
            <li>投稿箱</li>
            <li>种树</li>
          </ul>
        </div>
        <div class="header-search">
          <div class="header-logo">
            <div>i-Promise</div>
          </div>
          <div class="header-input">
            <input v-model="searchbody" placeholder="edit me">
          </div>
          <i class="el-icon-search"></i>
        </div>
      </div>
    </header>

  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'Main',
  data: function() {
    return {
      //header background
      headerstyle:{
        backgroundImage: "url("+require("@/assets/images/headerbackground.jpg")+")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      //search body
      searchbody:""

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .common-nav{
    width: auto;
    height: 30px;
    padding: 0 10% 0 10%;
    font-size: 14px;
    line-height: 30px;
    background-color: #6CA6CD;
  }

  .common-nav-left,.common-nav-right{
    display: inline-block;
  }

  .common-nav-left{
    float: left;
  }

  .common-nav-right{
    float: right;
  }

  .header{
    width: 80%;
    height: 460px;
    margin: 30px auto;
    background-color: #ccc;
  }

  .header .header-nav{
    padding: 20px 0 0 20px;
  }

  .header .header-nav ul li{
    display: inline;
    float: left;
    list-style: none;
    margin-left: 20px;
    color: #ccc;
  }

  .header .header-search{
    width: 360px;
    height: 120px;
    /*background-color: #ccc;*/
    margin-top: 320px;
    float: right;
    margin-right: 40px;
    line-height: 120px;
    text-align: center;
  }

  .header-search .header-logo{
    width: 30%;
    height: 120px;
    font-size: 24px;
    font-weight: bold;
    color: #6CA6CD;
    float: left;
  }

  .header-search .header-input{
    width: 60%;
    height: 30px;
    float: left;
    margin-left: 10px;
  }

  .header-search .header-input input{
    width: 100%;
    height: 100%;
    border: 2px solid #6CA6CD;
    border-radius: 6px;
    font-size: 12px;
    font-weight: bold;
    color: #6CA6CD;
  }

  .header-search i{
    float: left;
    margin-top: 50px;
    margin-left: -26px;
    font-size: 22px;
    font-weight: bold;
    color: #6CA6CD;
  }

  @media screen and (max-width: 420px){
    .header{
      width: 90%;
      height: 200px;
      margin: 15px auto;
    }

    .header .header-nav{
      padding: 10px 0 0 0px;
    }

    .header .header-nav ul li{
      font-size: 12px;
      margin-left: 15px;
    }

    .header .header-search{
      width: 200px;
      height: 40px;
      margin-top: 140px;
      margin-right: 10px;
      line-height: 40px;
    }

    .header-search .header-logo{
      width: 26%;
      height: 40px;
      font-size: 12px;
    }

    .header-search .header-input{
      width: 68%;
      height: 20px;
      margin-left: 6px;
    }

    .header-search i{
      margin-top: 12px;
      margin-left: -20px;
      font-size: 18px;
    }

  }
</style>