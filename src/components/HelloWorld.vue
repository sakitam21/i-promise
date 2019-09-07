<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Username:{{username}}</h2>
    <h2>Password:{{password}}</h2>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username:"",
      password:""
    }
  },
  created: function() {
    const that=this
    axios.get('/users/search')
    .then(function(response) {
      console.log(response.data[0])
      that.username = response.data[0].username
      that.password = response.data[0].password
    }).catch(function(error) {
      console.log(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
