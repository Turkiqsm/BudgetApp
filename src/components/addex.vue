<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn class="btn"  slot="activator" color="primary" small dark><v-icon>add</v-icon></v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Add your daily payment</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model.number="newexp.name" label="Day" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model.number="newexp.food" label="Food" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model.number="newexp.car" label="Car" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model.number="newexp.tech" label="Tech" required></v-text-field>
              </v-flex>

            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat v-on:click="addexp" @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import store from '../store/index.js'

  export default {
      
      name: "addex",

    data: () => ({
      dialog: false,
      newexp : {
        name: 0,
        food: 0,
        car: 0,
        tech: 0,
      }
    }),
    methods:{
    addexp(){
        //adding the elemnt
        store.dispatch('addexp', this.newexp)
        //clearing the text field
        this.newexp.name = 0
        this.newexp.food = 0
        this.newexp.car = 0
        this.newexp.tech = 0


        }
}
  }
</script>
<style >

.btn :hover{
transform: scale(1.2, 1.2);
} 

</style>
