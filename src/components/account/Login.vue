<template>
  <div class="login">
  	LOGIN
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  created: function() {
    const that = this
    axios.get('/users/search')
    .then(function(response) {
      console.log(response.data[0])
    }).catch(function(error) {
      console.log(error)
    })
  }
}
</script>

<style scoped>
	
</style>