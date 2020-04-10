<template>
  <div id="app">
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
  overflow: hidden !important;
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
      top:12% !important;
    }

     .project-1, .project-2, .project-3, .project-4{
       left:8% !important ;
       align-items: center;
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

@media Screen and (max-width:700px){
  .about-info .extra-info h3 {
    top:90% !important;
    margin: 30px;
  }
  .project {
    position: relative;
    top: 20rem;
    align-items: center;
    margin: 40px 0  0 0 ;
  }

  .project-1, .project-2, .project-3, .project-4 {
    width: 300px !important;
    margin: 10px 10px 5px 10px !important;
  }

  .contact-info {
     top: 56rem;
  }

   .icons{
     top:53.5rem;
   }

   .about-info img {
     margin: 30px 5px;
     position: absolute;
     left: 50%;
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

    .project {
      top: 28rem;
      left: 2.4% !important;
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
       top: 64rem;
       margin: 50px 0;
     }

     .icons {
       top: 64rem;
      left: -18%;
       
     }

     .project-1, .project-2, .project-3, .project-4 {
       width: 300px !important;
     }
}
</style>
