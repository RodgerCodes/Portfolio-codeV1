<template>
    <div   id="about" class="container about" data-aos="fade-left">
       <h1>About Me</h1>
       <div class="about-info">
       <img :src="image"  alt="Rodger Photo" width="250rem">
          <div class="extra-info">
             <h2>My Name is Rodger Kumwanje and i am a 19 year old Full stack developer with 1 year experience building web apps with Technologies like Nodejs, Vuejs ,Html5, CSS3 and Vanilla JavaScript, MongoDB, MySQL and Postgres. With the techstack you can only guess it, my favourite Programming language is JavaScript.I am also a Student at the Malawi University of Science and Technology <a href="">Must</a> Pursuing a degree in Meteorology and Climate Science</h2>
          </div>
       </div>
       <TechStack/>
    </div>
</template>

<script>
import TechStack from '@/components/TechStack'
export default {
    name:"Aboutsection",
    components:{
        TechStack
    },
    data(){
        return {
            image:require('../assets/rodger.png')
        }
    }
}
</script>

<style>

.about {
    height: 100vh !important;
    position: relative;
    
}

.about h1 {
   text-align: center;
   margin: 0 0 20px 0;
}

.about-info {
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fill, 350px);
    grid-gap:10px;
}

.about-info img {
    margin: 60px 10px !important; 
    border:2px yellow solid;
    border-radius: 50%;
} 
   

.about-info .extra-info h2{
  position: absolute;
  top: 25%;
 font-size: 18px;
 color: rgb(56, 56, 56);
}
</style>