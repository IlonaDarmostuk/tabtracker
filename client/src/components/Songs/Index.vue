<template>
  <v-row>
    <v-spacer/>
    <v-col col="12" >
      <songs-search-panel />
      <songs-panel class="mt-2"/>
    </v-col>
    <v-spacer/>
  </v-row>
</template>
<script>
import SongsPanel from './SongsPanel'
import SongService from '../../../services/SongService'
import SongsSearchPanel from './SongsSearchPanel'
export default {
  data () {
    return {
      songs: null
    }
  },
  components: {
    SongsPanel,
    SongsSearchPanel
  },
  async mounted () {
    this.songs = (await SongService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .song{
    padding: 20px;
    height: 330px;
    overflow: hidden;
  }
  .song-title{
    font-size: 30px;
  }
  .song-artist{
    font-size: 25px;
  }
  .song-genre{
    font-size: 20px;
  }
.album-image{
  width: 70%;
  margin: 0 auto;
}
</style>
