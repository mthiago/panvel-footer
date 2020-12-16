<template>
    <Container>
      <div>
        <Title>Atendimento</Title>
        <Items>
          <Item>Central de Atendimento</Item>
          <Item>Nossas Lojas</Item>
          <Item>Panvel Clinic</Item>
        </Items>
        <Title>Dúvidas</Title>
        <Items>
          <Item>Formas de Pagamento</Item>
          <Item>Prazo de Entrega</Item>
          <Item>Troca e Devolução</Item>
        </Items>
      </div>
      <div>
        <Title>Sobre a Panvel</Title>
        <Items>
          <Item>Quem Somos</Item>
          <Item>Panvel Bem Você</Item>
          <Item>Programa Bem Panvel</Item>
          <Item>Vacinas</Item>
          <Item>Medicamentos Especiais</Item>
          <Item>Revista de Ofertas</Item>
          <Item>Trabalhe Conosco</Item>
          <Item>Relação com Investidores</Item>
          <Item>Política de Privacidade</Item>
          <Item>Descarte de Medicamentos</Item>
          <Item>Desconto de Laboratório</Item>
        </Items>
      </div>
      
    </Container>
</template>

<script>
import { Container, Title, Items, Item } from './style.js'

export default {
  name: 'Menu',
  components: {
    Container,
    Title,
    Items,
    Item
  }
}
</script>
