<template>
    <Background>
        <Title>Cadastre-se</Title>
        <Description>Fique por dentro de desconto, promoções e ofertas</Description>
        <EmailContainer>
          <div>
            <InputEmail v-model="email" placeholder="Digite seu e-mail"/>
            <ButtonEmail>OK</ButtonEmail>
          </div>
          <Privacity href="https://www.panvel.com/panvel/institucional.do?secao=duvidasSeguranca">
            Conheça nossa política de privacidade
          </Privacity>
        </EmailContainer>
    </Background>
</template>

<script>
import { Background, Title, Description, InputEmail, EmailContainer, ButtonEmail, Privacity } from './style.js'

export default {
  name: 'Newsletter',
  components: {
    Background, Title, Description, InputEmail, EmailContainer, ButtonEmail, Privacity
  },
  data() {
    return {
      email: ""
    }
  }
}
</script>
