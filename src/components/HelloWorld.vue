<template>
  <v-data-table
    :headers="headers"
    :items="exp"
    class="elevation-1"
    hide-actions 
    >
    <template slot="items" slot-scope="props">
      <td>Day {{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.food }}</td>
        <td class="text-xs-left">{{ props.item.car }}</td>
        <td class="text-xs-left">{{ props.item.tech }}</td>
        <td class="text-xs-left">{{ props.item.food + props.item.car + props.item.tech  }}</td>
     </template>
    <template slot="footer">
      <td :colspan="headers.length">

          <addex/>
      </td>
    </template>
  </v-data-table>
  
</template>
<script>
import addex from '@/components/addex.vue'
import store from '../store/index.js'
  export default {
    components:{
      addex
    },
    data () {
      return {
        headers: [
          {
            text: 'Days ',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'Food', value: 'food' },
          { text: 'Car', value: 'car' },
          { text: 'Tech', value: 'tech' },
          {text: 'Total', value: 'total'}
        ],
        
      }
    },
    computed:{
        exp (){
            return store.state.exp
        }
    },
    created(){
        store.dispatch('getexp');
    }
  }
</script>
