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
      axios.get('/home')  //注意路径
        .then(this.getPlaylistSucc)
    },
    getPlaylistSucc(res){
      res = res.data
      if(res.ret && res.data){
        this.playlist = res.data.playList
        this.user= res.data.user
      }
    },

    addCollect(){
      console.log(6666)
      let layer = this.$refs.layer
      layer.open({
        type: 1, 
        content: '已加入看单',  // 内容
        callback () {
          console.log('已经消失')
        },
        shadeClose: true // 点击空白区域是否隐藏此弹出框  默认是false
      })
    }
  },
  mounted () {
    this.getPlaylist()
  }
}
</script>
