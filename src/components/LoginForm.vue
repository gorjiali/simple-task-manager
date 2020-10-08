<template>
  <v-form ref="form">
    <v-text-field
      v-model="email"
      :rules="emailRules"
      prepend-inner-icon="mdi-at"
      dense
      outlined
      label="email"
    ></v-text-field>
    <v-text-field
      v-model="password"
      type="password"
      :rules="requiredRule"
      prepend-inner-icon="mdi-lock"
      dense
      outlined
      label="password"
    ></v-text-field>
    <v-btn
      type="submit"
      @click.prevent="confirm"
      class="mt-4"
      width="100%"
      depressed
      large
      color="success"
    >
      sign in</v-btn
    >
  </v-form>
</template>

<script>
export default {
  data: () => ({
    requiredRule: [v => !!v || "required"],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    email: "",
    password: ""
  }),

  methods: {
    confirm() {
      if (this.$refs.form.validate()) {
        const { email, password } = this;
        this.$emit("login", { email, password });
      }
    }
  }
}
</script>

<style>
</style>