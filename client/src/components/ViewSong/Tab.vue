<template>
  <panel title="lyrics">
    <v-textarea readonly class="textarea"
                label="tab"
                v-model="song.tab"
    ></v-textarea>
  </panel>
</template>
<script>
export default {
  props: [
    'song'
  ]
}
</script>
<style scoped>
  .textarea{
    font-family: monospace;
    border: none;
    padding: 20px;
  }
  textarea{
    min-height: 600px;
  }
</style>
