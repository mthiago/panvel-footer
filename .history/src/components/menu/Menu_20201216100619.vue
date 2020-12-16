<template>
    <Container>
      <div>
        <Title>Atendimento</Title>
        <Items>
          <Item>Central de Atendimento</Item>
          <Item>Nossas Lojas</Item>
          <Item>Panvel Clinic</Item>
        </Items>
      </div>
      <div></div>
      <div></div>
      <div></div>
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
