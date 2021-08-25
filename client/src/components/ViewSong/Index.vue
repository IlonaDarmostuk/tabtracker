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
import SongHistoryService from '../../../services/SongsHistoryService'

import SongMetaData from './SongMetaData'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'

import {mapState} from 'vuex'
export default {
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    const songId = this.route.params.songId

    this.song = (await SongService.show(songId)).data
    if (this.isUserLoggedIn) {
      SongHistoryService.post({
        songId: songId
      })
    }
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
