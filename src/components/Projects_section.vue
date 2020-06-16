<template>
    <div data-aos="fade-up"  id="project" class=" project ">
        <h1>My Projects</h1>
        <div class=" projects grid"> 
        <div class="project-2">
          <h2>FjMedia</h2>
           <img :src="facebook" alt="Project image">
           <div class="project-info">
             <p>A Photography Website</p>
             <div>
               <a target="_blank"  rel="noreferrer" href="https://fjmedia.netlify.com"><i class="fab fa-chrome" color="#000"></i>Visit</a>
                <a  rel="noreferrer" href="https://github.com/RodgerCodes/Facebookclone" target="_blank"><i class="fab fa-github" color="#000"></i>Code</a>
             </div>
           </div>
        </div>
        <div class="project-3 card">
          <h2>Todo-ist</h2>
           <img :src="todo" alt="Project image">
           <div class="project-info">
             <p>A todoList app built with node and mongoDb</p>
             <div>
                <a target="_blank" rel="noreferrer" href="https://gentle-beach-32461.herokuapp.com/"><i class="fab fa-chrome" color="#000"></i>view</a>
                <a target="_blank"  rel="noreferrer" href="https://github.com/RodgerCodes/Todo-ist"><i class="fab fa-github" color="#000"></i>Code</a>
             </div>
           </div>
        </div>
           <div class="project-4 card">
          <h2>Thoughts 101</h2>
           <img :src="Thoughts" alt="Project image">
           <div class="project-info">
             <p>A Fullstack web app built with node, Vue and MongoDB</p>
             <div>
               <a target="_blank"  rel="noreferrer" href="https://stormy-springs-87821.herokuapp.com/"><i class="fab fa-chrome" color="#000"></i>Visit</a>
                <a target="_blank"  rel="noreferrer" href="https://github.com/RodgerCodes/Thoughts-101"><i class="fab fa-github" color="#000"></i>Code</a>
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
        facebook:require('../assets/Screenshot (7).jpg'),
        Thoughts:require('../assets/thoughts.jpg'),
        todo:require('../assets/todoist.jpg')
      }
    }
}
</script>

<style>

.project{
  background: url('../assets/square_bg.png');
  background-size: cover;
  background-position: bottom;
  font-family: 'Rubik Regular';
}
 
 .project h1 {
   font-size: 1.3em;
   text-align: center;
   margin-top: 10px;
   padding: 15px 0;
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
     grid-column: 6;
 }

.project-1:hover, .project-2:hover, .project-3:hover, .project-4:hover {
    transform: scale(1.018);
}
  

 .project-1 h2,  .project-2 h2,.project-3 h2, .project-4 h2 {
     text-align: center;
     margin: 10px 0;
      font-size: 1.3em;
 }

 .project-2 .project-info a , .project-3 .project-info a, .project-4 .project-info a{
   margin:10px 15px;
   font-size: 0.9em;
 }


 .project-3 img  {
   width: 100%;
 }

 .project-4 img {
   width:100%;
 }

 .project-2 img {
   width: 100%;
   border: none;
 }

 .project-info p {
     text-align: center;
     font-size: 0.9em;
 }

 .project-info a {
     text-decoration: none;
     color:#fff;
     cursor: pointer;
     margin:0 10px ;
 }

 @media Screen and (min-width:500px){
   .project-2, .project-3, .project-4{
      grid-column: 6;
   }

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

 @media Screen and (min-width:760px){
    .project-2{
      grid-column:2/3 ;
    }

    .project-4{
      grid-column: 2/7;
    }
 }

 @media Screen and (min-width:960px){
   .project-2, .project-3, .project-4{
     width: 300px;
     height: 300px;
   }

   .project-2{
      grid-column:2/6;
   }

   .project-3{
     grid-column: 8/12;
   }

   .project-4{
     grid-column:5/8 ;
   }   
 }

 @media Screen and (min-width:1200px){
   .project-4{
      grid-row: 1;
   }

   .project-2{
     grid-column: 2/4;
   }

   .project-4{
     grid-column: 6/8;
   }

   .project-3{
     grid-column: 10/12;
   }
 }

@media Screen and (min-width:2000px){
  .project-2{
    grid-column: 3/9;
  }
}

</style>