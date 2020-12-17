<template>
    <Background>
        <Title>Cadastre-se</Title>
        <Description>Fique por dentro de desconto, promoções e ofertas</Description>
        <Container>
          <InputEmail v-model="email" placeholder="Digite seu e-mail"/>
        </Container>
    </Background>
</template>

<script>
import { Background, Title, Description, InputEmail, Container } from './style.js'

export default {
  name: 'Newsletter',
  components: {
    Background, Title, Description, InputEmail, Container
  },
  data() {
    return {
      email: ""
    }
  }
}
</script>
