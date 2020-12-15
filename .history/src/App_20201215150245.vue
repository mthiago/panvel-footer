<template>
  <div id="app">
    <Infos/>
    <Infos>
      <Container>
        <Item>
          <Logo>
            <i class="material-icons">&#xe853;</i>
          </Logo>
          <Texto>Preços exclusivos para site e app</Texto>
        </Item>
        <Item>a</Item>
        <Item>a</Item>
        <Item>a</Item>
        <Item>a</Item>
      </Container>
    </Infos>
  </div>
</template>

<script>
import { Infos, Container, Item, Logo, Texto } from './components/Infos.js'

export default {
  name: 'App',
  components: {
    Infos,Container,Item,Logo,Texto
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
