<template>
  <div id="home">
    <div class="header flex color-e3b25e">
      <div class="flex">
        <div class="avatar">
          <img :src="user.avatar">
        </div>
        <span>{{user.name}}</span>
      </div>
      <div class="search">
        <i class="iconfont">&#xe632;</i>
      </div>
    </div>
    <home-playlist :list="playlist" @addCollect="addCollect"></home-playlist>
    <main-menu></main-menu>
    <layer ref="layer"></layer>
  </div>
</template>

<script>
import HomePlaylist from './components/Playlist'
import Layer from 'common/layer/Layer'
import MainMenu from 'common/menu/Menu'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomePlaylist,
    Layer,
    MainMenu
  },
  data() {
    return {
      playlist: [],
      user: {}
    }
  },
  methods: {
    getPlaylist(){
      axios.get('/home')
        .then(this.getPlaylistSucc)
    },
    getPlaylistSucc(res){
      res = res.data
      if(res.ret && res.data){
        this.playlist = res.data.playList
        this.user= res.data.user
      }
    },

    addCollect(data){
      let layer = this.$refs.layer
      this.playlist[data.idx].collected = !this.playlist[data.idx].collected
      layer.open({
        content: data.con,
        callback () {
          // this.playlist[idx].collected = !this.playlist[idx].collected
        }
      })
    }
  },
  mounted () {
    this.getPlaylist()
  }
}
</script>
