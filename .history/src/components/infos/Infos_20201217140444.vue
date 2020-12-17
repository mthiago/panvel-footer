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
            <Description>Entrega Grátis 
              <Delivery href="https://www.panvel.com/panvel/institucional.do?secao=duvidasFrete">(ver regras)</Delivery>
            </Description>
          </DescriptionContainer>
        </Item>
        <Item>
          <span>
            <Icon class="material-icons">store</Icon>
          </span>
          <DescriptionContainer>
            <Description>Click &amp; Retire sem pagar frete</Description>
          </DescriptionContainer>
        </Item>
        <Item>
          <span>
            <Icon class="material-icons">restore</Icon>
          </span>
          <DescriptionContainer>
            <Description>Receba em até 60 minutos 
              <Delivery href="https://www.panvel.com/panvel/institucional.do?secao=duvidasFrete">(ver regras)</Delivery>
              </Description>
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
      <HistoryContainer>
        <History>
        Em mais de 40 anos de história, a <strong><i>PanVel</i></strong> é reconhecida como sinônimo de bem-estar e beleza, onde os clientes 
        não encontram apenas uma farmácia que comercializa <strong><i>medicamentos</i></strong>, mas também um espaço com amplo portfólio de 
        <strong><i>higiene</i></strong> e beleza com diversas opções, ambientes planejados e <strong><i>atendimento de qualidade</i></strong>.
        </History>
      </HistoryContainer>
    </Content>
  </Container>
</template>

<script>
import { Container, Content, Item, Description, HistoryContainer, History, Items, Icon, DescriptionContainer, Delivery } from './style.js'

export default {
  name: 'Infos',
  components: {
    Container, Content, Item, Description, HistoryContainer, History, Items, Icon, DescriptionContainer, Delivery
  }
}
</script>
