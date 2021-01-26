<template>
  <div
    class="container drop-zone"
    @drop="onDrop($event, type)"
    @dragover.prevent
    @dragenter.prevent
  >
    <span>{{ typesList.find((item) => item.enName === type).faName }}</span>
    <div class="list">
      <WorkItem
        v-for="item in items"
        :key="item.title + Math.random()"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import WorkItem from "@/components/WorkItem";

export default {
  props: {
    type: String,
  },

  data() {
    return {
      typesList: [
        { enName: "new", faName: "جدید" },
        { enName: "active", faName: "فعال" },
        { enName: "pendedReview", faName: "در انتظار بررسی" },
        { enName: "resolved", faName: "بسته شده" },
      ],
    };
  },

  components: {
    WorkItem,
  },

  methods: {
    onDrop(evt, listType) {
      const item = evt.dataTransfer.getData("item");
      this.$store.dispatch("changeWorkItemState", { ...JSON.parse(item), state: listType});
    },
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
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: white;
  margin: 0 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: calc(100vh - 100px);
}
.container span {
  background-color: gray;
  color: white;
  padding: 10px;
  font-size: 17px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.list {
  padding: 5px;
  display: flex;
  flex-direction: column;
}
</style>