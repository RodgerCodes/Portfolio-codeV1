<template>
  <div class=" footer" >
     <div class="icons">
       <a href="https://www.instagram.com/rodger.codes/" target="_blank"  rel="noreferrer"><i class="fab fa-instagram fa-sm" style="color:#fff"></i></a>
       <a target="_blank"  rel="noreferrer" href="https://www.linkedin.com/in/rodger-kumwanje-2a708a18b/"><i class="fab fa-linkedin fa-sm" style="color:#fff"></i></a>
       <a target="_blank"  rel="noreferrer" href="https://twitter.com/rodger_codes"><i class="fab fa-twitter fa-sm" style="color:#fff"></i></a>
       <a target="_blank"  rel="noreferrer" href="https://dribbble.com/Rodger_codes"><i class="fab fa-dribbble fa-sm" style="color:#fff"></i></a>
       <a href="mailto:rkumwanje@gmail.com" target="_blank"  rel="noreferrer"><i class="fas fa-envelope fa-sm" style="color:#fff"></i></a>
       <a target="_blank"  rel="noreferrer" href="https://github.com/RodgerCodes"><i class="fab fa-github fa-sm" style="color:#fff"></i></a>
     </div>
     <div>
       <p>Made with Love <i class="fas fa-heart" style="color:red"></i> with <i class="fab fa-vuejs" style="color:green"></i></p>
     </div>
  </div>
</template>

<script>
export default {
  name:'Footer'
}
</script>

<style>

.icons {
  display: flex;
  align-items: center;
  justify-content: center;
}
.icons a {
    margin: 10px 10px;
    cursor: pointer;
}

.icons a:hover{
  color: #000;
}

.footer{
  background: #14153D;
}

.footer p{
  text-align: center;
}

</style>