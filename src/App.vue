<script>
import NavigationVue from './components/Navigation.vue';

import FooterNav from './components/FooterNav.vue'
export default {
  components: {
    NavigationVue,
   
    FooterNav
  },
  data() {
    return {
      
    }
  },
}
</script>

<template>
<navigation-vue></navigation-vue>
<router-view></router-view>
<footer-nav></footer-nav>
</template>

<style scoped>
</style>
