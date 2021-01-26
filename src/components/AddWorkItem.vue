<template>
  <form>
    <input
      type="text"
      placeholder="Enter new work item title"
      v-model="newWorkItem.title"
    />
    <button @click.prevent="add()" >add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newWorkItem: {
          title: '',
          state: 'new'
      },
    };
  },

  methods: {
    add() {
        if (this.newWorkItem.title === '') return alert('Enter title!!');
        this.$store.dispatch('addNewWorkItem', this.newWorkItem);
    },
  },
};
</script>

<style>
</style>