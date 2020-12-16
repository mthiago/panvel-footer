<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <Infos/>
    <Newsletter/>
    <Menu/>
    <Payments/>
    <Contacts/>
  </div>
</template>

<script>
import Infos from './components/infos/Infos.vue'
import Newsletter from './components/newsletter/Newsletter.vue'
import Menu from './components/menu/Menu.vue'
import Payments from './components/payments/Payments.vue'
import Contacts from './components/contacts/Contacts.vue'

export default {
  name: 'App',
  components: {
    Infos, Newsletter, Menu, Payments, Contacts
  }
}
</script>