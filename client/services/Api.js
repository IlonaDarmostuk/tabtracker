import axios from 'axios'
import store from '../src/store/store'
console.log(store)
export default () => {
  return axios.create({
    baseURL: 'http://localhost:8081/',
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }
  })
}
