<template>
  <div class="container">
     <div class="icons">
       <a href="https://www.instagram.com/rodger.codes/" target="_blank"><i class="fab fa-instagram fa-2x" color="#000"></i></a>
       <a href="mailto:rkumwanje@gmail.com" target="_blank"><i class="fas fa-envelope fa-2x" color="#000"></i></a>
       <a target="_blank" href="https://www.linkedin.com/in/rodger-kumwanje-2a708a18b/"><i class="fab fa-linkedin fa-2x"></i></a>
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
    color: #ccc;
    cursor: pointer;
}

.icons a:hover{
  color: #000;
}

</style>