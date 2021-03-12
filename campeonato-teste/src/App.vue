<template>
<<<<<<< HEAD
  <v-app>
    <AppToBar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppTopBar from './components/shared/AppTopBar.vue'
export default {
  name: 'App',
  components:{
    AppTopBar
  }
}
</script>
=======
  <div id="app">
    <router-view/>
  </div>
</template>


>>>>>>> 27a5a7e4ca787658b15c93a4d2844d08fd4cd811
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
