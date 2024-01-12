<template>
  <section>
    <Banner title="Clientes" />
    <div class="clientes">
      <v-row>
        <v-col class="mb-5 mt-5" cols="12" lg="3" md="4" v-for="(item, i) in items" :key="i">
          <div class="content-client" >
            <img :src="imgRender(item)" alt="" width="300" :style="`background:${item.color}`">
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import Banner from '@/components/Banner.vue'
import json from '../json/clientes.json'

export default {
  name: 'clientes',
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
    imgRender (value) {
      return require(`@/assets/clientes/${value.name}.${value.formato}`)
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
.clientes{
  margin: 50px 80px;
  .content-client{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    img{ 
      padding: 20px;
      border-radius: 25px;
    }
  }
}
</style>