<template>
    <div id="project" class="container project">
        <h1>My Projects</h1>
        <div class=" projects">
          <div class="project-1">
            <h2>Covid-19</h2>
           <img src="../assets/covid.png" alt="Project image">
           <div class="project-info">
             <p>Web app that displays Covid-19 stats😷</p>
             <div>
                <router-link to=""><i class="fab fa-chrome" color="#000"></i>view</router-link>
                <a target="_blank" href="https://github.com/RodgerCodes/covd-19-tracker-"><i class="fab fa-github" color="#000"></i>Code</a>
             </div>
           </div>
        </div> 
        <div class="project-2">
          <h2>BTC Tracker</h2>
           <img src="../assets/icon.png" alt="Project image">
           <div class="project-info">
             <p>A mobile app that Tracks bitcon prices🤑</p>
             <div>
                <!-- <router-link to=""><i class="fab fa-chrome" color="#000"></i>View Site</router-link> -->
                <router-link to=""><i class="fab fa-github" color="#000"></i>View Code</router-link>
             </div>
           </div>
        </div>
        <div class="project-3">
          <h2>Covid-</h2>
           <img src="" alt="Project image">
           <div class="project-info">
             <p>Web app that displays Covid-19 stats</p>
             <div>
                <a target="_blank" href="https://github.com/RodgerCodes/covd-19-tracker-"><i class="fab fa-chrome" color="#000"></i>view</a>
                <a target="_blank" href="https://github.com/RodgerCodes/covd-19-tracker-"><i class="fab fa-github" color="#000"></i>Code</a>
             </div>
           </div>
        </div>
           <div class="project-4">
          <h2>Recipe App</h2>
           <img src="" alt="Project image">
           <div class="project-info">
             <p>A mobile App containing various recipes😋</p>
             <div>
                <!-- <router-link to=""><i class="fab fa-chrome" color="#000"></i>View Site</router-link> -->
                <router-link to=""><i class="fab fa-github" color="#000"></i>view Code</router-link>
             </div>
           </div>
        </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:"Projectsection"
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
    z-index: 1 !important;
    
}
 .project h1 {
     text-align: center;
     margin: 0 0 20px 0;
 }

 
 .project-1, .project-2, .project-3, .project-4{
     width: 400px;
     height: 250px;
     background: #fff;
     box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.712), 0px 0px 5px rgba(0, 0, 0, 0.664);
     position: relative;
     margin: 15px 0;
     align-content: center;
     left: 2rem;
 }

.project-1:hover, .project-2:hover, .project-3:hover, .project-4:hover {
    transform: scale(1.008);
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

 .project-2 img {
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