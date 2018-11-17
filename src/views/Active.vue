<template>
  <div>
    <TasksList v-bind:showCompletedStatus="false"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TasksList from "@/components/TasksList.vue";

export default {
  name: "active",
  components: {
    TasksList
  }
};
</script>
