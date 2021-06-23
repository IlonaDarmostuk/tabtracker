<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4" >
        <router-link tag="span" class="home"  :to="{name: 'songs'}">
            Tabtracker
        </router-link>
    </v-toolbar-title>

     <v-toolbar-items>
        <v-btn text  :to="{name: 'songs'}">
          Browse
        </v-btn>
      </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items dark>
      <v-btn v-if="!$store.state.isUserLoggedIn" text :to="{name: 'login'}">Login</v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" text :to="{name: 'register'}">sign up</v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" text @click="logout">Log out</v-btn>

    </v-toolbar-items>

  </v-toolbar>
</template>
<script>
export default {
  name: 'Header',
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'songs'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home:hover{
    cursor: pointer;
    color: darkgray;
  }
</style>
