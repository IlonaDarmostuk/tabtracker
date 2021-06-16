<template>
  <div id="app">
    <v-app>
      <Header></Header>

      <v-main>
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
