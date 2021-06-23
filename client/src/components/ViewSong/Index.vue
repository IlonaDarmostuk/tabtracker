<template>
  <div>

    <v-layout>
      <v-flex xs6 >
       <song-meta-data :song="song"/>
      </v-flex>
      <v-flex xs6 >
        <YouTube :youtubeId="song.youtubeId"/>
      </v-flex>
    </v-layout>
  <v-layout>
    <v-flex xs6 class="ml-2  mt-2">
      <tab :song="song"/>
    </v-flex>
    <v-flex xs6 class="ml-2  mt-2">
      <lyrics :song="song"/>
    </v-flex>
  </v-layout>
  </div>
</template>
<script>
import SongService from '../../../services/SongService'
import SongMetaData from './SongMetaData'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'
export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    // console.log(songId)
    this.song = (await SongService.show(songId)).data
  },
  components: {
    Tab,
    Lyrics,
    YouTube,
    SongMetaData
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
