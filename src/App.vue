

<template>

  <div id ="app">
  <div id ="header">
   <dive> Budget</dive><dive id="subhead">APP</dive>
    </div>
    <div id="nav">
      <v-tabs fixed-tabs        
          v-model="active"
            color="dark"
            slider-color="cyan">
          <v-tab to= "/" >
              Expenses
            </v-tab>
          <v-tab to="/about" >
              income
            </v-tab>
        </v-tabs>

    </div>
    <div>
      <transition         
        duration="300"
        mode="out-in" 
        leave-active-class="animated fadeOut" 
        enter-active-class="animated fadeIn">
       <router-view/>
      </transition>
    </div>
   
  </div>
</template>
<script>

export default {
  components:{
   
  }
}
</script>


<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.7.0";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#header{
font-size: 2em;
color: #ffffff;
background-color: #212121;
text-transform: uppercase;
text-align: center;
font-weight: 500;
height: 70px;
padding-top:20px; 

}
#subhead{
  font-weight: 100;
}
</style>
