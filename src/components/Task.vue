<template>
  <div>
    <input type="checkbox"
           v-bind:id="id"
           v-on:change="switchTaskCompleted"/>
    <label v-bind:for="id"
           v-bind:class="{ 'longpressed': longpressed }"
           v-on:mousedown="mousedown"
           v-on:mouseup="mouseup"
           v-on:click="click">
      <span v-bind:contenteditable="longpressed">{{ task.title }}</span></label>
    <button v-on:click="deleteTask">Delete</button>
  </div>
</template>

<script>
let deleteTimer;

export default {
  name: "Task",
  props: {
    task: {}
  },
  data() {
    return {
      id: null,
      longpressed: false
    };
  },
  mounted() {
    this.id = `input_${Math.random() * 1000000}`;
  },
  methods: {
    switchTaskCompleted() {
      this.$store.commit("switchTaskCompleted", this.task.id);
    },
    deleteTask() {
      this.$store.commit("deleteTask", this.task.id);
    },
    mousedown() {
      deleteTimer = window.setTimeout(() => {
        this.longpressed = !this.longpressed;
      }, 1000);
    },
    mouseup() {
      window.clearTimeout(deleteTimer);
    },
    click(event) {
      if (this.longpressed) {
        event.preventDefault();
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
