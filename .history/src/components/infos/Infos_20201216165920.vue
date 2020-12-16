<template>
  <Container>
    <Content>
      <Items>
        <Item>
          <Logo>
            <span class="material-icons">important_devices</span>
          </Logo>
          <Description>Preços exclusivos para site e app</Description>
        </Item>
        <Item>
          <Logo>
            <span class="material-icons">local_shipping</span>
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
      </Items>
      <History>
        Em mais de 40 anos de história, a PanVel é reconhecida como sinônimo de bem-estar e beleza, onde os clientes 
        não encontram apenas uma farmácia que comercializa medicamentos, mas também um espaço com amplo portfólio de 
        higiene e beleza com diversas opções, ambientes planejados e atendimento de qualidade.
      </History>
    </Content>
  </Container>
</template>

<script>
import { Container, Content, Item, Logo, Description, History, Items } from './style.js'

export default {
  name: 'Infos',
  components: {
    Container, Content, Item, Logo, Description, History, Items
  }
}
</script>
