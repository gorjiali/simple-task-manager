<template>
  <div class="list">
      <WorkItem />
      <WorkItem />
      <WorkItem />
      <WorkItem />
  </div>
</template>

<script>
import WorkItem from '@/components/WorkItem'

export default {
    components: {
        WorkItem
    }
}
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