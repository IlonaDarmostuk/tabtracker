<template>
  <v-row>
    <v-spacer/>
    <v-col col="6" >
      <panel title="Songs">
        <div v-for="song in songs" :key="song.title">
          {{song.title}}
          {{song.artist}}
          {{song.album}}
        </div>
      </panel>
    </v-col>
    <v-spacer/>
  </v-row>
</template>
<script>
import SongService from "../../services/SongService";
import Panel from './Panel'
export default {
  data () {
    return {
      songs: null
    }
  },
  components: {
    Panel
  },
  async mounted () {
    this.songs = await SongService.index()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
