<template>
<<<<<<< HEAD
  <v-app>
<Pag1/>
    <v-main>
    </v-main>
  </v-app>
</template>


<script>
import Pag1 from './views/Pag1.vue'
export default {
  components: {
    Pag1
  }
}
</script>

=======
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
>>>>>>> d217600c0378bc9f6ddd0f921afdc9d9d2bc2de4
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
