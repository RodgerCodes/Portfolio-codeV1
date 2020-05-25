<template>
    <div data-aos="fade-right" id="project" class="container project">
        <h1>My Projects</h1>
        <div class=" projects">
          <div class="project-1 card">
            <h2>Covidfy</h2>
           <img src="../assets/covid.png" alt="Project image">
           <div class="project-info">
             <p>A mobile app for covid-19😷</p>
             <div>
                <a target="_blank" href="https://github.com/RodgerCodes/Covidfy"><i class="fab fa-github" color="#000"></i>Code</a>
             </div>
           </div>
        </div> 
        <div class="project-2">
          <h2>Facebook clone</h2>
           <img :src="facebook" alt="Project image">
           <div class="project-info">
             <p>Facebook clone built with Node, Vue and MongoDB</p>
             <div>
                <router-link to=""><i class="fab fa-github" color="#000"></i>Code</router-link>
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
           <img src="../assets/images.png" alt="Project image">
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
        facebook:require('../assets/fb_icon.png')
      }
    }
}
</script>

<style>
 .project {
     height: 100vh;
 }
.projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, 400px);
    justify-content: space-evenly;
    cursor: pointer;
    
}
 .project h1 {
     text-align: center;
     margin: 0 0 20px 0;
     color: rgb(77, 76, 76);
 }

 
 .project-1, .project-2, .project-3, .project-4{
     width: 400px;
     height: 260px;
     background: #fff;
     /* box-shadow: 2px 2px 10px #1a191993, 2px 2px 10px #1a191993; */
     box-shadow: -6px -6px 20px rgba(255, 255, 255, 1), 6px 6px 20px rgba(0, 0, 0, 0.5);
     position: relative;
     margin: 15px 0;
     align-content: center;
     left: 2rem;
     transition: all 0.5s ease;
 }

.project-1:hover, .project-2:hover, .project-3:hover, .project-4:hover {
    transform: scale(1.018);
}
  

 .project-1 h2,  .project-2 h2,.project-3 h2, .project-4 h2 {
     text-align: center;
     margin: 10px 0;
 }

.project-1 img {
   width: 128px;
   height: 128px;
    margin: 10px 130px;
 }

 .project-3 img  {
    width: 128px;
   height: 128px;
   margin: 5px 130px;
 }

 .project-4 img {
   width:128px;
   height: 128px;
   margin: 10px 130px;
 }

 .project-2 img {
   width: 128px;
   height: 128px;
   margin: 10px 130px;
 }

 .project-info p {
     text-align: center;
     font-weight: bold;
 }

  .project-info > div {
   position: absolute;
     left: 50%;
     transform: translateX(-50%);
  }

 .project-info a {
     text-decoration: none;
     color:rgba(0, 0, 0, 0.774);
     cursor: pointer;
     margin:0 10px ;
 }
</style>