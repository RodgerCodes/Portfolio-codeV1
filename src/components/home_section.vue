<template>
<div class="container items">
    <div class="content">
      <h1>Hello 😊,</h1>
       <h1>My name is <Strong class="name">Rodger</Strong></h1>
     <h2 style="font-size=30px">A fullstack web developer</h2>
     <router-link to="/#about" class="link">About me</router-link>
    </div>
   <div >
      <img class ="image" src ="../assets/program.jpg" width="600rem"/>      
   </div>
</div>
</template>

<script>

export default {
    name:"Homesection",
    
}
</script>

<style >
 body{
     position: relative;
 }
.name {
    color:#2196f3 ;
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

.text-2 {
    font-size: 20px;
}
 .link {
     position: absolute;
     top: 7.2rem;
 }

.content a{
    text-decoration: none;
    background: #2196f3;
    color: #fff;
    font-size: 20px;
    padding: 10px 10px;  
    border-radius: 5%;
}

.items {
    display:flex;
    justify-content:space-between;
    height: 85vh;
}


</style>