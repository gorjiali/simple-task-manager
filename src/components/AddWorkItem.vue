<template>
  <form class="form">
    <input
      type="text"
      placeholder="عنوان تسک جدید را وارد کنید"
      v-model="newWorkItem.title"
    />
    <button @click.prevent="add()" >افزودن</button>
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
        if (this.newWorkItem.title === '') return alert('عنوان تسک را وارد کنید!');
        this.$store.dispatch('addNewWorkItem', this.newWorkItem);
    },
  },
};
</script>

<style scoped>
.form {
  margin-bottom: 10px;
}
.form input {
  padding:6px 5px;
  border-radius: 3px;
  margin:0px 8px;
  border: 1px solid gray;
  width: 320px;
}

.form button {
  cursor: pointer;
  padding: 6px 15px;
  border-radius: 3px;
  border: 1px solid gray;
  background-color: limegreen;
  color: white;
}
</style>