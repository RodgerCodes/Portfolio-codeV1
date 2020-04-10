<template>
  <v-card
    color="grey lighten-4"
    flat
    height="200px"
    tile
    class="header-main"
  >
    <v-toolbar class="header" >
      <v-img
       src="../../assets/cpy.png"
       height="40"
       max-width="75"
      to="/"
      ><router-link to="/"></router-link></v-img>
     
      <v-spacer></v-spacer>  
      <div class="links">
        <router-link to="/" @click="closesidebar">Home</router-link>
       <router-link to="/#about" @click="closesidebar">About</router-link>
       <router-link to="/#project" @click="closesidebar">Projects</router-link>
       <router-link to="/#contact" @click="closesidebar">Contact</router-link>
        </div>   
        <div class="svg">
          <a href="#" @click="opensidebar">
           <svg width="30" height="30">
         <path d="M0,5 30,5" stroke="#000" stroke-width="5" />
         <path d="M0,14 30,14" stroke="#000" stroke-width="5" />
         <path d="M0,23 30,23" stroke="#000" stroke-width="5" />
       </svg>
       </a>
       <div id="side-menu" class="side-nav">
         <a href="#" class="btn-close" @click="closesidebar">&times;</a>
         <router-link to="/">Home</router-link>
       <router-link to="/#about" >About</router-link>
       <router-link to="/#project">Projects</router-link>
       <router-link to="/#contact">Contact</router-link>
       </div>
          </div> 
       
    </v-toolbar>
  </v-card>
</template>
<script>
  export default {
    name: 'Header',
    methods:{
      opensidebar(){
        document.getElementById('side-menu').style.width = '220px';
      },
      closesidebar() {
        document.getElementById('side-menu').style.width = '0';
      }
    }
  }
</script>

<style >
 .links {
    display: flex;
 }

 .links a {
   text-decoration: none;
   justify-content: space-evenly;
   margin: 0 20px;
   font-weight: bold;
   font-size: 22px !important;
   color:#000;
 }

 .side-nav {
   height: 900vh;
   width: 0;
   position: fixed;
   top: 0;
   right: 0;
   background: #111;
   opacity: 0.9;
   overflow-x: hidden;
   padding: 60px 0 0 0;
   transition: 0.5s;
 }

 .side-nav a {
   padding: 10px 10px 10px 30px;
   text-decoration: none;
   font-size: 20px;
   color: #ccc;
   display: block;
   transition: 0.3s;
 }

  .side-nav a:hover {
    color: #fff;
  }

  .side-nav .btn-close {
    position: absolute;
    top: 0;
    left: 15px;
    font-size: 36px;
    margin-right: 50px;
  }

  .svg{
    display: none;
  }

  .header-main {
    width: 100vw !important;
  }

</style>