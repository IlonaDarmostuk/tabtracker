<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4" >
        <span class="home" @click="navigateTo({name: 'root'})">
            Tabtracker
        </span>
    </v-toolbar-title>
    <!--    TODO: implement me-->
    <!--       <v-toolbar-items>-->
    <!--        <v-btn text>Browse</v-btn>-->
    <!--      </v-toolbar-items>-->
    <v-spacer></v-spacer>
    <v-toolbar-items dark>
      <v-btn v-if="!$store.state.isUserLoggedIn" text @click="navigateTo({name: 'login'})">Login</v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" text @click="navigateTo({name: 'register'})">sign up</v-btn>

    </v-toolbar-items>

  </v-toolbar>
</template>
<script>
export default {
  name: 'Header',
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
