<template>
<div>
  <div class="footer">
    <v-container>
      <v-row>
        <v-col cols="12" lg="8">
          <div class="f-content logo" @click="topWeb">
            <img class="mt-1 mb-8" :src="logo" width="50%" />
          </div>
        </v-col>
        <v-col cols="12" lg="4">
          <div class="f-content">
            <div class="fc-title">Contáctanos</div>
            <div class="fc-info">
              <v-row class="fc-info-item">
                <v-col class="ic" cols="2">
                  <v-icon color="#fff">mdi-plus</v-icon>
                </v-col>
                <v-col class="tx" cols="10">
                  <div>Los Olivos , Lima - Perú</div>
                </v-col>
              </v-row>
              <v-row class="fc-info-item">
                <v-col class="ic" cols="2">
                  <v-icon color="#fff">mdi-plus</v-icon>
                </v-col>
                <v-col class="tx" cols="10">
                  <div>972349203 | Proyectos</div>
                  <div>936801618 | Administración</div>
                </v-col>
              </v-row>
              <v-row class="fc-info-item">
                <v-col class="ic" cols="2">
                  <v-icon color="#fff">mdi-plus</v-icon>
                </v-col>
                <v-col class="tx" cols="10">
                  <div>ventas@inseca.com.pe</div>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div class="copyright">
    <v-container >
      <v-row>
        <v-col>Copyright © 2023 Jose Alfredo Caycho Portal. Todos los derechos reservados</v-col>
      </v-row>
    </v-container>
  </div>
</div>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: require('@/assets/logo1.png')
    },
  },
  methods: {
    topWeb () {
      this.$vuetify.goTo(0)
    }
  },
}
</script>

<style lang="css">
  .footer {
    background-color: #363636;
    background-image: url('@/assets/bg-footer.svg');
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 17rem;
  }
  .f-content {
    padding: 10px;
    color: #fff;
    text-align: right;
  }
  .f-content.logo{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    position: relative;
  }
  .f-content.logo:after{
    content: '';
    width: 60%;
    height: 5px;
    background: #faca3f;
    position: absolute;
    bottom: 25px;
  }
  .f-content.logo:before{
    content: '';
    width: 20%;
    height: 10px;
    background: #fff;
    position: absolute;
    bottom: 25px;
    z-index: 1;
    border-radius: 0 15px 15px 0;
  }
  .f-content .fc-title{
    font-size: 35px;
    position: relative
  }
  .f-content .fc-info{
    margin-top: 2rem;
  }
  .f-content .fc-info img{
    margin-top: 3rem;
  }
  .f-content .fc-info .fcn-info-text{
    text-align: justify;
  }

  .f-content .fc-info ul{
    padding: 0;
  }
  .f-content .fc-info ul li{
    list-style: none;
    padding: 20px 5px;
    border-bottom: 2px solid #faca3f;
  }

  .f-content .fc-info .fc-info-item {
    margin: 10px 0;
  }
  .f-content .fc-info .fc-info-item .ic {
    border: 1px solid #666666;
    text-align: center;
  }
  .f-content .fc-info .fc-info-item .tx {
    border: 1px solid #666666;
  }

  .copyright{
    background-color: #faca3f;
  }
</style>