import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    addTask(state, title) {
      state.tasks.push({
        id: `task_${Math.random() * 1000000}`,
        title: title,
        completed: false
      });
    },
    switchTaskCompleted(state, id) {
      const index = state.tasks.findIndex(task => task.id === id);

      state.tasks[index].completed = !state.tasks[index].completed;

      console.log(state.tasks);
    },
    deleteTask(state, id) {
      const index = state.tasks.findIndex(task => task.id === id);

      state.tasks.splice(index, 1);

      console.log(state.tasks);
    }
  },
  actions: {}
});
