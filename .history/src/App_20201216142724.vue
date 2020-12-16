<template>
  <div id="app">
    <Infos/>
    <Newsletter/>
    <Menu/>
    <Payment/>
  </div>
</template>

<script>
import Infos from './components/infos/Infos.vue'
import Newsletter from './components/newsletter/Newsletter.vue'
import Menu from './components/menu/Menu.vue'
import Payment from './components/payment/Payment.vue'

export default {
  name: 'App',
  components: {
    Infos, Newsletter, Menu, Payment
  }
}
</script>