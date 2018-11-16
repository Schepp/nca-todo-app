<template>
    <ul>
        <li v-for="task in tasks"><Task v-bind:task="task"/></li>
    </ul>
</template>

<script>
    // @ is an alias to /src
    import Task from "@/components/Task.vue";

    export default {
        name: "TasksList",
        components: {
            Task,
        },
        props: {
            showCompletedStatus: undefined,
        },
        computed: {
            tasks: function() {
                return this.$store.state.tasks.filter(task => this.showCompletedStatus === undefined || task.completed === this.showCompletedStatus);
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
