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
  }
}
</script>

<style>
html {
  scroll-behavior:smooth;
  transition:all 0.5s;
}
body {
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@media Screen and (max-width:1300px){
    .content h1 {
      font-size: 20px;
    }

    
    .image {
      width: 25rem;
      margin: 20px 20px;
    }

    .about-info .extra-info h3 {
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
}  

@media screen and (height:1366px){
  .items {
     height: 50vh !important;
  }

  .about {
    height: 50vh !important;
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
  
  .contact-info {
    position: relative;
    top: 40rem;
    height: 100vh !important;
  }
  
  .icons {
    position: relative;
    top: 38rem;
  }
  
}

@media Screen and (max-width:780px){
  .items {
    height: 100vh !important;
  }
  .about {
    height: 100vh !important;
  }
  
  .project {
    height: 100vh !important;
    margin: 20px 0;
  }

  .about-info .extra-info h3 {
    top:28rem !important;
    margin: 30px;
  }
  .project {
    position: relative;
    top: 22rem;
    align-items: center;
    margin: 40px 0  0 0 ;
  }

  .project-1, .project-2, .project-3, .project-4 {
    width: 400px !important;
    margin: 10px 10px 5px 10px !important;
  }

  .contact-info {
     top: 58rem;
  }

   .icons{
     top:53.5rem;
   }

   .about-info img {
     margin:0px 5px !important;
     position: absolute;
     left: 50%;
     top: 5%;
     transform: translateX(-50%);
   }

   .info {
     margin: 10px 0;
   }

   .info > div h3 {
     font-size: 22px !important;
   }
}

@media Screen and (max-width:500px){
    .project-1, .project-2, .project-3, .project-4 {
      width: 350px !important;
    }

    .project-info a  {
      margin: 0 !important;
    }
}

@media Screen and (max-width:400px) {
   .content h1 {
     font-size:25px !important;
   }

   .link{
     top:6.2rem !important;
   }
   

   .content a {
     font-size: 16px !important;
     padding: 10px 5px !important;
   }

    .project {
      top: 28rem;
      left: 2.4% !important;
      height: 100vh !important;
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
       top: 63rem;
       margin: 70px 0;
     }

     .icons {
       top: 61rem !important;       
     }

     .project-1, .project-2, .project-3, .project-4 {
       width: 300px !important;
       margin: 0 20px;
     }
}
</style>
