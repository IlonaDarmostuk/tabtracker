<template>
  <panel title="Recently Viewed Songs">
    <v-data-table
      :headers="headers"
      :sort-by="pagination.sortBy"
      :sort-desc="pagination.descending"
      :items="histories"

     >
      <template slot="items" scope="props">
        <td>
          {{ props.item.title}}
        </td>
        <td class="text-right">
          {{ props.item.artist}}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>
<script>
  import {mapState} from 'vuex'
  import SongsHistoryService from '../../../services/SongsHistoryService'

  export default {
    data () {
      return {
        headers: [
          {
            text: 'title',
            value: 'title'
          },
          {
            text: 'Artist',
            value: 'artist'
          }
        ],
        pagination: {
          sortBy: 'createdAt',
          descending: true
        },
        histories: [

        ]
      }
    },
    computed: {
      ...mapState([
        'isUserLoggedIn',
        'user'
      ])
    },
    async mounted () {
      if (this.isUserLoggedIn) {
        this.histories = (await SongsHistoryService.index({
          userId: this.user.id
        })).data
        this.histories.map((bookmark, index) => {
          bookmark = {...bookmark['Song']}
          this.histories[index] = bookmark
        })
      }
    }
  }
</script>
<style>

</style>
