<template>
        <v-row>
          <v-spacer />
          <v-col col="6" >
            <div class="white elevation-2" >
              <v-toolbar flat dense class="cyan" dark>
                <v-toolbar-title>Register</v-toolbar-title>
              </v-toolbar>

              <div class="pl-4 pr-4 pt-2 pb-2">
                <form autocomplete="off" name="tab-tracker-form">
                  <v-text-field
                    label="email"
                    v-model="email"
                  ></v-text-field>
                  <br>
                  <v-text-field
                    label="password"
                    type="password"
                    autocomplete="new-password"
                    v-model="password"
                  ></v-text-field>
                  <br>
                  <div v-html="error" class="error"></div>
                  <v-btn class="cyan" dark @click="register">register</v-btn>
                </form>
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
      email: '',
      password: '',
      error: null
    }
  },
  // watch: {
  //   email (value) {
  //     console.log('email has been changed', value)
  //   }
  // },
  // mounted () {
  //   setTimeout(() => {
  //     this.email = 'helloworld'
  //   }, 2000)
  // },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
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
