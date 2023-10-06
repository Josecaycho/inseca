<template>
  <v-app dark>
    <v-main>
      <AppBar 
        data-test="tab-stepper"
        class="permanent-app-bar" 
      />
      <v-container :class="(isMobile ? 'pa-0 mt-1' : '') + 'pa-0 margin-footer'" fluid>
        <nuxt />
      </v-container>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>

import AppBar from '@/components/Header/AppBar.vue'
import Footer from '@/components/Footer/Footer.vue'
export default {
  components: {
    AppBar,
    Footer
  },
  computed :{
    isMobile () {
      return this.$vuetify.breakpoint.mobile
    },
  }
}
</script>

<style>
  .permanent-app-bar {
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    z-index: 4;
  }
</style>