<template>
    <Background>
        <Title>Cadastre-se</Title>
        <Description>Fique por dentro de desconto, promoções e ofertas</Description>
        <input v-model="message" placeholder="Me edite">
        <p>A mensagem é: {{ message }}</p>
    </Background>
</template>

<script>
import { Background, Title, Description } from './style.js'

export default {
  name: 'Newsletter',
  components: {
    Background, Title, Description
  }
}
</script>
