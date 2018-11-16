<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">All</router-link>
      <router-link to="/active">Active</router-link>
      <router-link to="/completed">Completed</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  --dark-brand-color: rgba(37, 76, 99, 1);
  --light-brand-color: rgba(108, 178, 206, 1);

  * {
    font-family: "Lato", sans-serif;
  }
}
</style>
