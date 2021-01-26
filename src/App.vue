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
@font-face {
  font-family: vazir;
  src: url('~@/assets/font/Vazir-FD.woff2');
}
* {
  font-family: vazir;
  font-size: 12px;
  box-sizing: border-box;
}
body {
  background-color: #f0f0ff;
  padding: 10px;
}
#app {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 75%
}
.work-items-lists {
  display: flex;
  margin-top: 10px;
}

@media only screen and (max-width: 1300px) {
  #app {
    width: 90%
  }
}


@media only screen and (max-width: 1200px) {
  #app {
    width: 95%
  }
@media only screen and (max-width: 1000px) {
  #app {
    width: 100%
  }
}
}
</style>
