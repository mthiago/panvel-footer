<template>
  <div>
    <Container>
      <ItemsContent>
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
      </ItemsContent>
      <History>
        Em mais de 40 anos de história, a PanVel é reconhecida como sinônimo de bem-estar e beleza, onde os clientes 
        não encontram apenas uma farmácia que comercializa medicamentos, mas também um espaço com amplo portfólio de 
        higiene e beleza com diversas opções, ambientes planejados e atendimento de qualidade.
      </History>
    </Container>
  </div>
</template>

<script>
import { Infos, Container, Item, Logo, Description, History, ItemsContent } from './style.js'

export default {
  name: 'Infos',
  components: {
    Infos, Container, Item, Logo, Description, History, ItemsContent
  }
}
</script>
