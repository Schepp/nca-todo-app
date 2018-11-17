<template>
  <div id="app">
    <main>
      <header>
        <img alt="todo mvc app" src="./assets/logo.svg">
      </header>
      <div class="contents">
        <nav id="nav">
          <router-link to="/">All</router-link>
          <router-link to="/active">Active</router-link>
          <router-link to="/completed">Completed</router-link>
        </nav>
        <router-view/>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
#app {
  --light-brand-color: rgba(108, 178, 206, 1);
  --medium-brand-color: rgba(45, 156, 201, 1);
  --dark-brand-color: rgba(37, 76, 99, 1);
  --light-grey-color: rgba(249, 249, 249, 1);
  --dark-grey-color: rgba(68, 72, 77, 1);

  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: var(--light-grey-color);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  * {
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
  }
}

main {
  filter: drop-shadow(10px 20px 10px rgba(0, 0, 0, 0.05));
}

header {
  position: relative;
  z-index: 1;
  max-width: 400px;
  background: linear-gradient(
    to bottom right,
    var(--dark-brand-color),
    var(--dark-brand-color) 50%,
    transparent 50%,
    transparent
  );

  &::before {
    content: "";
    display: block;
    padding-top: 56.25%;
  }
}

img {
  position: absolute;
  top: 33%;
  left: 20px;
  max-width: 40%;
  height: auto;
  transform: translateY(-50%);
}

.contents {
  position: relative;
  max-width: calc(100vw - 40px);
  margin: 20px;
  padding: 20px;
  background-color: white;

  &::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 100%;
    left: 0;
    display: block;
    padding-top: 56.25%;
    background: linear-gradient(
      to top right,
      white,
      white 50%,
      transparent 50%,
      transparent
    );
  }
}
nav {
  display: block;
  overflow: scroll;
  font-size: 37px;
  white-space: nowrap;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  &::-webkit-scrollbar {
    display: none;
  }
  a {
    scroll-snap-align: start;
    display: inline-block;
    margin-right: 30px;

    opacity: 0.1;
    text-decoration: none;
    &,
    &:visited {
      color: var(--medium-grey-color);
    }
    &:last-child {
      margin-right: 0;
    }
    &.router-link-exact-active {
      color: var(--medium-brand-color);
      opacity: 0.5;
    }
  }
}
</style>
