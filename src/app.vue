<template>
  <div id="app">
    <top-nav></top-nav>
    <div id="main-content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import TopNav from './components/nav/top-nav'
export default {
  components: { TopNav }
}
</script>

<style>
  #main-content {
    padding-top: 50px;
  }
</style>
