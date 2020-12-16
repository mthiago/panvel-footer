<template>
    <Container>
      <ContainerContent>
        <MethodsContainer>
          <MethodsContent>Pague com:</MethodsContent>
          <MethodsContent>
            <Image src="https://cdn1.staticpanvel.com.br/site/rodape/amex.png"></Image>
          </MethodsContent>
        </MethodsContainer>
      </ContainerContent>
    </Container>
</template>

<script>
import { Container, ContainerContent, MethodsContainer, MethodsContent, Image } from './style.js'

export default {
  name: 'Payment',
  components: {
    Container, ContainerContent, MethodsContainer, MethodsContent,Image
  }
}
</script>
