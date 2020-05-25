<template>
  <div id="app" class="app">
    <Header/>
    
    <router-view/>
 
  </div>
  
</template>

<script>
import Header from './components/layouts/Header';


export default {
  name:'App',
  components: {
     Header,
  },
}
</script>

<style>
html {
  scroll-behavior:smooth;
  transition:all 1s ease;
}
body {
  overflow: hidden;
}
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4d4d4d;
}

@media Screen and (max-width:1300px){
    .content h1 {
      font-size: 20px;
    }

    
    .image {
      width: 25rem;
      margin: 20px 20px;
    }

    .about-info .extra-info h2 {
      top:20% !important;
    }

     .project-1, .project-2, .project-3, .project-4{
       left:8% !important ;
       align-items: center;
     }
}
 
 /* ipad pro display */
@media Screen and (max-width:1050px){

     .items {
       height: 100vh !important;
     }

     .about {
       height: 100vh !important;
     }

     .project {
       height: 100vh !important;
     }

     .contact-info {
      height: 100vh !important;
      margin: 10% 0;
     }

     .info {
       top: 40% !important;
     }

     .about-info img {
       top: 20% !important;
     }
}  

@media screen and (height:1366px){
  .items {
     height: 50vh !important;
  }
  .tech{
    margin: 10% 0 0 0 ;
  }

  .about-info .extra-info h2{
    top: 10% !important;
  }

  #about {
    height: 60vh !important;
  }

  .project {
    height: 50vh !important;
  }

  .info {
    top: 20% !important;
  }
}

@media Screen and (max-width:1000px ){
  .svg {
    display: block;
  }

  .links {
    display: none;
    pointer-events: none;
  }

  .stack {
    margin: 80px 0;
  }
  .project {
   height: 100vh;
   margin: 5rem 0;
  }
}

@media Screen and (max-width:900px) {
  .image {
    display: none;
  }

  .content {
   left: 50% !important;
   transform: translateX(-50%);
   top: 2rem !important;
  }
  
  .contact-info{
    top:30rem ;
    height: 150vh !important;
  }

  .info{
    top: 30% !important;
  }
  
  .icons {
    position: relative;
    top: 38rem;
  }
  
}

@media Screen and (max-width:780px){
  .items {
    height: 70vh !important;
  }
  .about {
    height: 100vh !important;
  }
  
  .project {
    height: 100vh !important;
    margin: 20px 0;
  }

  .about-info .extra-info h2 {
    top:28rem !important;
    margin: 30px;
  }

  .tech {
    position: absolute;
    top: 120% !important;
    left: 50%;
    transform: translateX(-50%);
  }

  .stack{
    margin: 10px 0;

  }

  .stack > div {
    margin: 0 10px;
  }

  .project {
    position: relative;
    height: 200vh !important;
    top: 22rem;
    align-items: center;
    margin: 40px 0  0 0 ;
  }

  .project-1, .project-2, .project-3, .project-4 {
    width: 400px ;
    margin: 10px 10px 5px 10px;
  }



   .icons{
     top:53.5rem;
   }

   .about-info img {
     margin:0px 5px !important;
     position: absolute;
     left: 50%;
     top: 20%;
     transform: translateX(-50%);
   }

   .contact-info{
     top: 20rem;
   }

}

@media Screen and (max-width:600px){
  .stack {
      display:grid  !important;
      grid-template-columns: repeat(2, 1fr) ;
    }

  .project{
    top: 35rem;
  }

  .contact-info{
    top: 30rem;
  }

  .info{
    top: 23% !important;
  }

}

@media Screen and (max-width:500px){
    .project-1, .project-2, .project-3, .project-4 {
      width: 350px !important;
    }

    .project-info a  {
      margin: 0 !important;
    }

    .tech{
      top: 120%;
    }
}

@media Screen and (max-width:400px) {
   .content h1 {
     font-size:25px !important;
   }

   .link{
     top:6.2rem !important;
   }
   
   .about-info img {
     top: 10% !important;
   }

   .tech{
     top: 130% !important;
   }

   .about-info .extra-info h2 {
     top: 23rem !important;
     text-align: center;
   }

   .content a {
     font-size: 16px !important;
     padding: 10px 5px !important;
   }

    .project {
      top: 40rem ;
      left: 5% !important;
      height: 200vh !important;
    }

    .project-1 img {
     margin: 0 5rem !important;
    }

     .project-2 img {
       margin:0 5rem !important;
     }

      .project-info a {
        margin: 0  !important;
      }

     .contact-info{
       top: 35rem;
       height:200vh !important;
     }

     .info {
       top: 25% !important; 
     }

     .icons {
       top: 50rem !important;       
     }

     .project-1, .project-2, .project-3, .project-4 {
       width: 300px !important;
       margin: 0 20px;
     }
}
</style>
