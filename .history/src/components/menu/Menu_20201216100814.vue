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
