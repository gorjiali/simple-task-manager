<template>
  <div id="app">
    <AddWorkItem />
    <div class="work-items-lists">
      <WorkItemsList type="new" />
      <WorkItemsList type="active" />
      <WorkItemsList type="pendedReview" />
      <WorkItemsList type="resolved" />
    </div>
  </div>
</template>

<script>
import WorkItemsList from "@/components/WorkItemsList";
import AddWorkItem from "@/components/AddWorkItem";

export default {
  name: "App",
  components: {
    WorkItemsList,
    AddWorkItem
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
}
.work-items-lists {
  display: flex;
}
</style>
