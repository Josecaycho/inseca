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
        <v-tab v-for="obra in obras" :key="obra.id" :value="obra.id" align-tabs="title">{{obra.name}}</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item
          v-for="obra in obras"
          :key="obra.id - 1"
          :value="obra.id - 1"
          :id="obra.id"
        >
          <v-container fluid>
            <v-row class="it-obra">
              <v-col
                v-for="i in 4"
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
                        <h2>Instalacion {{obra.name}} en mi casa </h2>
                        <div>
                          <h5>Cliente</h5>
                          <h3>Mi casa</h3>
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
      obras: [
        {id: 1 , 'name': 'Electricas' },
        {id: 2 , 'name': 'Sanitarias' },
        {id: 3 , 'name': 'Gas Natural' },
        {id: 4 , 'name': 'Construccion'},
        {id: 5 , 'name': 'Demolicion'}
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