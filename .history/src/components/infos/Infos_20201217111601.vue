<template>
  <Container>
    <Content>
      <Items>
        <Item>
          <Icon class="material-icons">important_devices</Icon>
          <Description>Preços exclusivos para site e app</Description>
        </Item>
        <Item>
          <Icon class="material-icons">local_shipping</Icon>
          <Description>Entrega Grátis (ver regras)</Description>
        </Item>
        <Item>
          <Icon class="material-icons">store</Icon>
          <Description>Click & Retire sem pagar frete</Description>
        </Item>
        <Item>
          <Icon class="material-icons">restore</Icon>
          <Description>Receba em até 60 minutos <br><a href="https://www.panvel.com/panvel/institucional.do?secao=duvidasFrete">(ver regras)</a></Description>
        </Item>
        <Item>
          <Icon class="material-icons">credit_card</Icon>
          <Description>Até 10x sem juros no Cartão de Crédito</Description>
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
import { Container, Content, Item, Description, History, Items, Icon } from './style.js'

export default {
  name: 'Infos',
  components: {
    Container, Content, Item, Description, History, Items, Icon
  }
}
</script>
