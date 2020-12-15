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
      <History>
          Em mais de 40 anos de história, a PanVel é reconhecida como sinônimo de bem-estar e beleza, onde os clientes 
          não encontram apenas uma farmácia que comercializa medicamentos, mas também um espaço com amplo portfólio de 
          higiene e beleza com diversas opções, ambientes planejados e atendimento de qualidade.
        </History>
    </Infos>
  </div>
</template>

<script>
import { Infos, Container, Item, Logo, Description, History } from './components/Infos.js'

export default {
  name: 'App',
  components: {
    Infos, Container, Item, Logo, Description, History
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
