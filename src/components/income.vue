<template>
  <v-data-table
    :headers="headers"
    :items="income"
    class="elevation-1"
    hide-actions 
  >
  
    <template slot="items" slot-scope="props">
        <td>Month {{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.salary }}</td>
        <td class="text-xs-left">{{ props.item.freelance }}</td>
        <td class="text-xs-left">{{ props.item.salary + props.item.freelance }}</td>
     </template>
    <template slot="footer">
      <td :colspan="headers.length">
          <!-- <v-btn color="primary" fab small dark>
            <v-icon>add</v-icon>
          </v-btn> -->
          <addin/>
      </td>
    </template>
  </v-data-table>
  
</template>
<script>
import addin from '@/components/addin.vue'
import store from '../store/index.js'
  export default {
    components:{
      addin
    },
    data () {
      return {
        headers: [
          {
            text: 'Months ',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'Salary', value: 'salary' },
          { text: 'Freelance', value: 'freelance' },
          { text: 'total', value: 'total' }
                 ]
            }
        },

    computed:{
        income (){
            return store.state.income
        }
    },
    created(){
        store.dispatch('getincome');
    }
  }
</script>
