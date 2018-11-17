<template>
  <div>
    <TasksList v-bind:showCompletedStatus="true"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TasksList from "@/components/TasksList.vue";

export default {
  name: "completed",
  components: {
    TasksList
  }
};
</script>
