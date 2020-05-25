<template>
    <div class="tech">
     <h3> Favourite TechStack</h3>
     <div class="stack">
         <div>
<img :src="node" alt="Nodejs" width="90rem">
         <h4>Nodejs</h4>
         </div>
         <div>
           <img :src="html" alt="HTML" width="100rem">
         <h4>Html and Css</h4>
         </div>
         <div>
           <img :src="js" alt="Javascript" width="120rem">
         <h4>JavaScript</h4>
         </div>
         <div>
            <img :src="vue" alt="Vuejs" width="90rem">
         <h4>Vuejs</h4>
         </div>
         <div>
          <img :src="docker" alt="Docker" width="100rem">
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
.stack {
   display: flex;
   justify-content: space-evenly;
   align-items: center;
}

.tech h3{
    text-align: center;
    color: #646464 ;
}

.stack > div h4 {
    text-align: center;
    margin:10px 0;
}

.stack img{
    transition: all 1s ease;
}

.stack img:hover, .stack > div p:hover {
  transform: scale(1.2);
}
</style>