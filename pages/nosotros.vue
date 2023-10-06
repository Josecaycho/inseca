<template>
  <section>
    <Banner title="Nosotros" />
    <v-container>
      <v-row  class="section">
        <v-col cols="12" lg="5" class="d-flex justify-center align-center">
          <div>
            <div class="n-title">Nosotros</div>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat.
                Mauris in aliquam sem fringilla ut morbi tincidunt.
                Aenean sed adipiscing diam donec adipiscing tristique.
                Sed augue lacus viverra vitae congue.
                Dis parturient montes nascetur ridiculus.
                Tincidunt augue interdum velit euismod in.
                Faucibus interdum posuere lorem ipsum dolor sit amet.
                Quis blandit turpis cursus in hac habitasse platea dictumst quisque.
                Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum.
                Ornare quam viverra orci sagittis eu volutpat odio facilisis.
                Varius vel pharetra vel turpis nunc eget lorem dolor.
                Sit amet commodo nulla facilisi nullam vehicula ipsum a.
              </span>
            </div>
        </v-col>
        <v-col cols="12" lg="7">
          <div class="n-img">
            <img src="@/assets/ingenieros.avif" alt="" width="100%">
          </div>
        </v-col>
      </v-row>
    </v-container>
    <section class="sec-nos">
      <v-row class="section">
        <v-col cols="12" lg="4">
          <div class="ct-vt">
            <div class="text">
              Sed augue lacus viverra vitae congue.
            </div>
            <v-icon size="100" class="icon-arrow">mdi-arrow-up-thin</v-icon>
            <div class="icon">
              <div class="content-icon">
                <v-icon size="50">mdi-eye-outline</v-icon>
                <h2>Vision</h2>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="4">
          <div class="ct-vt">
            <div class="icon">
              <div class="content-icon bt">
                <v-icon size="50">mdi-account-hard-hat</v-icon>
                <h2>Mision</h2>
              </div>
            </div>
            <v-icon size="100" class="icon-arrow">mdi-arrow-down-thin</v-icon>
            <div class="text">
              Sed augue lacus viverra vitae congue.
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="4">
          <div class="ct-vt">
            <div class="text">
              Sed augue lacus viverra vitae congue.
            </div>
            <v-icon size="100" class="icon-arrow">mdi-arrow-up-thin</v-icon>
            <div class="icon">
              <div class="content-icon">
                <v-icon size="50">mdi-format-list-group-plus</v-icon>
                <h2>Valores</h2>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </section>
    <v-container>
      <v-row class="section">
        <v-col cols="12" lg="12">
          <div class="title-cert">Certificaciones</div>
        </v-col>
        <v-col cols="12" lg="12">
          <v-row>
            <v-col cols="12" lg="6">
              <v-row class="item-cert pa-6">
                <v-col cols="12" lg="7">
                  <div class="cont-cert">
                    <h2 class="mb-4">CERTIFICACIÓN ISO 9001:2015</h2>
                    <span class="font-weight-bold">Certificación del Sistema de Gestión de Calidad</span>
                  </div>
                </v-col>
                <v-col cols="12" lg="5" class="img-cert">
                  <img src="@/assets/certificacion.jpg" alt="">
                </v-col>
                <v-col cols="12" lg="12">
                  <div class="det-cert">
                    Se centra en todos los elementos de administración de calidad necesarios para administrar y mejorar la calidad de los productos o servicios ofrecidos.
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" lg="6">
              <v-row class="item-cert pa-6">
                <v-col cols="12" lg="7">
                  <div class="cont-cert">
                    <h2 class="mb-4">CERTIFICACIÓN ISO 9001:2015</h2>
                    <span class="font-weight-bold">Certificación del Sistema de Gestión de Calidad</span>
                  </div>
                </v-col>
                <v-col cols="12" lg="5" class="img-cert">
                  <img src="@/assets/certificacion.jpg" alt="">
                </v-col>
                <v-col cols="12" lg="12">
                  <div class="det-cert">
                    Se centra en todos los elementos de administración de calidad necesarios para administrar y mejorar la calidad de los productos o servicios ofrecidos.
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import Banner from "@/components/Banner.vue"
export default {
  name: 'nosotros',
  components: {
    Banner
  },
  layout () {
    return 'desktop'
  },
}
</script>

<style lang="scss">
  .section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  .n-title {
    font-size: 50px;
    border-bottom: 2px solid #faca3f;
    padding-bottom: 10px;
    width: 100%;
    margin-bottom: 20px;
  }
  .n-img{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sec-nos{
    background: #faca3f;
  }
  .ct-vt{
    text-align: center;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .content-icon {
        padding: 25px;
        border-radius: 50%;
        border-top: 3px solid rgb(0,0,0,0.6);
        border-left: 2px solid rgb(0,0,0,0.5);
        border-right: 2px solid rgb(0,0,0,0.5);
        border-bottom: 2px solid transparent;
        width: 150px;
        height: 150px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        &.bt{
          border-bottom: 2px solid rgb(0,0,0,0.5);
          border-top: 2px solid transparent;
          &:before {
            content: '';
            position: absolute;
            width: 180px;
            height: 120%;
            border-bottom: 4px solid transparent;
            border-left: 4px solid #fff;
            border-right: 4px solid #fff;
            border-top: 5px solid #fff;
            border-radius: 50%;
          }
        }
        &:before {
          content: '';
          position: absolute;
          width: 180px;
          height: 120%;
          border-bottom: 5px solid #fff;
          border-left: 4px solid #fff;
          border-right: 4px solid #fff;
          border-top: 4px solid transparent;
          border-radius: 50%;
        }
      }
    }
    .text{
      width: 100%;
      padding: 25px;
      font-size: 20px;
    }
  }
  .title-cert{
    font-size: 50px;
    padding-bottom: 10px;
    width: 100%;
    margin-bottom: 20px;
    text-align: center;
  }
  .item-cert{
    border-left: 1px solid #faca3f;
  }
  .img-cert{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  @media (max-width: 587px) {
    .ct-vt{
      display: flex;
      margin-bottom: 1rem;
      padding: 20px;
      gap: 15px;
      justify-content: center;
      align-items: center;
      .icon-arrow{
        display: none;
      }
    }
    .item-cert{
      border-bottom: 1px solid #faca3f;
    }
    .img-cert{
      justify-content: center;
    }
    .cont-cert{
      text-align: center;
    }
    .det-cert{
      text-align: center;
    }
  }
</style>