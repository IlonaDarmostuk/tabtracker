import Api from './Api'

export default {
  delete (bookmarkId) {
    return Api().delete(`bookmarks/${bookmarkId}`)
  },
  index (bookmark) {
    return Api().get('bookmarks', {
      params: bookmark
    })
  },
  post (bookmark) {
    return Api().post('bookmarks', bookmark)
  }
}
