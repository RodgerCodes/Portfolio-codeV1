<template>
  <div class=" footer" >
     <div class="icons">
       <a href="https://www.instagram.com/rodger.codes/" target="_blank"><i class="fab fa-instagram fa-2x" style="color:#fff"></i></a>
       <a href="mailto:rkumwanje@gmail.com" target="_blank"><i class="fas fa-envelope fa-2x" style="color:#fff"></i></a>
       <a target="_blank" href="https://github.com/RodgerCodes"><i class="fab fa-github fa-2x" style="color:#fff"></i></a>
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
    margin: 5px 20px;
    cursor: pointer;
}

.icons a:hover{
  color: #000;
}

.footer{
  background: #14153D;
}

</style>