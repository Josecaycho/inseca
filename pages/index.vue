<template>
  <div>
    <CarouselHome  />
    <div class="section">
      <v-container>
        <v-row class="mb-5">
          <v-col class="title-inseca text-center">
            <span>¿POR QUÉ INSECA?</span>
          </v-col>
        </v-row>
        <v-row class="content-items">
          <v-col cols="12" lg="3" class="pa-4">
            <div class="item-info">
              <div class="image">
                <img :src="imagenDefecto" width="200">
              </div>
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
            </div>
          </v-col>
          <v-col cols="12" lg="3" class="pa-4">
            <div  class="item-info">
              <div class="image">
                <img :src="imagenDefecto" width="200">
              </div>
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
            </div>
          </v-col>
          <v-col cols="12" lg="3" class="pa-4">
            <div  class="item-info">
              <div class="image">
                <img :src="imagenDefecto" width="200">
              </div>
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
            </div>
          </v-col>
          <v-col cols="12" lg="3" class="pa-4">
            <div  class="item-info">
              <div class="image">
                <img :src="imagenDefecto" width="200">
              </div>
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="mt-16 mb-16 banner-servicios">
      <div class="banner">
        <div class="b-title">BIENVENIDOS A INSECA</div>
        <div class="b-sub-title">CONTRATISTAS GENERALES AL <span> SERVICIO </span> DE LA CONSTRUCCIÓN</div>
        <div class="b-info">Somos una empresa constructora, que presta servicios a diversas empresas públicas y privadas.</div>
        <v-btn
          color="#000"
          class="mt-8"
          outlined
          href="/servicios"
        >
          NUESTROS SERVICIOS
        </v-btn>
      </div>
    </div>
    <div class="section">
      <v-container class="content-obras">
        <v-row class="content-obras-title">
          <v-col class="title-text">
            <span >NUESTRAS OBRAS</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="4" class="pa-4 content-items-obras">
            <div class="item-obras">
              <img :src="imagenDefectoObra">
              <div class="text">
                <div class="info-title">PROYECTO RESIDENCIAL INDEPENDENCIA</div>
                <div class="info-obra">
                  <div>
                    <v-row>
                      <v-col cols="2" class="label">Cliente:</v-col>
                      <v-col cols="10" class="px-5">PROYECTOS S.A.C</v-col>
                    </v-row>
                  </div>
                  <div>
                    <v-row>
                      <v-col cols="2" class="label">Estado:</v-col>
                      <v-col cols="10" class="px-5">Culminado</v-col>
                    </v-row>
                  </div>
                </div>
              </div>
            </div>
          </v-col><v-col cols="12" lg="4" class="pa-4 content-items-obras">
            <div class="item-obras">
              <img :src="imagenDefectoObra">
              <div class="text">
                <div class="info-title">PROYECTO RESIDENCIAL INDEPENDENCIA</div>
                <div class="info-obra">
                  <div>
                    <v-row>
                      <v-col cols="2" class="label">Cliente:</v-col>
                      <v-col cols="10" class="px-5">PROYECTOS S.A.C</v-col>
                    </v-row>
                  </div>
                  <div>
                    <v-row>
                      <v-col cols="2" class="label">Estado:</v-col>
                      <v-col cols="10" class="px-5">Culminado</v-col>
                    </v-row>
                  </div>
                </div>
              </div>
            </div>
          </v-col><v-col cols="12" lg="4" class="pa-4 content-items-obras">
            <div class="item-obras">
              <img :src="imagenDefectoObra">
              <div class="text">
                <div class="info-title">PROYECTO RESIDENCIAL INDEPENDENCIA</div>
                <div class="info-obra">
                  <div>
                    <v-row>
                      <v-col cols="2" class="label">Cliente:</v-col>
                      <v-col cols="10" class="px-5">PROYECTOS S.A.C</v-col>
                    </v-row>
                  </div>
                  <div>
                    <v-row>
                      <v-col cols="2" class="label">Estado:</v-col>
                      <v-col cols="10" class="px-5">Culminado</v-col>
                    </v-row>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-10">
          <div class="content-btn-mobras">
            <v-btn 
              color="#faca3f"
              outlined
              href="/obras"
            >
              Ver más obras
              <v-icon>mdi-plus </v-icon>
            </v-btn>
          </div>
        </v-row>
      </v-container>
    </div>
    <Contactanos />
  </div>
</template>

