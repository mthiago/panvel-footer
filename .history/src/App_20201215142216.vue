<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Infos/>
  </div>
</template>

<script>
import { Infos, Container } from './components/Infos.js'

export default {
  name: 'App',
  components: {
    Infos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
