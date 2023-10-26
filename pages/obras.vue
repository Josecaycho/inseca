<template>
  <section>
    <Banner title="Obras" />
    <div class="obras">
      <v-tabs
        v-model="tab"
        color="deep-purple-accent-4"
        align-tabs="center"
        :show-arrows="false"
      >
        <v-tab v-for="item in items" :key="item.id" :value="item.id" align-tabs="title">{{item.name}}</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item
          v-for="item in items"
          :key="item.id - 1"
          :value="item.id - 1"
          :id="item.id"
        >
          <v-container fluid>
            <v-row class="it-obra">
              <v-col
                v-for="(obra, i) in item.obras"
                :key="i"
                cols="12"
                md="6"
                class="col-item"
              >
                <v-row>
                  <v-col cols="12" lg="6">
                    <img class="img-obra" src="@/assets/Cableado.jpg" alt="" width="100%">
                  </v-col>
                  <v-col cols="12" lg="6" class="info-obra">
                    <div class="info-item">
                      <div class="info">
                        <h2>{{obra.proyecto}} </h2>
                        <div>
                          <h5>{{obra.cliente}}</h5>
                          <h3>{{obra.ubicacion}}</h3>
                          <h3>{{obra.residente}}</h3>
                        </div>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
      </v-window>
    </div>
  </section>
</template>

<script>
import Banner from '@/components/Banner.vue'
export default {
  name: 'obras',
  components: {
    Banner
  },
  layout () {
    return 'desktop'
  },
  data() {
    return {
      tab: null,
      items: [
        {id: 1 , 'name': 'Año 2022', obras: 
          [{
            cliente: 'Amauta 2272 S.A.C',
            proyecto: 'Festiva',
            ubicacion: 'Brena',
            residente: 'ING. Jorge Zegarra'
          }] 
        },
        {id: 2 , 'name': 'Año 2021 - 2020', obras: 
          [{
            cliente: 'Maezztra S.A.C',
            proyecto: 'V ONE',
            ubicacion: 'Surquillo',
            residente: 'ING. Francisco Mejia'
          }] 
        },
        {id: 3 , 'name': 'Año 2019 - 2018', obras: 
          [{
            cliente: 'Inversiones en inmuebles lima s.a.c',
            proyecto: 'Boss',
            ubicacion: 'San Isidro',
            residente: 'ING. Darwin Lopez'
          }] 
        },
        {id: 4 , 'name': 'Año 2017', obras: 
          [{
            cliente: 'Camali construcciones s.a.c',
            proyecto: 'Asuncion',
            ubicacion: 'Los olivos',
            residente: 'ARQ. Mario Celiz'
          }]}
        ,
        {id: 5 , 'name': 'Año 2016', obras: 
          [{
            cliente: 'Camali construcciones s.a.c',
            proyecto: 'Caraz',
            ubicacion: 'Los olivos',
            residente: 'ING. Carlos Zevallos Rivero'
          }]}
        ,
        {id: 6 , 'name': 'Año 2015', obras: 
          [{
            cliente: 'Camali construcciones s.a.c',
            proyecto: 'Villa los angeles',
            ubicacion: 'Los olivos',
            residente: 'ARQ. Mario Celiz'
          }]}
        ,
        {id: 7 , 'name': 'Año 2014', obras: 
          [{
            cliente: 'PRomociones E Inversiones Nacionales s.a.c',
            proyecto: 'Mariscal Castilla',
            ubicacion: 'Miraflores',
            residente: 'Ing. Angelic Trujillo'
          }]}
        ,
        {id: 8 , 'name': 'Año 2013', obras: 
          [{
            cliente: 'Universidad Alas peruanas',
            proyecto: 'Facultad ING. Civil',
            ubicacion: 'Pachacamac',
            residente: 'ING. Carlos Galloso'
          }]}

      ]
    }
  },
  methods: {
    scrollItem (item) {
      window.scrollTo({
        top: document.getElementById(item).offsetTop - 110,
        left: 0,
        behavior: "smooth",
      })
    }
  },
}
</script>
<style lang="scss">
.v-slide-group{
  justify-content: center;
}
.v-slide-group__content{
  justify-content: center !important;
}
.obras{
  margin: 50px 80px;
  .mn-obras{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    font-size: 30px;
  }
  .it-obra{
    background: #f7f4f4;
    padding: 3rem 4rem;
    margin: 2rem 0;
    .title-obra{
      background: #faca3f;
      padding: 20px 3rem;
      border-radius: 25px;
      font-size: 20px;
    }
    .col-item{
      margin-bottom: 120px;
    }
    .info-obra{
      position: relative;
      .info-item{
        height: calc(100% - 100px);
        width: calc(100% - 50px);
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        padding: 10px;
        position: absolute;
        left: -30px;
        top: 55px;
        border: 5px solid #faca3f;
        border-radius: 15px;

        .info{
          background-color: #fff !important;
        }
      }
    }
  }
}
@media (max-width: 587px) {
  .obras{
    margin: 0;
  }
  .v-slide-group__prev, .v-slide-group__next {
    display: none !important;
  }
}
@media ( max-width : 1263px ){
  .col-item {
    margin-bottom: 60px !important;
    .info-obra {
      .info-item {
        position: initial !important;
        height: 100% !important;
        width: 100% !important;
      }
    }
  }
}
</style>