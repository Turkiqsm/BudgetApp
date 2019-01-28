<template>
  <div class="about page">
      <income/>
      <inchart/>
  </div>
</template>
<script>
import income from '@/components/income.vue'
import inchart from '../components/inchart.vue'

export default {
 name: 'about',
  components: {
    income,
    inchart
  }
}
</script>
