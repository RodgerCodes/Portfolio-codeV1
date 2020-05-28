<template>
    <div  id="project" class="container project ">
        <h1>My Projects</h1>
        <div class=" projects grid"> 
        <div class="project-2">
          <h2>Facebook clone</h2>
           <img :src="facebook" alt="Project image">
           <div class="project-info">
             <p>Facebook clone built with Node, Vue and MongoDB</p>
             <div>
                <a href=""><i class="fab fa-github" color="#000"></i>Code</a>
             </div>
           </div>
        </div>
        <div class="project-3 card">
          <h2>Movie Library</h2>
           <img src="../assets/unnamed.jpg" alt="Project image">
           <div class="project-info">
             <p>A web app for information about the latest movies and series</p>
             <div>
                <a target="_blank" href="https://github.com/RodgerCodes/covd-19-tracker-"><i class="fab fa-chrome" color="#000"></i>view</a>
                <a target="_blank" href="https://github.com/RodgerCodes/covd-19-tracker-"><i class="fab fa-github" color="#000"></i>Code</a>
             </div>
           </div>
        </div>
           <div class="project-4 card">
          <h2>Thoughts 101</h2>
           <img :src="Thoughts" alt="Project image">
           <div class="project-info">
             <p>A Fullstack web app</p>
             <div>
               <a target="_blank" href="https://stormy-springs-87821.herokuapp.com/"><i class="fab fa-chrome" color="#000"></i>Visit</a>
                <a target="_blank" href="https://github.com/RodgerCodes/Thoughts-101"><i class="fab fa-github" color="#000"></i>Code</a>
             </div>
           </div>
        </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:"Projectsection",
    data(){
      return{
        facebook:require('../assets/facebook.png'),
        Thoughts:require('../assets/thoughts.png')
      }
    }
}
</script>

<style>

.project{
  background: url('../assets/square_bg.png');
  background-size: cover;
  background-position: bottom;
}
 
 .project h1 {
   font-size: 1.3em;
   text-align: center;
   margin-top: 10px;
 }

 .projects {
   padding: 30px 0px;

 }

.project-2{
  grid-row: 1;
}

.project-3{
  grid-row: 2;
}

.project-4{
   grid-row: 3;
}
 
 .project-2, .project-3, .project-4{
     width: 300px;
     height: 290px;
     border-bottom: 1px solid #fff;
     margin: 15px 0;
     transition: all 0.5s ease;
 }

.project-1:hover, .project-2:hover, .project-3:hover, .project-4:hover {
    transform: scale(1.018);
}
  

 .project-1 h2,  .project-2 h2,.project-3 h2, .project-4 h2 {
     text-align: center;
     margin: 10px 0;
 }


 .project-3 img  {
    width: 128px;
   height: 128px;
   /* margin: 5px 100px; */
 }

 .project-4 img {
   width:100%;
   margin:10px 0;
 }

 .project-2 img {
   width: 100%;
   border: none;
   margin: 10px 0;
 }

 .project-info p {
     text-align: center;
     font-weight: bold;
 }

 .project-info a {
     text-decoration: none;
     color:#fff;
     cursor: pointer;
     margin:0 10px ;
 }

 @media Screen and (min-width:620px){
   .project-2{
      grid-column: 1/3;
   }

   .project-3{
     grid-row: 1;
     grid-column: 7/9;
   }

   .project-4{
      grid-row: 3;
      grid-column: 4/7;
   }


   .project-2, .project-3, .project-4{
     width: 280px;
     height: 270px;
   }
 }
</style>