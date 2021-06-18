<template>
  <v-row>
    <v-spacer/>
    <v-col col="6" >
           <panel title="Register">
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
           </panel>
    </v-col>
    <v-spacer/>
  </v-row>

</template>
<script>
import AuthenticationService from '../../services/AuthenticationService'
import Panel from './Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
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
  },
  components: {
    Panel
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
