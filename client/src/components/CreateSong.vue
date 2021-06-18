<template>
  <v-layout>

    <v-flex xs5>
      <panel title="Song MetaData">
      <v-text-field
        label="title*"
        required
        :rules="[required]"
        v-model="song.title"
      ></v-text-field>

      <v-text-field
        label="artist"
        required
        :rules="[required]"
        v-model="song.artist"
      ></v-text-field>

      <v-text-field
        label="genre"
        required
        :rules="[required]"
        v-model="song.genre"
      ></v-text-field>

      <v-text-field
        label="album"
        required
        :rules="[required]"
        v-model="song.album"
      ></v-text-field>

      <v-text-field
        label="albumImageUrl"
        required
        :rules="[required]"
        v-model="song.albumImageUrl"
      ></v-text-field>

      <v-text-field
        label="youtubeId"
        required
        :rules="[required]"
        v-model="song.youtubeId"
      ></v-text-field>
    </panel>
    </v-flex>

    <v-flex xs7>
      <panel title="Song structure" class="ml-3">
      <v-textarea
        label="lyrics"
        required
        :rules="[required]"
        v-model="song.lyrics"
      ></v-textarea>

      <v-textarea
        label="tab"
        required
        :rules="[required]"
        v-model="song.tab"
      ></v-textarea>
      <div class="danger-alert" v-if="error">
        {{error}}
      </div>
        <v-btn class="cyan" dark @click="create">create song</v-btn>
      </panel>
    </v-flex>

  </v-layout>
</template>
<script>
import Panel from '@/components/Panel'
import SongService from '../../services/SongService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      required: (value) => !!value || 'Required',
      error: null
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object.keys(this.song).every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'please fill in all fields'
        return
      }
      try {
        await SongService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped>
.danger-alert{
  color: red;
}
</style>
