<template>
    <Background>
        <Title>Cadastre-se</Title>
        <Description>Fique por dentro de desconto, promoções e ofertas</Description>
        <Container>
          <InputEmail v-model="email" placeholder="Digite seu e-mail"/>
          <ButtonEmail>OK</ButtonEmail>
          <Privacity href="https://www.panvel.com/panvel/institucional.do?secao=duvidasSeguranca">
            Conheça nossa política de privacidade
          </Privacity>
        </Container>
    </Background>
</template>

<script>
import { Background, Title, Description, InputEmail, Container, ButtonEmail, Privacity } from './style.js'

export default {
  name: 'Newsletter',
  components: {
    Background, Title, Description, InputEmail, Container, ButtonEmail, Privacity
  },
  data() {
    return {
      email: ""
    }
  }
}
</script>
