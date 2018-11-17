<template>
  <div>
    <TasksList v-bind:showCompletedStatus="false"/>
    <FloatingButton/>
  </div>
</template>

<script>
// @ is an alias to /src
import TasksList from "@/components/TasksList.vue";
import FloatingButton from "@/components/FloatingButton.vue";

export default {
  name: "home",
  components: {
    TasksList,
    FloatingButton
  }
};
</script>
