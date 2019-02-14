<template>
  <div class="play-list">
    <div class="back" @click="$router.go(-1)">
        <i class="iconfont">&#xe612;</i>
        <span v-if="type == 'watch'">我的看单</span>
        <span v-if="type == 'history'">观看记录</span>
    </div>
    <ul>
      <li v-for="item of list" :key="item.id" class="flex">
        <router-link class="poster" :to="'/detail/' + item.id">
          <img :src="item.poster">
        </router-link>
        <div class="info flex1">
          <p class="name">{{item.name}}</p>
          <p class="detail" v-if="type == 'watch'">更新至{{item.update}}集</p>
          <p class="detail" v-if="type == 'history'">
            <span v-if="item.watched > 60">观看至{{item.watchedT.minute}}分{{item.watchedT.second}}秒</span>
            <span v-else>观看少于1分钟</span>
          </p>
        </div>
      </li>
    </ul>
    

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Playlist',
  data(){
    return{
      list: [],
      type: ''
    }
  },
  mounted(){
    this.type = this.$route.params.type
    this.getPlaylist()
  },
  methods: {
    getPlaylist(){
      axios.get('/mine')
        .then(this.getPlaylistSucc)
    },
    getPlaylistSucc(res){
      res = res.data
      if(res.ret && res.data){
        if(this.type === 'watch'){
          this.list= res.data.watchList
        }
        if (this.type === 'history') {
          this.list= res.data.historyList
          this.list.forEach((k) => {
            k.watchedT = this.formatTime(k.watched)
            console.log(k)
          })
        }
      }
    },

    formatTime(value){
        let secondTime = parseInt(value),
            minuteTime = 0;
        if(secondTime > 60) {
          minuteTime = parseInt(secondTime / 60);
          secondTime = parseInt(secondTime % 60);
        }
      return {
        minute: minuteTime,
        second: secondTime
      }
    }

  }
}
</script>