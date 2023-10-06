<template>
  <v-container fluid class="pt-3">
    <v-row justify="center">
      <v-col
        v-if="isMobile"
        class="pa-0 mt-1 mb-5"
        cols="12"
        sm="12"
        md="6"
        xl="6"
        lg="6"
      >
        <slot name="sidebar" />
      </v-col>
      <v-col
        v-if="isTablet"
        class="pa-0 pt-xl-0 pt-lg-0 pt-md-0 pa-md-6 pa-lg-6 pa-xl-6 d-flex justify-end"
        cols="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
      >
        <v-col class="pa-0" cols="12" md="12" lg="11">
          <slot name="body" />
        </v-col>
      </v-col>
      <v-col v-if="!isMobile" class="pa-0 pt-md-6 mr-md-6 pa-lg-6" md="4" lg="5" xl="5">
        <slot name="sidebar" />
      </v-col>
      <v-col
        v-if="!isTablet"
        class="pa-0 pt-xl-0 pt-lg-0 pt-md-0 pa-md-6 pa-lg-6 pa-xl-6 d-flex justify-end"
        cols="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
      >
        <v-col class="pa-0" cols="12" md="12" lg="11">
          <slot name="body" />
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'XLayaout',
  computed: {
    // isMobile () {
    //   return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.width < 960
    // },
    isMobile () {
      if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.width < 960)
        return true
      else return false
    },
    isTablet () {
      if (this.$vuetify.breakpoint.width >= 960)
        return true
      else return false
    }
  },
  methods: {}
}
</script>
<style scoped>
</style>
