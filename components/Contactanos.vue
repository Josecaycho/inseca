<template>
  <v-container id="contacto">
    <v-row class="content-obras-title">
      <v-col class="title-text mt-15">
        <span >CONTÁCTANOS</span>
      </v-col>
    </v-row>
    <div class="content-obras mb-15">
      <v-row>
        <v-col cols="12" lg="3">
          <div class="content-contact">
            <div class="item">
              <v-icon size="40" color="#faca3f">mdi-map-marker</v-icon>
              <div class="text">
                <div class="title">Dirección</div>
                <p>Av. avenida Mz C lote 44 , Lima - Perú</p>
              </div>
            </div>
            <div class="item">
              <v-icon size="40" color="#faca3f">mdi-phone</v-icon>
              <div class="text">
                <div class="title">Telefono</div>
                <p>(511) 000 – 0000 <br/> (511) 000 – 0000 </p>
              </div>
            </div>
            <div class="item">
              <v-icon size="40" color="#faca3f">mdi-email</v-icon>
              <div class="text">
                <div class="title">Email</div>
                <p>inseca@inseca.com</p>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="1">
          <div class="divider"></div>
        </v-col>
        <v-col cols="12" lg="8">
          <div class="content-message">
            <div class="title mb-6">Déjanos tus datos y pronto nos comunicaremos contigo</div>
            <div class="formulario">
              <v-text-field label="Nombre Completo" outlined></v-text-field>
              <v-text-field label="Email" outlined></v-text-field>
              <v-text-field label="Telefono" outlined></v-text-field>
              <v-textarea label="Mensaje" outlined></v-textarea>
              <v-btn outlined color="#faca3f" large>Enviar</v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  computed: {
    isMobile () {
      if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.width < 960)
        return true
      else return false
    },
  }
}
</script>

<style lang="scss">
  .content-contact {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100%;

    .item{
      text-align: center;
      padding: 5px;

      .text{
        .title{
          font-weight: 900;
        }
        p{
          color: #a5a5a5;
          font-weight: 700;
        }
      }
    }
  }

  .divider {
    width: 100%;
    height: 100%;
    position: relative;

    &:before {
      position: absolute;
      content: "";
      width: 10px;
      background: #faca3f;
      height: 100%;
      left: 50%;
    }
  }
</style>