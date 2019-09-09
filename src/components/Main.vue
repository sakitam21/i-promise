<template>
  <div class="main">
    {{msg}}
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'Main',
  data: function() {
    return {
      msg:"Hello main"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>