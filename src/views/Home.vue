<template>
  <div class="home page ">
    <HelloWorld />
     <exchart/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import exchart from '../components/exchart.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    exchart
  }
}
</script>
<style scoped>
.home{
  padding-bottom: 100px;
}
</style>
