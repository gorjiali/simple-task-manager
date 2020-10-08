<template>
  <v-toolbar dense>
    <v-toolbar-title>Simple Task Manager</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" icon @click="exit">
          <v-icon color="error">mdi-export</v-icon>
        </v-btn>
      </template>
      <span>log out</span>
    </v-tooltip>
  </v-toolbar>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('auth', ['logout']),

    exit() {
      this.logout()
    }
  },
}
</script>

<style>
</style>