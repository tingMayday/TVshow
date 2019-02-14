import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Mine from '@/pages/mine/Mine'
import Playlist from '@/pages/playlist/Playlist'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/playlist/:type',
      name: 'Playlist',
      component: Playlist
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior () {
    return {x: 0, y: 0}
  }
})
