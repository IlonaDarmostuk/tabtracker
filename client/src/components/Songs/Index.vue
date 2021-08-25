<template>
  <v-row>
    <v-col col="6" v-if="isUserLoggedIn">
      <songs-bookmarks />
      <recently-viewed-songs class="mt-2">

      </recently-viewed-songs >
    </v-col>
    <v-col col="6" >
      <songs-search-panel />
      <songs-panel class="mt-2"/>
    </v-col>

  </v-row>
</template>
<script>
import SongsPanel from './SongsPanel'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import SongsBookmarks from './SongsBookmarks'
import SongService from '../../../services/SongService'

import SongsSearchPanel from './SongsSearchPanel'
import {mapState} from 'vuex'

export default {
  data () {
    return {
      songs: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  components: {
    SongsBookmarks,
    SongsPanel,
    SongsSearchPanel,
    RecentlyViewedSongs
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
