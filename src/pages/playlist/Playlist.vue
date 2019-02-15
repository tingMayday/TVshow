<template>
  <div class="play-list">
    <div class="back" @click="$router.go(-1)">
        <i class="iconfont">&#xe612;</i>
        <span v-if="type == 'watch'">我的看单</span>
        <span v-if="type == 'history'">观看记录</span>
    </div>
    <ul>
      <li v-for="item of list" :key="item.id" class="flex">
        <label v-if="showedit">
          <input type="checkbox" />
        </label>
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
    <p @click="edit"  v-if="!showedit" class="btnarea editbtn">编辑</p>
    <p v-if="showedit" class="btnarea flex">
      <span class="btn cancelbtn" @click="cancel">取消</span>
      <span class="btn delebtn" @click="dele">删除</span>
    </p>
    <layer ref="layer" @update="cancel"></layer>
  </div>
</template>

<script>
import axios from 'axios'
import Layer from 'common/layer/Layer'
export default {
  name: 'Playlist',
  components: {
    Layer
  },
  data(){
    return{
      list: [],
      type: '',
      showedit: false
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
    },

    edit(){
      this.showedit = true
    },

    cancel(){
      this.showedit = false
    },

    dele() {
      // 显示弹框
      let layer = this.$refs.layer
      layer.open({
        content: '确认要删除所选的内容吗？',
        type: 2
      })
    }

  }
}
</script>