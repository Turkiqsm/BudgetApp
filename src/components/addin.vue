<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn class="btn" slot="activator" color="primary"  small dark><v-icon>add</v-icon></v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Add your daily payment</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model.number="newincome.name" label="month" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field  v-model.number="newincome.salary" label="salary" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field  v-model.number="newincome.freelance" label="freelance" required></v-text-field>
              </v-flex>


            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat v-on:click="addincome" @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import store from '../store/index.js'

  export default {
      name: "addin",

    data: () => ({
      dialog: false,
      newincome:{
          name:0,
          salary:0,
          freelance:0
      }
    }),
    methods:{
        addincome(){
            //adding the elemnt
            store.dispatch('addincome', this.newincome)
            //clearing the text field
            this.newincome.salary = 0
            this.newincome.name = 0
            this.newincome.freelance = 0


            }
    }
  }
</script>
<style scoped>
.btn :hover{
transform: scale(1.2, 1.2);
} 
</style>
