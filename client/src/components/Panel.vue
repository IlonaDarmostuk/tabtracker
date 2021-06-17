<template>
  <v-row>
    <v-spacer/>
    <v-col col="6" >
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>{{title}}</v-toolbar-title>
      </v-toolbar>

      <div class="pl-4 pr-4 pt-2 pb-2">
        <slot>
          No slot content defined
        </slot>
      </div>
    </v-col>
    <v-spacer/>
  </v-row>
</template>
<script>
export default {
  data () {
    return {
      // title: 'hello world!'
    }
  },
  methods: {

  },
  props: [
    'title'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
