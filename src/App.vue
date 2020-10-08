<template>
  <v-app>
    <SpinnerOverlay />
    <router-view></router-view>
  </v-app>
</template>

<script>
import SpinnerOverlay from '@/components/SpinnerOverlay.vue'

export default {
  name: 'App',

  components: {
    SpinnerOverlay
  }
};
</script>
