<template>
    <Background>
        <Title>Cadastre-se</Title>
        <Description>Fique por dentro de desconto, promoções e ofertas</Description>
        <InputEmail v-model="email" placeholder="Digite seu e-mail"/>
    </Background>
</template>

<script>
import { Background, Title, Description, InputEmail } from './style.js'

export default {
  name: 'Newsletter',
  components: {
    Background, Title, Description,InputEmail
  },
  data() {
    return {
      email: ""
    }
  }
}
</script>
