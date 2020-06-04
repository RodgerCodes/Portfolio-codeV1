<template >
    <div  id="about" class="container about" >
       <h1>About Me</h1>
       <div class="about-info grid">
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

.about h1{
    font-size: 1.3em;
    text-align: center;
    margin: 10px 0;
}

.about-info img {
    padding: 10px 30px;
    grid-column: 2/7;
    max-width: 300px;
}

.about-info .extra-info{
    grid-row: 2;
    grid-column: 1/13;
    margin:20px 10px;
}

.about-info .extra-info h2 {
    font-size:1em;
    font-weight: normal;
    font-family: 'Rubik Regular';
}

.about-info .extra-info h2 a {
    color: rgb(13, 158, 255);
    font-weight: bold;
    cursor: pointer;
}

@media Screen and (min-width:500px){
     .about-info img{
         grid-column: 4/6;
     }
}

@media Screen and (min-width:620px){
    .about-info img{
        grid-column: 4/7;
    }

    .about-info .extra-info{
        padding: 0 5px;
    }
}

@media Screen and (min-width:760px){
    .about-info img{
        grid-column: 5/8;
    }
}

@media Screen and (min-width:960px){
    .about-info img{
        grid-row: 1;
        grid-column: 1/4;
        width: 130%;
    }
     .about-info .extra-info{
         grid-row: 1;
         grid-column: 5/19;
     }
}

@media Screen and (min-width:1200px){

}
</style>