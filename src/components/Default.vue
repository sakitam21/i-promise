<template>
  <div class="default">

  	<div class="slider">
  	  <el-carousel height="600px">
        <el-carousel-item v-for="(item,index) in images" :key="index">
          <img :src="item.url"/>
        </el-carousel-item>
  	  </el-carousel>
  	</div>

  	<div class="container">
  		<section class="content">
  			<div class="leading-title">
  				<h3 class="chronicle">NEW & UPCOMING</h3>
  			</div>
  			<div class="body">
  				<el-row :gutter="10">
  					<el-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4"  v-for="(item,index) in list_img1" :key="index">
  						<div class="grid-content">
  							<img :src="item.url" style="display: inline-block;max-width:100%;">
  						</div>
  					</el-col>
                </el-row>
  			</div>
  		</section>
  		<section class="content">
  			<div class="leading-title">
  				<h3 class="chronicle">BESTSELLERS</h3>
  			</div>
  			<div class="body">
  				<el-row :gutter="10">
  					<el-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4"  v-for="(item,index) in list_img2" :key="index">
  						<div class="grid-content">
  							<img :src="item.url" style="display: inline-block;max-width:100%;">
  						</div>
  					</el-col>
                </el-row>
  			</div>
  		</section>
  		<section class="content">
  			<div class="leading-title">
  				<h3 class="chronicle">OUR RECOMMENDATIONS FOR YOU</h3>
  			</div>
  			<div class="body">
  				<el-row :gutter="10">
  					<el-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4"  v-for="(item,index) in list_img3" :key="index">
  						<div class="grid-content">
  							<img :src="item.url" style="display: inline-block;max-width:100%;">
  						</div>
  					</el-col>
                </el-row>
  			</div>
  		</section>

  		<section class="links-content">
  			<div class="leading-title">
  				<h3 class="chronicle">NEWS</h3>
  			</div>
  			<div class="links-body">
  				<el-row :gutter="10">
  					<el-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4"  v-for="(item,index) in links_img" :key="index">
  						<div class="grid-content">
  							<img :src="item.url" style="display: inline-block;max-width: 100%;">
  						</div>
  					</el-col>
                </el-row>
  			</div>
  		</section>
  		<section class="blog-content">
  			<div class="leading-title">
  				<h3 class="chronicle">THE LATEST FROM PLANET TASCHEN</h3>
  			</div>
  			<div class="blog-body">
  				<el-row :gutter="10">
  					<el-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4"  v-for="(item,index) in blog_img" :key="index">
  						<div class="grid-content">
  							<img :src="item.url" style="display: inline-block;max-width: 100%;">
  						</div>
  					</el-col>
                </el-row>
  			</div>
  		</section>
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
			],

			list_img1:[
				{url:require('@/assets/images/4.png')},
				{url:require('@/assets/images/5.png')},
				{url:require('@/assets/images/6.png')},
				{url:require('@/assets/images/7.png')}
			],
			list_img2:[
				{url:require('@/assets/images/8.png')},
				{url:require('@/assets/images/9.png')},
				{url:require('@/assets/images/10.png')},
				{url:require('@/assets/images/11.png')}
			],
			list_img3:[
				{url:require('@/assets/images/12.png')},
				{url:require('@/assets/images/13.png')},
				{url:require('@/assets/images/14.png')},
				{url:require('@/assets/images/15.png')}
			],

			links_img:[
				{url:require('@/assets/images/16.jpg')},
				{url:require('@/assets/images/17.jpg')},
				{url:require('@/assets/images/18.jpg')},
				{url:require('@/assets/images/19.jpg')}
			],

			blog_img:[
				{url:require('@/assets/images/20.jpg')},
				{url:require('@/assets/images/21.jpg')},
				{url:require('@/assets/images/22.jpg')},
				{url:require('@/assets/images/23.jpg')}
			]
		}
	}
}
</script>

<style scoped>
.container{
	width: 80%;
	height: 1600px;
	margin: 20px auto;
}

.content{
	width: 100%;
	height: 320px;
	padding: 25px 0 50px 0;
	color: #ccc;
}

.links-content,.blog-content{
	width: 100%;
	height: 280px;
	padding: 25px 0 50px 0;
	color: #ccc;
}

.leading-title{
	width: 100%;
	height: 22px;
	line-height: 20px;
	border-bottom: 1px solid #000;
}

.el-col{
    border-radius: 4px;
}
.grid-content{
    border-radius: 4px;
    height: 280px;
    background-color: #EAEAEA;
    margin-top: 20px;
    text-align: center;
}

.list-content{
	border-radius: 4px;
	height: 200px;
	background-color: #EAEAEA;
	margin-top: 20px;
}
</style>