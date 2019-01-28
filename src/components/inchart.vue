<template>
  <ve-pie :data="{columns: ['name', 'cost' ],
  rows: [
            { 'name': 'salary', 'cost': incomet.salary },
            { 'name': 'freelance', 'cost': incomet.freelance },

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
        incomet (){
            
            return store.state.incomet;
        }
    },
        created(){
        store.dispatch('getincome');
        store.dispatch('getincomet');
        
    }
  }
</script>