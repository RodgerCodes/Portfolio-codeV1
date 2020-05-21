<template>
<div data-aos="fade-right" class="container items">
    <div class="content">
      <h1>Hello 😊,</h1>
       <h1>My name is Rodger</h1>
     <h2 style="font-size=30px">A fullstack web developer</h2>
     <router-link to="/#about" class="link"><a @click="closesidebar">About me</a></router-link>
    </div>
   <div >
      <img class ="image" src ="../assets/dev.png" width="600rem" alt="programmer"/>      
   </div>
</div>
</template>

<script>
import '../App';
import  './layouts/Header';
export default {
    name:"Homesection",
    methods:{
       closesidebar() {
        document.getElementById('side-menu').style.width = '0';
      }
    }
    
    
}
</script>

<style >

 body{
     position: relative;
 }

 .content {
     position: absolute;
     top: 5.5rem;
     left: 10%;
     position: relative;
 }

.content h1 {
    font-size: 30px ;
    letter-spacing: 2px;
}

 .link {
     position: absolute;
     top: 7.2rem;
     box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.61), 2px 2px 10px rgba(0, 0, 0, 0.589);
 }

 

.content a{
    text-decoration: none;
    background: #2196f3;
    color: #fff;
    font-size: 18px;
    padding: 10px 10px;  
    border-radius: 7%;
    transition: all 0.5s ease;
    font-weight: bold;
}

.content a:hover{
    transform: scale(1.1);
}

.items {
    display:flex;
    justify-content:space-between;
    height: 100vh;
   position: relative;
   top: 50% !important;
}

.items img {
    transition: all 0.5s ease;
}

.items img:hover{
  transform: scale(1.1);
}


</style>