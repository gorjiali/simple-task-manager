<template>
  <div class="invisibleWrapper">
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-list-item-icon v-on="on">
          <v-icon :color="getState(item.state).color">{{
            getState(item.state).icon
          }}</v-icon>
        </v-list-item-icon>
      </template>
      <span>{{ getState(item.state).tooltip }}</span>
    </v-tooltip>
    <v-list-item-content class="d-flex">
      <v-list-item-title>
        {{ item.description }}
        <v-menu v-if="rolePermission" bottom offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon color="primary" class="ml-3" v-on="on" @click.stop=""
              ><v-icon small>mdi-pencil</v-icon></v-btn
            >
          </template>
          <v-list dense class="py-0">
            <v-list-item class="teal" dark>
              <v-list-item-title>change state to</v-list-item-title>
            </v-list-item>
            <v-list-item
              v-for="state in changeStateList"
              :key="state"
              @click="changeState(state)"
            >
              <v-list-item-title>{{ state }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item-title>
    </v-list-item-content>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapState({
      authenticatedUser: state => state.auth.authenticatedUser
    }),

    rolePermission() {
      if (this.authenticatedUser.role === 'admin' && !this.item.taskId || this.authenticatedUser.role === 'employee' && this.item.taskId) return true
      return false
    },

    changeStateList() {
      const stateArray = ['done', 'pending', 'doing'];
      return stateArray.filter(state => state !== this.item.state)
    }
  },

  methods: {
    ...mapActions('task', ['updateTask']),
    ...mapActions('subtask', ['updateSubtask']),

    getState(state) {
      switch (state) {
        case 'done': return { color: 'success', icon: 'mdi-check-circle-outline', tooltip: 'Done' };
        case 'doing': return { color: 'orange', icon: 'mdi-clock-check-outline', tooltip: 'Doing' };
        case 'pending': return { color: 'error', icon: 'mdi-clock-alert-outline', tooltip: 'Pending' };
      }
    },

    changeState(state) {
      if (this.item.taskId) {
        this.updateSubtask({ id: this.item.id, state })
      } else {
        this.updateTask({ id: this.item.id, state })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.invisibleWrapper {
  display: contents;
}
</style>