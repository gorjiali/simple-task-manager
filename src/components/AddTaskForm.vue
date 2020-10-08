<template>
  <v-list-item-content>
    <v-form ref="form">
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="description"
            :rules="requiredRule"
            label="description"
            dense
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-select
            v-model="state"
            :rules="requiredRule"
            dense
            outlined
            label="state"
            :items="stateItems"
          ></v-select>
        </v-col>
        <v-col cols="3">
          <v-btn
            type="submit"
            @click.prevent="add"
            width="100%"
            height="62%"
            depressed
            color="success"
            >Add</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </v-list-item-content>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    taskId: {
      type: String,
      default: null
    }
  },


  data: () => ({
    stateItems: ['done', 'pending', 'doing'],
    requiredRule: [v => !!v || "required"],
    description: '',
    state: null
  }),

  methods: {
    ...mapActions('subtask', ['addSubtask']),
    ...mapActions('task', ['addTask']),

    add() {
      const { state, description, taskId, addSubtask, addTask, resetForm } = this;
      if (this.$refs.form.validate()) {
        if (taskId) {
          addSubtask({ description, state, taskId }).then(res => resetForm());
        } else {
          addTask({ description, state }).then(res => resetForm());
        }
      }
    },

    resetForm() {
      this.state = null;
      this.description = '';
      this.$refs.form.resetValidation();
    }
  },
}
</script>

<style>
</style>