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
  background:#0A0B5B;
  font-family: 'Rubik Regular';

}

@font-face{
    font-family: 'Rubik Regular';
    src: url('./assets/fonts/Rubik-Regular.ttf');
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}

a{
  text-decoration: none;
}

.grid{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
}

@media Screen and (min-width:620px){
  .items img{
    grid-column: 10/11;
    width:100% ;
  }
}


@media Screen and (min-width: 1200px){

}
</style>
