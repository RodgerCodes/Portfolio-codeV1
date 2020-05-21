<template>
    <div   id="about" class="container about" data-aos="fade-left">
       <h1>About Me</h1>
       <div class="about-info">
       <img src="../assets/rodger.png" class="haha" alt="Rodger Photo" width="250rem">
          <div class="extra-info">
             <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis aut, optio aliquam nisi accusamus tempore placeat deleniti velit fugit architecto dolore quidem vel soluta sunt nostrum eius ab officiis nulla eos? Sunt accusantium in, ea totam minima ducimus minus quia neque repudiandae saepe modi id sit libero dolor perferendis rem nostrum commodi quod eos praesentium voluptate. Consequuntur voluptate tempore incidunt odit veritatis excepturi ad asperiores, sint debitis recusandae. Nemo hic ut soluta sapiente neque debitis porro tempora,</h2>
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
}
</style>