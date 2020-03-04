<template>
  <div id="app">
    <nav>
        <router-link to="/">首页</router-link>

        <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  margin: 10px;
  a{
    margin-left:10px;
    padding:10px;
    text-decoration: none;
  }
  .router-link-exact-active {
    background:#08c;
    color:#fff;
  }
}
</style>
