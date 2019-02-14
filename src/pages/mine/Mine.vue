<template>
    <div class="mine">
      <div class="user color-e3b25e">
        <div class="avatar"><img :src="user.avatar"></div>
        <p class="name">{{user.name}}</p>
      </div>
      <div class="wrap">
        <router-link tag="p" to="/playlist/watch" class="title flex">
          <span>我的看单</span>
          <i class="iconfont">&#xe64e;</i>
        </router-link>
        <watch :list="watchList"></watch>
      </div>
      <div class="wrap">
        <router-link tag="p" to="/playlist/history" class="title flex">
          <span>观看历史</span>
          <i class="iconfont">&#xe64e;</i>
        </router-link>
        <history :list="historyList"></history>
      </div>
      <main-menu></main-menu>
    </div>
</template>

<script>
import Watch from './components/Watch'
import History from './components/History'
import MainMenu from 'common/menu/Menu'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    Watch,
    History,
    MainMenu
  },
  data () {
    return {
      user: {},
      watchList: [],
      historyList: []
    }
  },
  methods: {
    getUser(){
      axios.get('/home')
        .then(this.getUserSucc)
    },
    getUserSucc(res){
      res = res.data
      if(res.ret && res.data){
        this.user= res.data.user
      }
    },
    getMineData(){
      axios.get('/mine')
        .then(this.getMineDataSucc)
    },
    getMineDataSucc(res){
      res = res.data
      if(res.ret && res.data){
        this.watchList= res.data.watchList
        this.historyList= res.data.historyList
      }
    }
  },
  mounted () {
    this.getUser()
    this.getMineData()
  }
}
</script>
