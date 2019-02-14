<template>
  <div class="layerbox" v-if="layershow">
    <transition name="fade">
      <div class="layerconts" v-if="layershow">
        <i class="iconfont">&#xe650;</i>
        <p class="text">{{content}}</p>
      </div>
    </transition>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        layershow: false,
        content: '已加入看单',
        time: 1,
        callback: '', 
      }
    },
    created () {
    },
    methods: {
      open (opt) {
        this.close()
        if (opt) {
          let cloneObj = JSON.parse(JSON.stringify(this.$data))
          for (var key in opt) {
            this.$data[key] = opt[key]
          }
          this.layershow = true
          if (this.time) {
            setTimeout(() => {
              this.close()
              this.callback && this.callback()
            }, this.time * 1000)
            return false
          }
        }
        this.callback && this.callback()
      },
      close () {
        this.layershow = false
      }
    },
    computed: {
    }
  }
</script>
