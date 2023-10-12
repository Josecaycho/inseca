<template>
  <v-carousel
    cycle
    :height="heigth"
    hide-delimiters
    :show-arrows="true"
  >
    <v-carousel-item
      v-for="(slide, i) in src"
      :key="i"
      :src="imgRender(slide.img)"
      cover
    >
      <div class="title-carousel">
        {{slide.title}}
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        src: [
          {img: 'gas.jpg', title: 'Instalaciones de Gas'},
          {img: 'electricas.jpg', title: 'Instalaciones Electricas'},
          {img: 'sanitarias.jpg', title: 'Instalaciones Sanitarias y griferias'}
        ]
      }
    },
    computed: {
      heigth () {
        let altura = window.screen;
        return altura.height
      }
    },
    methods: {
      imgRender (value) {
        return require(`@/assets/${value}`)
      }
    },
  }
</script>

<style lang="css">
  .title-carousel{
    font-size: 50px;
    font-weight: bold;
    position: absolute;
    right: 7rem;
    bottom: 7rem;
    color: #faca3f;
    padding: 10px 30px;
    width: 600px;
    max-width: 100%;
    background: rgb(0,0,0,0.7);
    text-align: center;
    border-radius: 20px;
  }
  .title-carousel:before {
    content: '';
    width: 0;
    height: 0;
    border-right: 15px solid transparent;
    border-top: 15px solid transparent;
    border-left: 15px solid #f0ad4e;
    border-bottom: 15px solid #f0ad4e;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .title-carousel:after {
    content: '';
    width: 0;
    height: 0;
    border-right: 15px solid #f0ad4e;
    border-top: 15px solid #f0ad4e;
    border-left: 15px solid transparent;
    border-bottom: 15px solid transparent;
    position: absolute;
    right: 0;
    top: 0;
  }
   @media (max-width: 587px) {
    .title-carousel{
      right: 0;
      font-size: 35px;
      bottom: 9rem;
    }
   }
</style>