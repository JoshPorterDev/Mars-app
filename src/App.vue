<template>
  <NavBar />
  <Rovers />
</template>

<script>
import NavBar from './components/Navbar.vue'
import Rovers from './components/Rovers.vue'
import Photo from './components/Photo.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Rovers,
    Photo
  }
}
</script>

<style>
html {
  background: #2c3e50;
}
#app {
  background: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;  */
  color: white; 
  /* margin-top: 60px;  */
}
</style>
