<template>
<div class="container items">
    <div class="content">
      <h1>Hello ✌, My name is Rodger</h1>
     <h2>A fullstack web developer</h2>
     <router-link to="/about" class="link">About me</router-link>
    </div>
   <div >
      <img src ="../assets/program.jpg" width="550rem"/>      
   </div>
</div>
</template>

<script>

export default {
    name:"Homesection",
    
}
</script>

<style scoped>
 body{
     position: relative;
 }

 .content {
     position: absolute;
     top: 6rem;
     left: 10%;
     position: relative;
     font-size:20px;
 }

.content h1 {
    font-size: 30px !important;
}
 .link {
     position: absolute;
     top: 5rem;
 }
a{
    text-decoration: none;
    background: #2196f3;
    color: #fff;
    font-size: 20px;
    padding: 15px 15px;  
    border-radius: 0.5%;
}

.items {
    display:flex;
    justify-content:space-between;
}
</style>