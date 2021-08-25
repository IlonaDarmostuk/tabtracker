<template>
  <panel title="Song Meta Data" >
    <div class="d-flex">
      <v-flex xs6>

        <div class="song-title">
          {{song.title}}
        </div>
        <div class="song-artist">
          {{song.artist}}
        </div>
        <div class="song-genre">
          {{song.genre}}
        </div>
        <v-btn slot="action" :to="{name: 'song-edit', params() {return {songId: song.id}}}"  class="cyan" dark medium  middle>
          <v-icon>
           edit
          </v-icon>
        </v-btn>

        <v-btn slot="action" @click="setAsBookmark" v-if="isUserLoggedIn && !bookmark" class="cyan" dark medium  middle>
          <v-icon>
            set as Bookmark
          </v-icon>
        </v-btn>

        <v-btn slot="action" @click="unsetAsBookmark" v-if="isUserLoggedIn && bookmark" class="cyan" dark medium  middle>
          <v-icon>
            unset UnBookmark
          </v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs6>
        <img :src="song.albumImageUrl" alt="" class="album-image">
        <br>
        {{song.album}}
      </v-flex>
    </div>

  </panel>
</template>
<script>
import {mapState} from 'vuex'
import BookmarksService from '../../../services/BookmarksService'
export default {
  data () {
    return {
      bookmark: null
    }
  },
  props: [
    'song'
  ],
  methods: {
    async setAsBookmark () {
      console.log('i am')
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.$store.state.route.params.songId,
          userId: this.user.id
        })).data
      } catch (e) {
        console.log(e)
      }
    },
    async unsetAsBookmark () {
      console.log('i am not')
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (e) {
        console.log(e)
      }
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (!this.isUserLoggedIn) {
      return
    }

    try {
      const bookmark = (await BookmarksService.index({
        songId: this.$store.state.route.params.songId,
        userId: this.$store.state.user.id
      })).data
      if(bookmark.length){
        this.bookmark = bookmark[0]
      }

    } catch (e) {
      console.log(e)
    }
  }
}
</script>
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
