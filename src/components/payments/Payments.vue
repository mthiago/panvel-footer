<template>
    <Container>
      <ContainerContent>
        <MethodsContainer>
          <MethodsContent>Pague com:</MethodsContent>
          <MethodsContent>
            <PaymentImage src="https://cdn1.staticpanvel.com.br/site/rodape/amex.png"/>
            <PaymentImage src="https://cdn1.staticpanvel.com.br/site/rodape/vida.png"/>
            <PaymentImage src="https://cdn1.staticpanvel.com.br/site/rodape/master.png"/>
            <PaymentImage src="https://cdn1.staticpanvel.com.br/site/rodape/hipercard.png"/>
            <PaymentImage src="https://cdn1.staticpanvel.com.br/site/rodape/elo.png"/>
            <PaymentImage src="https://cdn1.staticpanvel.com.br/site/rodape/hiper.png"/>
            <PaymentImage src="https://cdn1.staticpanvel.com.br/site/rodape/convenios.png"/>
            <PaymentImage src="https://cdn1.staticpanvel.com.br/site/rodape/boleto.png"/>
            <PaymentImage src="https://cdn1.staticpanvel.com.br/site/rodape/dinheiro.png"/>
          </MethodsContent>
        </MethodsContainer>
      </ContainerContent>
    </Container>
</template>

<script>
import { Container, ContainerContent, MethodsContainer, MethodsContent, PaymentImage } from './style.js'

export default {
  name: 'Payments',
  components: {
    Container, ContainerContent, MethodsContainer, MethodsContent, PaymentImage
  }
}
</script>
