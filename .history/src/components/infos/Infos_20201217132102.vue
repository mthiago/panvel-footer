<template>
  <Container>
    <Content>
      <Items>
        <Item>
          <span>
            <Icon class="material-icons">important_devices</Icon>
          </span>
          <DescriptionContainer>
            <Description>Preços exclusivos para site e app</Description>
          </DescriptionContainer>
        </Item>
        <Item>
          <span>
            <Icon class="material-icons">local_shipping</Icon>
          </span>
          <DescriptionContainer>
            <Description>Entrega Grátis (ver regras)</Description>
          </DescriptionContainer>
        </Item>
        <Item>
          <span>
            <Icon class="material-icons">store</Icon>
          </span>
          <DescriptionContainer>
            <Description>Click & Retire sem pagar frete</Description>
          </DescriptionContainer>
        </Item>
        <Item>
          <span>
            <Icon class="material-icons">restore</Icon>
          </span>
          <DescriptionContainer>
            <Description>Receba em até 60 minutos <br><a href="https://www.panvel.com/panvel/institucional.do?secao=duvidasFrete">(ver regras)</a></Description>
          </DescriptionContainer>
        </Item>
        <Item>
          <span>
            <Icon class="material-icons">credit_card</Icon>
          </span>
          <DescriptionContainer>
            <Description>Até 10x sem juros no Cartão de Crédito</Description>
          </DescriptionContainer>
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
import { Container, Content, Item, Description, History, Items, Icon, TextDescription, DescriptionContainer } from './style.js'

export default {
  name: 'Infos',
  components: {
    Container, Content, Item, Description, History, Items, Icon, TextDescription, DescriptionContainer
  }
}
</script>
