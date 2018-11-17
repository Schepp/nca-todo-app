<template>
  <div>
    <button v-on:click="showForm">Create new Todo</button>
    <form action="#void" v-show="formVisible" v-on:submit="createTask">
      <input ref="newTaskInput"/>
    </form>
  </div>
</template>

<script>
export default {
  name: "FloatingButton",
  data: function() {
    return {
      formVisible: false,
      newTaskTitle: ""
    };
  },
  methods: {
    showForm() {
      this.formVisible = true;
    },
    createTask(event) {
      const input = this.$refs.newTaskInput;
      this.$store.commit("addTask", input.value);
      this.formVisible = false;

      input.value = "";
      event.preventDefault();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
