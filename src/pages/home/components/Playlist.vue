<template>
  <ul class="playlist">
    <li v-for="(item,index) of list" :key="item.id">
      <router-link class="poster" :to="'/detail/' + item.id">
        <img :src="item.poster">
        <p class="flex episodes">
          <span>更新至{{item.update}}集</span>
          <span class="color-e3b25e">{{item.score}}</span>
        </p>
      </router-link>
      <p class="name">{{item.name}}</p>
      <div class="info flex">
        <div class="flex1 borderr">
          <p>"{{item.intro}}"</p>
          <p>主演：赵丽颖/冯绍峰/朱一龙/施诗</p>
        </div>
        <div class="collect color-e3b25e" @click="addCollect(index, '已取消看单')" v-if="item.collected" >
          <i class="iconfont">&#xe60d;</i>
          <p>已加入</p>
        </div>
        <div class="collect color-e3b25e" @click="addCollect(index, '已加入看单')" v-else>
          <i class="iconfont">&#xe666;</i>
          <p>加入看单</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HomePlaylist',
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  data(){
    return{
    }
  },
  methods: {
    addCollect(idx, con) {
      this.$emit('addCollect', {idx,con})
    }
  }
}
</script>

<style>
</style>
