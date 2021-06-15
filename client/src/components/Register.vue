<template>
  <div class="">
  <h1>Register</h1>
    <input type="email" name="email" placeholder="enter email" v-model="email"/>
    <br>
    <input type="password" name="password" placeholder="enter password" v-model="password"/>
    <br>
    <button @click="register">register</button>
  </div>
</template>
<script>
import AuthenticationService from '../../services/AuthenticationService'
export default {
  data () {
    return {
      email: 'abc',
      password: '123'
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
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
