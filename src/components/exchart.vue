<template>
  <ve-pie :data="{columns: ['name', 'cost' ],
  rows: [
            { 'name': 'Food', 'cost': expt.food },
            { 'name': 'Car', 'cost': expt.car },
            { 'name': 'Tech', 'cost': expt.tech}

        ]}" 
    :settings="chartSettings" ></ve-pie>
</template>

<script>
import store from '../store/index.js'

  export default {
     data () {
      this.chartSettings = {
        hoverAnimation : false
      }
      return {
      }
    },
    computed:{
        expt (){
            
            return store.state.expt;
        }
    },
        created(){
        store.dispatch('getexp');
        store.dispatch('getexpt');
        
    }
  }
</script>