<template>
  <v-card id="dfd" width="500" class="mx-auto mt-12 py-10 px-5 green lighten-5">
    <v-card-title class="d-flex justify-center pb-12">
      <h1 class="font-weight-light">Sign In</h1>
    </v-card-title>
    <v-card-text>
      <LoginForm @login="login" />
    </v-card-text>
  </v-card>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue"
import { mapActions } from "vuex";

export default {
  name: "Home",

  components: {
    LoginForm
  },

  methods: {
    ...mapActions("auth", ["signIn"]),

    login(formData) {
      this.signIn(formData)
    }
  }
}
</script>

<style lang="scss">
</style>