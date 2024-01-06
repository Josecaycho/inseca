<template>
  <v-app dark>
    <div v-if="loader" :class="loader ? 'loader-tl' : ''">
      <div class="loader"></div>
    </div>
    <v-main :class="loader ? 'loader-close' : 'loader-open'">      
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
import { mapMutations,mapGetters } from 'vuex'
export default {
  components: {
    AppBar,
    Footer
  },
  computed :{
    ...mapGetters('app', ['getLoading']),
    isMobile () {
      return this.$vuetify.breakpoint.mobile
    },
  },
  watch: {
    getLoading(value) {
      this.loader = value
      setTimeout(() => {
        this.setLoading(false)
      }, 2000);
    }
  },
  data() {
    return {
      loader: false
    }
  },
  methods: {
    ...mapMutations('app', ['setLoading'])
  },
  mounted() {
    this.setLoading(true)
  },
}
</script>

<style>
.loader-tl{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: EntrarLeft 1.5s ease;
}
@keyframes EntrarLeft {
  from{
    transform: translateX(0%);
  }
  to{
    transform: translateX(0);
  }
}
.loader-close {
  display: none;
}
.loader-open{
  animation: 1.5s ease-out;
}
.permanent-app-bar {
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    z-index: 4;
  }
  /* HTML: <div class="loader"></div> */
.loader {
  width: 80px;
  aspect-ratio: 1;
  display: grid;
  border: 6px solid #363636;
  border-radius: 50%;
  border-color: #ccc #363636;
  animation: l16 1s infinite linear;
}
.loader::before,
.loader::after {    
  content: "";
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
}
.loader::before {
  border-color: #faca3f #363636;
  animation: inherit; 
  animation-duration: .5s;
  animation-direction: reverse;
}
.loader::after {
  margin: 8px;
}
@keyframes l16 { 
  100%{transform: rotate(1turn)}
}
</style>