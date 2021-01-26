<template>
  <div id="app">
    <WorkItemsList />
    <WorkItemsList />
    <WorkItemsList />
    <WorkItemsList />
  </div>
</template>

<script>
import WorkItemsList from '@/components/WorkItemsList';

export default {
  name: 'App',
  components: {
    WorkItemsList
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: row;
}
</style>
