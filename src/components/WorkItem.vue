<template>
  <div class="work-item drag-el" draggable @dragstart="startDrag($event, workItem)">
    <span>{{ workItem.title }}</span>
    <select
      name="workItemState"
      @change="changeState()"
      v-model="workItem.state"
    >
      <option value="new">جدید</option>
      <option value="active">فعال</option>
      <option value="pendedReview">در انتظار بررسی</option>
      <option value="resolved">بسته شده</option>
    </select>

    <button @click.prevent="remove()">حذف</button>
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
    },
    startDrag(evt, workItem) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("item", JSON.stringify(workItem));
    },
  },
};
</script>

<style scoped>
.work-item {
  border: 1px solid #d5d5d5;
  background-color: #ebe9e9;
  margin: 10px;
  padding: 10px;
  box-shadow: 1px 2px 1px 2px #bdbcbc;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
}
.work-item span {
  font-size: 13px;
  font-weight: bold;
}
.work-item select {
  padding: 3px 1px;
  border: 1px solid gray;
  border-radius: 2px;
  margin: 10px 0;
  cursor: pointer;
}
.work-item button {
  width: 50%;
  cursor: pointer;
  margin-top: 10px;
  background-color: rgb(255, 114, 62);
  color: white;
  border: 1px solid gray;
  border-radius: 3px;
}
</style>