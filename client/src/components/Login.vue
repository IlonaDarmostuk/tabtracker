<template>
  <v-row>
    <v-spacer />
    <v-col col="6" >
      <div class="white elevation-2" >
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="password"
            v-model="password"
          ></v-text-field>
          <br>
          <div v-html="error" class="error"></div>
          <v-btn class="cyan" dark @click="login">login</v-btn>
        </div>
      </div>
    </v-col>
    <v-spacer />
  </v-row>
</template>
<script>
import AuthenticationService from '../../services/AuthenticationService'
export default {
  data () {
    return {
      email: 'abc',
      password: '123',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        console.log(response)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error{
    color: red;
  }
  .toolbar-title{
    color: white;
  }
</style>
