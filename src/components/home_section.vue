<template>
<div class=" items grid" >
    <div class="content ">
      <h1>Hello there,</h1>
       <h1><span>I'm</span> Rodger</h1>
     <h2 >A fullstack web <span>developer</span>,</h2>
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
    grid-column: 1/13;
    font-family: 'Rubik Regular';
    margin-top:55px;
    z-index: 1;
}

.content h1{
    font-size: 1.7em;
}
.content span{
    color:rgb(4, 128, 211) ;
}

.content h2{
    margin-bottom:20px;
    font-size: 1.4em;
}

.items {
    height: 60vh;
    position: relative;
}

.items img{
    display: none;
}

.link {
    color: #fff;
    background: rgb(4, 128, 211);
    padding: 10px 8px;
    font-weight: bold;
    border-radius: 5px;
    margin-top: 10px;
}


.link:hover{
    transform: scale(1.2);
}


@media Screen and (min-width:420px){
    body{
        font-size: 18px;
    }
    .content{
        grid-column: 2/11;
    }
}

@media Screen and (min-width:500px){
   .items img{
       display: none;
       grid-row: 2;
   }

   .content{
       grid-column: 2/13;
       margin-top: 55px;
   }

   .content h2{
     font-size: 1.6em;
   }

   .content h1{
     font-size: 1.9em;
   }

}

@media Screen and (min-width:620px){
  .items img {
      display: block;
    grid-column: 10/6;
    width: 1000%;
    grid-row: 1;
    max-width: 700px;
    z-index: -1;
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
     
     .items img{
       width: 520%;
       margin-top: 50px;
     }

     .content{
         margin-top: 120px;
     }
}

 
@media Screen and (min-width: 1200px){

  .content h1{
     letter-spacing: 2px;
  }

  .content{
      grid-column: 2/7;
  }

  .content h2{
      letter-spacing: 2px;
  }

  .items img{
      grid-column: 6/9;
  }
}

@media Screen and (min-width:2000px){
    body{
        font-size: 29px;
    }

    .content{
        grid-column: 3/8;
    }

    .items{
        margin-top: 200px;
    }

    .items img{
        width:1500%;
    }
}

</style>