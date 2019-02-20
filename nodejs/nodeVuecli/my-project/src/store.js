/**
 * Created by liusha on 2017/4/8.
 */
const STORAGE_KEY = 'todus'
export default {
  fetch () {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY || '[]'))
  },
  save (items) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }
}
