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
        <div class="header-nav">list</div>
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
      headerstyle:{
        backgroundImage: "url("+require("@/assets/images/headerbackground.jpg")+")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }
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

  @media screen and (max-width: 420px){
    .header{
      width: 80%;
      height: 200px;
      margin: 15px auto;
      background-color: #ccc;
    }
  }
</style>