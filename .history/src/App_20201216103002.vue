<template>
  <div id="app">
    <Infos/>
    <Newsletter/>
    <Menu/>
    <Pagamento/>
  </div>
</template>

<script>
import Infos from './components/infos/Infos.vue'
import Newsletter from './components/newsletter/Newsletter.vue'
import Menu from './components/menu/Menu.vue'

export default {
  name: 'App',
  components: {
    Infos, Newsletter, Menu
  }
}
</script>