<script>
import CarouselHome from '@/components/Carousels/CarouselHome.vue'
import Contactanos from '@/components/Contactanos.vue'
export default {
  name: 'Index',
  layout () {
    return 'desktop'
  },
  data() {
    return {
      imagenDefecto: require('@/assets/obra.png'),
      imagenDefectoObra: require('@/assets/proyecto.jpg')
    }
  },
  components: {
    CarouselHome,
    Contactanos
  }
}
</script>

<style lang="scss">
  html{
    scroll-behavior: smooth;
  }
  .section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  .title-inseca span{
    border-bottom: 5px solid #faca3f;
    font-size: 30px;
    font-weight: bold;
  }
  .content-items{
    position: relative;
  }
  .content-items:before,
  .content-items:after{
    position: absolute;
    content: "";
    transition: all .25s;
  }

  .content-items:before{
    border-bottom: 4px solid #faca3f;
    border-left: 4px solid #faca3f;
    width: 5%;
    height: 20%;
    left: -10px;
    bottom: -10px;
  }

  .content-items:after{
    border-top: 4px solid #faca3f;
    border-right: 4px solid #faca3f;
    width: 5%;
    height: 20%;
    top: -10px;
    right: -10px;
  }

  @media (max-width: 1263px) {
    .content-items:after{
      display: none;
    }
    .content-items:before{
      display: none;
    }
    .item-info{
      margin-bottom: 2rem;
      .text{
        padding: 0 1rem;
      }
      &::before{
        position: absolute;
        content: "";
        transition: all .25s;
        border-bottom: 4px solid #faca3f;
        border-left: 4px solid #faca3f;
        width: 5%;
        height: 20%;
        left: -10px;
        bottom: -10px;
      }
      &::after{
        position: absolute;
        content: "";
        transition: all .25s;
        border-top: 4px solid #faca3f;
        border-right: 4px solid #faca3f;
        width: 5%;
        height: 20%;
        top: -10px;
        right: -10px;
      }
    }
    .banner-servicios{
      .banner{
        padding: 20px 2rem !important;
      }
    }
  }
  .item-info{
    text-align: center;
    position: relative;
  }
  .item-info .image{
    width: 100%;
  }
  .item-info .image img{
    transition: all 300ms;
  }
  .item-info .image img:hover {
    transform: translateY(-2px);
    box-shadow: 0 9px 22px rgba(0, 0, 0, 0.25), 0 4px 10px rgba(0, 0, 0, 0.22);
    border-radius: 20px;
  }

/* banner */

  .banner-servicios{
    background: #faca3f;
  }

  .banner-servicios .banner{
    text-align: center;
    color: #000;
    padding: 20px 0;
    font-weight: 600;
  }

  .banner-servicios .banner .b-title{
    font-size: 48px;
  }

  .banner-servicios .banner .b-sub-title{
    font-size: 24px;
  }

  .banner-servicios .banner .b-sub-title span{
    color: #fff;
    font-size: 30px;
  }

  .banner-servicios .banner .b-info{
    font-size: 15px;
  }


  /* obras */
  .content-obras-title{
    position: relative;
  }
  .content-obras-title .title-text{
    z-index: 1;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    padding-top: 15px;
  }

  .content-items-obras{
    z-index: 1;
  }
  .item-obras{
    background: #333;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.2);
    height: 450px;
    overflow: hidden;
    position: relative;
  }
  .item-obras:hover img{
    top: -10%;
    filter:  brightness(65%) grayscale(100%);
  }
  .item-obras:hover .text{
    bottom: 0;
  }
  .item-obras img{
    bottom: 0;
    filter: brightness(100%);
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.5s ease-in-out;
    width: 115%;
    height: 115%;
  }
  .item-obras .text{
    bottom: -17%;
    padding: 15px;
    position: absolute;
    transition: 0.5s ease-in-out;
    background: rgb(0,0,0,0.6);
    width: 100%;
  }
  .item-obras .text .info-title{
    font-size: 20px;
    color: #fff;
    display: inline-block;
    font-weight: 300;
    margin-bottom: 5px;
    position: relative;
  }
  .item-obras .text .info-obra{
    color: #fff;
    font-weight: 300;
  }
  .content-btn-mobras{
    width: 100%;
    text-align: center;
  }
  .content-btn-mobras button{
    min-width: 350px !important;
    max-width: 100%;
    height: 60px !important;
  }  

  @media (max-width: 587px) {
    .item-obras img{
      width: 100%;
    }
  }
</style>