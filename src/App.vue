<template>
  <main id="app">
    <header></header>
    <div class="contents">
      <nav id="nav">
        <router-link to="/">All</router-link>
        <router-link to="/active">Active</router-link>
        <router-link to="/completed">Completed</router-link>
      </nav>
      <router-view/>
    </div>
  </main>
</template>

<style lang="scss" scoped>
#app {
  --light-brand-color: rgba(108, 178, 206, 1);
  --medium-brand-color: rgba(45, 156, 201, 1);
  --dark-brand-color: rgba(37, 76, 99, 1);
  --light-grey-color: rgba(249, 249, 249, 1);
  --medium-grey-color: rgba(37, 76, 99, 1);

  * {
    font-family: "Lato", sans-serif;
  }
}
</style>
