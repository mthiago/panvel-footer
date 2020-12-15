<template>
  <div id="app">
    <Infos/>
    <Newsletter/>
  </div>
</template>

<script>
import Infos from './components/infos/Infos.vue'
import Newsletter from './components/newsletter/Newsletter.vue'

export default {
  name: 'App',
  components: {
    Infos, Newsletter
  }
}
</script>