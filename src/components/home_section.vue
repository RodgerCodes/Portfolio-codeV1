<template>
<div class=" items grid" >
    <div class="content ">
      <h1>Hello 😊,</h1>
       <h1><span>I'm</span> Rodger</h1>
     <h2 >A fullstack web <span>developer</span></h2>
     <router-link to="/#about"  class="link">About me</router-link>
    </div>
   <div >
      <img class ="image" :src="dev"  alt="programmer"/>      
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
    },
    data(){
        return{
            dev:require("../assets/dev.png")
        }
    }
    
    
}
</script>

<style >


.content{
    grid-column: 1/11;
}

.content h1{
    font-size: 1.6em;
}
.content span{
    color:rgb(4, 128, 211) ;
}

.content h2{
    margin-bottom: 20px;
    font-size: 1.2em;
}

.items {
    height: 60vh;
    position: relative;
}

.items img {
    grid-column: 11/13;
    width: 600%;
    grid-row: 1;
}

.link {
    color: #fff;
    background: rgb(4, 128, 211);
    padding: 10px 8px;
    font-weight: bold;
    border-radius: 5px;
}


.contact a:hover{
    transform: scale(1.2);
}

@media Screen and (min-width:620px){
  .items img{
    grid-column: 10/6;
    width:1000%;
  }

  body{
      font-size: 17px;
  }

  .content{
      grid-column: 2/8;
      margin-top: 100px;
  }

  .items{
      height: 75vh;
  }
}

@media Screen and (min-width: 960px){
     body{
         font-size: 20px;
     }

     .content{
         margin-top: 120px;
     }
}

 

</style>