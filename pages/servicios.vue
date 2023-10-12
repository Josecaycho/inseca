<template>
  <section>
    <Banner title="Servicios" />
    <v-container> 
      <v-row v-for="(servicio, index) in servicios" :key="index" class="serv-ls">
        <v-col cols="12" lg="6" class="serv-ls-item" v-if="index%2==0">
          <div class="serv-img">
            <img :src="imgRender(servicio.img)" alt="" width="100%">
          </div>
        </v-col>
        <v-col cols="12" lg="6" v-if="!isMobile">
          <div class="serv-content">
            <div class="content">
              <div class="serv-title">{{ servicio.title }}</div>
              <div class="serv-info">{{ servicio.info }}</div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="6" class="serv-ls-item" v-if="index%2!=0">
          <div class="serv-img">
            <img :src="imgRender(servicio.img)" alt="" width="100%">
          </div>
        </v-col>
        <v-col cols="12" lg="6" v-if="isMobile">
          <div class="serv-content">
            <div class="content">
              <div class="serv-title">{{ servicio.title }}</div>
              <div class="serv-info">{{ servicio.info }}</div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import Banner from '@/components/Banner.vue'
export default {
  name: 'Servicios',
  components: {
    Banner
  },
  layout () {
    return 'desktop'
  },
  data() {
    return {
      servicios: [
          {img: 'gas.jpg', title: 'Instalaciones de Gas', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
          {img: 'electricas.jpg', title: 'Instalaciones Electricas', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
          {img: 'sanitarias.jpg', title: 'Instalaciones Sanitarias y griferias', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        ]
    }
  },
  computed: {
    isMobile () {
      if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.width < 960)
        return true
      else return false
    },
  },
  methods: {
    imgRender (value) {
      return require(`@/assets/${value}`)
    }
  },
}
</script>


<style lang="scss">
  .serv-ls{
    margin: 20px;
    border-bottom: 0;
    border-top: 2px solid #faca3f;
    border-style: groove;
    border-left: 0px;
    border-right: 0px;
    .serv-ls-item{
      .serv-img{

      }
    }
    .serv-content{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .serv-title{
        font-size: 35px;
        font-weight: 700;
        margin-bottom: 15px;
      }
      .serv-info{
        font-size: 20px;
      }
    }
  }
  @media (max-width: 587px) {
    .serv-ls{
      margin-bottom: 50px !important;
      margin-top: 30px !important;
      border-bottom: 2px solid #faca3f;
      border-top: 2px solid #faca3f;
      border-style: groove;
      border-left: 0px;
      border-right: 0px;
      .serv-content{
        .serv-title{
          font-size: 25px;
          font-weight: 700;
          margin-bottom: 15px;
        }
        .serv-info{
          font-size: 20px;
        }
      }
    }
  }
</style>