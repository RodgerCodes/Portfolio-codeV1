<template>
  <v-card
    color="grey lighten-4"
    flat
    height="200px"
    tile
  >
    <v-toolbar>
      <v-img
       src="../../assets/cpy.png"
       height="40"
       max-width="75"
      
      ></v-img>
     
      <v-spacer></v-spacer>      
      <v-btn flat elevation="0.0"  to="/" exact>Home</v-btn>
      <v-btn elevation="0.0" to="/about">About Me</v-btn>
      <v-btn elevation="0.0" to="/projects" >Projects</v-btn>
      <v-btn elevation="0.0" to="/contact">Contact</v-btn>
      <v-btn elevation="0.0" to="/books">Books</v-btn>
    </v-toolbar>
  </v-card>
</template>
<script>
  export default {
    name: 'Header'
  }
</script>
