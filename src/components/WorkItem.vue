<template>
  <div class="work-item">
      <span>work item title</span>
      <select name="workItemState">
          <option value="new">New</option>
          <option value="active">Active</option>
          <option value="pendedReview">Pended Review</option>
          <option value="resolved">Resolved</option>
      </select>
  </div>
</template>

<script>
export default {

}
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