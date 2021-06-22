<template>
  <panel title="lyrics">
    <v-textarea readonly class="textarea"
                label="tab"
                v-model="song.tab"
    ></v-textarea>
  </panel>
</template>
<script>
import Panel from '../Panel'
export default {
  props: [
    'song'
  ],
  components: {
    Panel
  }
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
