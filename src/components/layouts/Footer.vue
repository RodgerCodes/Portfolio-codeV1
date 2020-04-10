<template>
  <div class="container">
     <div class="icons">
       <a href="https://www.instagram.com/rodger.codes/" target="_blank"><i class="fab fa-instagram fa-2x" color="#000"></i></a>
       <a href="https://twitter.com/rodger_codes" target="_blank"><i class="fab fa-twitter fa-2x" color="#000"></i></a>
       <a href="mailto:rkumwanje@gmail.com" target="_blank"><i class="fas fa-envelope fa-2x" color="#000"></i></a>
       <p>All rights reserved</p>
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

.icons p{
  text-align: center !important;
  font-weight: bolder;
}
</style>