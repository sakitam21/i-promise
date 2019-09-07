<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}

.el-menu-item{
  font-size: 12px;
  font-weight: bold;
  padding:0 14px 0 14px;
  border: none !important;
}

.el-menu{
  border: none !important;
}

.el-carousel__arrow{
  margin: 0 30px 0 30px;
  width: 48px;
  height: 48px;
  font-size: 24px !important;
  border-radius: 24px;
  background-color: #000;
  opacity: 0.8;
}
</style>
