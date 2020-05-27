<template>
  <div id="app" class="app">
    <Header/>
    
    <router-view/>
 
  </div>
  
</template>

<script>
import Header from './components/layouts/Header';


export default {
  name:'App',
  components: {
     Header,
  },
}
</script>

<style>
html {
  scroll-behavior:smooth;
  transition:all 1s ease;
}
body {
  overflow: hidden;
  background: rgb(255, 255, 255);
}
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4d4d4d;
}

a{
  text-decoration: none;
}

.grid{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
}
</style>
