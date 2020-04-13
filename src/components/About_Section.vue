<template>
    <div ref="about" id="about" class="container about">
       <h1>About Me</h1>
       <div class="about-info">
          <img src="../assets/rodger.png" class="haha" alt="Rodger Photo" width="250rem">
          <div class="extra-info">
             <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis aut, optio aliquam nisi accusamus tempore placeat deleniti velit fugit architecto dolore quidem vel soluta sunt nostrum eius ab officiis nulla eos? Sunt accusantium in, ea totam minima ducimus minus quia neque repudiandae saepe modi id sit libero dolor perferendis rem nostrum commodi quod eos praesentium voluptate. Consequuntur voluptate tempore incidunt odit veritatis excepturi ad asperiores, sint debitis recusandae. Nemo hic ut soluta sapiente neque debitis porro tempora,</h3>
          </div>
       </div>
    </div>
</template>

<script>
export default {
    name:"Aboutsection"
}
</script>

<style>
.about {
    height: 100vh;
    position: relative;
}
.about h1 {
   text-align: center;
   margin: 0 0 20px 0;
}

.haha {
    z-index: 3;
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

.about-info .extra-info h3{
  position: absolute;
  top: 25%;

}

</style>