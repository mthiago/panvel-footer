<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Infos>
      <Container>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </Container>
    </Infos>
  </div>
</template>

<script>
import { Infos, Container, Item } from './components/Infos.js'

export default {
  name: 'App',
  components: {
    Infos,
    Container,
    Item
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
