<template>
  <div class="work-item">
    <span>{{ workItem.title }}</span>
    <select
      name="workItemState"
      @change="changeState()"
      v-model="workItem.state"
    >
      <option value="new">New</option>
      <option value="active">Active</option>
      <option value="pendedReview">Pended Review</option>
      <option value="resolved">Resolved</option>
    </select>

    <button @click.prevent="remove()">delete</button>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },

  data() {
    return {
      workItem: { ...this.item },
    };
  },

  methods: {
    changeState() {
      this.$store.dispatch("changeWorkItemState", this.workItem);
    },
    remove() {
        this.$store.dispatch("deleteWorkItem", this.workItem.id);
    }
  },
};
</script>

<style scoped>
.work-item {
  border: 1px solid darkgrey;
  padding: 5px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
}
</style>