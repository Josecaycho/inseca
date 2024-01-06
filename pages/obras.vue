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
                md="4"
                class="col-item"
              >
                <div class="info-obra">
                  <img class="img-obra" src="@/assets/Cableado.jpg" alt="" width="100%">
                  <div class="info-item">
                    <div class="info">
                      <div class="d-flex justify-start align-center mb-1"> <v-icon class="mr-1" color="#faca3f">mdi-city</v-icon> <h2>{{obra.proyecto}} </h2></div>
                      <div class="info-text d-flex justify-space-between">
                        <div class="d-flex justify-start align-center mb-1"><v-icon class="mr-1" color="#faca3f">mdi-account-tie</v-icon> <h4>{{obra.cliente}}</h4></div>
                        <div class="d-flex justify-start align-center mb-1"><v-icon class="mr-1" color="#faca3f">mdi-map-marker</v-icon> <span>{{obra.ubicacion}}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
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
import json from '../json/obras.json'

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
      items: json
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
      margin-bottom: 50px;
    }
    .info-obra{
      position: relative;
      .info-item{
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 10px;
        position: absolute;
        bottom: 0;
        background: white;
        width: 100%;

        .info{
          background-color: transparent !important;
          width: 100%;
        }
      }
    }
  }
}
@media (max-width: 587px) {
  .obras{
    margin: 0;
    .it-obra {
      margin: 0 !important;
      padding: 0;
      .info-obra{
        .info-item{
          .info {
            .info-text {
              display: block !important;
            }
          }
        }
      }
    }
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