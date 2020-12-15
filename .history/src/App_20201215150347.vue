<template>
  <div id="app">
    <Infos/>
    <Infos>
      <Container>
        <Item>
          <Logo>
            <i class="material-icons">&#xe853;</i>
          </Logo>
          <Description>Preços exclusivos para site e app</Description>
        </Item>
        <Item>
          <Logo>
            <i class="material-icons">&#xe853;</i>
          </Logo>
          <Description>Preços exclusivos para site e app</Description>
        </Item>
        <Item>
          <Logo>
            <i class="material-icons">&#xe853;</i>
          </Logo>
          <Description>Preços exclusivos para site e app</Description>
        </Item>
        <Item>
          <Logo>
            <i class="material-icons">&#xe853;</i>
          </Logo>
          <Description>Preços exclusivos para site e app</Description>
        </Item>
        <Item>
          <Logo>
            <i class="material-icons">&#xe853;</i>
          </Logo>
          <Description>Preços exclusivos para site e app</Description>
        </Item>
      </Container>
    </Infos>
  </div>
</template>

<script>
import { Infos, Container, Item, Logo, Description } from './components/Infos.js'

export default {
  name: 'App',
  components: {
    Infos,Container,Item,Logo,Description
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
