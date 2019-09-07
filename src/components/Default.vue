<template>
  <div class="default">

  	<div class="slider">
  	  <el-carousel indicator-position="outside" height="600px">
        <el-carousel-item v-for="(item,index) in images" :key="index">
          <img v-bind:src="item.url"/>
        </el-carousel-item>
  	  </el-carousel>
  	</div>

  </div>
</template>

<script>
export default {
	name: 'Default',
	data: function() {
		return {
			images:[
				{url:require('@/assets/images/1.jpg')},
				{url:require('@/assets/images/2.jpg')},
				{url:require('@/assets/images/3.jpg')}
			]
		}
	}
}
</script>

<style scoped>
	
</style>