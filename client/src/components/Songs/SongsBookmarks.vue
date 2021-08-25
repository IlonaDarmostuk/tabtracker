<template>
  <panel title="Bookmarks">
    <v-data-table
    :headers="headers"
    :items="bookmarks"

    :sort-by="pagination.sortBy"
    :sort-desc="pagination.descending">
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
import BookmarksService from '../../../services/BookmarksService'

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
        sortBy: 'date',
        descending: true
      },
      bookmarks: [

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
      this.bookmarks = (await BookmarksService.index()).data
      this.bookmarks.map((bookmark, index) => {
        bookmark = {...bookmark['Song']}
        this.bookmarks[index] = bookmark
      })
    }
  }
}
</script>
<style>

</style>
