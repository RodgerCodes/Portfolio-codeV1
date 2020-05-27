<template>
    <div class="tech">
     <h3> Favourite TechStack</h3>
     <div class="stack ">
         <div>
<img :src="node" alt="Nodejs">
         <h4>Nodejs</h4>
         </div>
         <div>
           <img :src="html" alt="HTML" >
         <h4>Html and Css</h4>
         </div>
         <div>
           <img :src="js" alt="Javascript" >
         <h4>JavaScript</h4>
         </div>
         <div>
            <img :src="vue" alt="Vuejs">
         <h4>Vuejs</h4>
         </div>
         <div>
          <img :src="docker" alt="Docker">
         <h4>Docker</h4>
         </div>
         
     </div>
    </div>
</template>

<script>
export default {
    name:"TechStack",
    data(){
        return {
            node:require('@/assets/node.png'),
            html:require('@/assets/html.png'),
            js:require('@/assets/javascript.png'),
            vue:require('@/assets/vuej.png'),
            docker:require('@/assets/docker.png')
        }
    }
}
</script>
<style>

.tech {
    margin-top: 30px;
}
.tech h3{
    font-size: 1.3em;
    text-align: center;
    margin: 10px 0;
}
.tech .stack {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 10px 20px;
}



.tech .stack > div img{
    width: 50%;
}

.tech .stack > div h4{
    font-size: 0.8em;
    padding: 0 10px;
}
</style>