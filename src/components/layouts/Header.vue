<template>
  <v-card
    color="#0A0B5B "
    flat
    height="150px"
    tile
    class="header-main"
  >
    <v-toolbar class="header" color="#0A0B5B">
      <v-img
       src="../../assets/logo.png"
       height="50"
       max-width="155"
      to="/"
      ><router-link to="/"></router-link></v-img>
     
      <v-spacer></v-spacer>  
      <div class="links" id="links">
        <router-link to="/" >Home</router-link>
       <router-link to="/#about">About</router-link>
       <router-link to="/#project" >Projects</router-link>
       <router-link to="/#contact" >Contact</router-link>
        </div>   
        <div class="svg">
          <!-- <a href="#" @click="opensidebar"> -->
          <svg width="30" height="30" @click="opensidebar">
         <path d="M0,5 25,5" stroke="#fff" stroke-width="4" />
         <path d="M0,14 20,14" stroke="#fff" stroke-width="4" />
         <path d="M0,23 40,23" stroke="#fff" stroke-width="4" />
         </svg>
       <!-- </a> -->
       <div id="side-menu" class="side-nav">
         <a href="#" class="btn-close" @click="closesidebar">&times;</a>
         <router-link to="/" @click="closesidebar"><a @click="closesidebar">Home</a></router-link>
       <router-link to="/#about" ><a @click="closesidebar">About</a></router-link>
       <router-link to="/#project"><a @click="closesidebar">Projects</a></router-link>
       <router-link to="/#contact"><a @click="closesidebar">Contact</a></router-link>
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
        document.getElementById('side-menu').style.width = '170px';
        document.querySelector('.side-nav').style.zIndex = '100 !important';
      },
      closesidebar() {
        document.getElementById('side-menu').style.width = '0';
      }
    }
  }
</script>

<style >
.contact-btn a{
  padding: 10px 10px 5px 30px;
}
 .links {
    display: none;
   
 }

 .links a {
   text-decoration: none;
   justify-content: space-evenly;
   margin: 0 20px;
   font-weight: bold;
   font-size: 22px !important;
   color: #fff;;
 }

 .side-nav {
   height: 100vh;
   position: fixed;
   top: 0;
   right: 0;
   background: rgb(21, 21, 44);
   opacity: 1;
   overflow-x: hidden;
   padding: 30px 0 0 0;
   transition: 0.5s;
 }


 .side-nav a {
   padding: 5px 10px 5px 30px;
   text-decoration: none;
   font-size: 20px;
   color: #fff;
   display: block;
   transition: 0.3s;
 }


  .side-nav .btn-close {
    position: absolute;
    top: 0;
    left: 5px;
    font-size: 36px;
    margin-right: 50px;
  }
.svg{
  cursor: pointer;
}
  .header-main {
    width: 100vw !important;
  }

 @media Screen and (min-width:960px){
   .svg{
      display: none;
   }

   .links{
     display: inline-flex;
   }
 }


</style>