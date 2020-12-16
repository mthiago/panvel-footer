<template>
    <Container>
      <ContainerContent>
        <MethodsContainer>
          <MethodsContent>Pague com:</MethodsContent>
          <MethodsContent></MethodsContent>
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
