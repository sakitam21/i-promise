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
        <div class="common-nav-login">
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
            <li>Mall</li>
            <li>Contribution</li>
            <li>Forest</li>
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

    <div class="common-menu">
      <ul class="common-menu-list">
        <li v-for="(item,index) in menulists" :key="index">
          <router-link :to="{ name: 'menulist', params: { listid: index }}">
            {{item.infolist_name}}
          </router-link>
          <div class="divide" v-if="index>0"></div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import router from '@/router'
import axios from 'axios'
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
      searchbody:"",
      //menu list
      menulists:[],

    }
  },

  created: function(){
    const that = this
    //get infolist as menulist[]
    axios.get('/infolists/search')
    .then(function(response) {
      that.menulists = response.data
      console.log(that.menulists)
    }).catch(function(error) {
      console.log(error)
    })
    //get listcontents
  },

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
    font-weight: bold;
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

  .common-menu{
    width: 80%;
    /*height: 40px;*/
    line-height: 40px;
    text-align: center;
    margin: 10px auto;
    /*background-color: #ccc;*/
  }

  .common-menu a{
    color: #6CA6CD;
  }

  .common-menu ul li{
    display: inline-block;
    list-style: none;
    padding:0 10px 0 5px; 
    font-size: 14px;
    font-weight: bold;
    color: #6CA6CD;
  }

  .divide{
    display: inline-block;
    float: left;
    width: 3px;
    height: 20px;
    margin-right: 15px;
    margin-top: 10px;
    border-radius: 1px;
    background-color: #CCC;
  }

  @media screen and (max-width: 500px){
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
      width: 60%;
      height: 40px;
      margin-top: 130px;
      margin-right: 10px;
      line-height: 40px;
    }

    .header-search .header-logo{
      width: 30%;
      height: 40px;
      font-size: 12px;
      display: inline-block;
    }

    .header-search .header-input{
      width: 68%;
      height: 20px;
      margin-left: 2%;
      display: inline-block;
    }

    .header-search i{
      margin-top: 12px;
      margin-left: -20px;
      font-size: 18px;
    }

    .common-menu{
      width: 80%;
      height: 120px;
      line-height: 30px;
    }

    .divide{
      height: 16px;
      margin-top: 6px;
    }

  }
</style>