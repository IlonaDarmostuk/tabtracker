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
export default {
  props: [
    'song'
  ],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
