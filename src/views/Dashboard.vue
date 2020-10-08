<template>
  <div>
    <AppHeader />
    <v-card class="mx-auto mt-5" width="90%" v-if="!!tasks">
      <v-toolbar flat color="teal" dark>
        <v-toolbar-title>Tasks and Subtasks</v-toolbar-title>
      </v-toolbar>

      <v-list>
        <v-list-group
          :ripple="false"
          v-for="task in tasks"
          :key="task.id"
          @click="rowClick(task)"
          active-class="active-class"
          no-action
        >
          <template v-slot:activator>
            <TaskItem :item="task" />
          </template>

          <div v-if="subtaskOfTask(task.id)">
            <v-list-item
              class="pl-12 subtask-item"
              v-for="subtask in subtaskOfTask(task.id)"
              :key="subtask.id"
            >
              <TaskItem :item="subtask" />
            </v-list-item>

            <v-list-item
              v-if="authenticatedUser.role === 'employee'"
              class="pl-12 subtask-item"
              ><AddTaskForm :taskId="task.id"
            /></v-list-item>
          </div>
          <div class="text-center mt-12" v-else>
            <v-progress-circular
              indeterminate
              color="teal"
            ></v-progress-circular>
          </div>
        </v-list-group>
        <v-list-item v-if="authenticatedUser.role === 'admin'"
          ><AddTaskForm
        /></v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import AddTaskForm from '@/components/AddTaskForm.vue';
import AppHeader from '@/components/AppHeader.vue';
import TaskItem from '@/components/TaskItem.vue';
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: "Dashboard",

  components: {
    AddTaskForm,
    TaskItem,
    AppHeader
  },

  computed: {
    ...mapState({
      tasks: state => state.task.all,
      authenticatedUser: state => state.auth.authenticatedUser
    }),
    ...mapGetters('subtask', ['subtaskOfTask'])
  },

  methods: {
    ...mapActions('task', ['getAllTasks']),
    ...mapActions('subtask', ['getSubtasksOfTask']),

    rowClick(item) {
      this.getSubtasksOfTask(item.id);
    }
  },

  created() {
    this.getAllTasks();
  }
}
</script>

<style lang="scss">
.active-class,
.subtask-item {
  background-color: #e7e7e7;
}
</style>