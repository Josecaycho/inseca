<template>
  <div>
    <v-app-bar
      height="100"
      elevation="0"
      clipped-right
      :color="color"
    >
      <v-toolbar-title class="ml-4">
        <nuxt-link to="/">
          <v-img class="mt-1" :src="logo" max-height="70" max-width="250"/>
        </nuxt-link>
      </v-toolbar-title>
        <v-spacer />
        <div class="content-info">
          <div class="item" :class="$route.path.includes('/nosotros') ? 'active': ''">
            <nuxt-link to="/nosotros">Nosotros</nuxt-link>
          </div>
          <div class="item" :class="$route.path.includes('/Servicios') ? 'active': ''" >
            <nuxt-link to="/Servicios">Servicios</nuxt-link>
          </div>
          <div class="item" :class="$route.path.includes('/obras') ? 'active': ''" >
            <nuxt-link to="/obras">Obras</nuxt-link>
          </div>
          <div class="item" :class="$route.path.includes('/clientes') ? 'active': ''" >
            <nuxt-link to="/clientes">Clientes</nuxt-link>
          </div>
          <div class="item">Colaboradores</div>
          <div class="item">
            <a @click="redirectContact()">Contacto</a>
          </div>
          <div class="item social">
            <v-icon size="35" color="#fff">mdi-facebook</v-icon>
            <v-icon size="35" color="#fff">mdi-linkedin</v-icon>
          </div>
        </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  transition: 'fadeOpacity',
  name: 'AppBar',
  props: {
    logo: {
      type: String,
      default: require('@/assets/logo1.png')
    },
    color: {
      type: String,
      default: '#363636'
    },
  },
  data() {
    return {
      slottedReferencesTab: {},
    }
  },
  computed : {
    isRoute () {
      return this.$route.path
    },
  },
  mounted() {
  },
  methods: {
    redirectContact () {
      if (this.$router.currentRoute.path === '/')
        window.location.href= "#contacto"
      else {
        this.$router.push('/')
        setTimeout(() => {
          window.location.href= "#contacto"
        }, 1500);
      }
    }
  },
}
</script>

<style lang="css">

  @keyframes show{ 
    from {
      opacity: 0;
      scale: 25%;
      transition: all 0.5s;
    }
    to {
      opacity: 1;
      scale: 100%;
      transition: all 0.5s;
    }
  }

  .image, .banner-servicios, .content-obras-title, .content-contact, .content-message, .sec-nos, .title-cert, .item-cert{
    view-timeline-name: --image;
    view-timeline-axis: block;
    animation-timeline: --image;
    animation-name: show;
    animation-range: entry 25% cover 50%;
    animation-fill-mode: both;
  }

  .slide-right-enter-active,
  .slide-right-leave-active {
    transition: all 0.5s;
  }

  .slide-right-enter-from{
    opacity: 0;
    transform: translate(-50px, 0);
  }

  .slide-right-leave-to{
    opacity: 0;
    transform: translate(50px, 0);
  }

  .page-enter-active,
  .page-leave-active {
    transition: all 0.5s;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    transform: translate(-50px, 0);
  }


  .content-info{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin-right: 2rem;
  }
  .content-info .item{
    font-size: 20px;
    color: #fff;
  }
  .content-info .item a{
    text-decoration: none;
    color: #fff;
  }
  .content-info .item.active{
    color: #fff;
    border-bottom: 4px solid #faca3f;
  }
  .content-info .item.social{
    display: flex;
    gap: 10px;
  }
</style>