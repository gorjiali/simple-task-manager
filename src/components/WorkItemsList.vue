<template>
  <div class="list">
    <WorkItem
      v-for="item in items"
      :key="item.title + Math.random()"
      :item="item"
    />
  </div>
</template>

<script>
import WorkItem from "@/components/WorkItem";

export default {
  props: {
    type: String,
  },

  components: {
    WorkItem,
  },

  computed: {
    items() {
      return this.$store.state.workItems.filter(
        (item) => item.state === this.type
      );
    },
  },
};
</script>

<style scoped>
.list {
  border-right: 1px solid black;
  border-left: 1px solid black;
  padding: 5px;
  background-color: #e6e4e4;
  display: flex;
  flex-direction: column;
}
</style>