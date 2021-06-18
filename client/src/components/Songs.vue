<template>
  <v-row>
    <v-spacer/>
    <v-col col="12" >
      <panel title="Songs">
          <v-btn slot="action" @click="navigateTo({name: 'songs-create'})" fab class="cyan accent-2" light medium absolute right middle>
            <v-icon>
              mdi-plus
            </v-icon>
          </v-btn>

        <div v-for="song in songs" :key="song.id" class="song">

          <v-layout>
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

              <v-btn class="cyan" dark @click="navigateTo({name: 'song', params: {songId: song.id}})">song</v-btn>
            </v-flex>
            <v-flex xs6>
              <img :src="song.albumImageUrl" alt="" class="album-image">
            </v-flex>
          </v-layout>


        </div>
      </panel>
    </v-col>
    <v-spacer/>
  </v-row>
</template>
<script>
import SongService from '../../services/SongService'
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
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
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
