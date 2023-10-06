<template>
  <div class="banner">
      <img src="@/assets/banner.png" alt="" width="100%">
      <div class="banner-text">
        {{title}}
      </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    }
  }
}
</script>

<style lang="scss">
  .banner {
    width: 100%;
    position: relative;
    .banner-text {
      position: absolute;
      font-size: 65px;
      color: #fff;
      top: 20%;
      left: 8%;
      font-weight: 700;
    }
  }
</style>