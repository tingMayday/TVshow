<template>
  <div class="layerbox" v-if="layershow">
    <template v-if="type == 1">
      <transition name="fade">
        <div class="layerconts" v-if="layershow">
          <i class="iconfont">&#xe650;</i>
          <p class="text">{{content}}</p>
        </div>
      </transition>
    </template>
    <template v-if="type == 2">
      <transition name="fade">
        <div class="layerconts type2" v-if="layershow">
          <section class="layermcont">
            <p>{{content}}</p>
          </section>
          <div class="layerbtns flex">
            <span @click="sure('no')" class="btn nobtn">我再想想</span>
            <span @click="sure('yes')" class="btn yesbtn">狠心删除</span>
          </div>
        </div>
      </transition>
    </template>
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
        content: '',
        type: 1,
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
          if (this.time && this.type === 1) {
            setTimeout(() => {
              this.close()
              this.callback && this.callback()
            }, this.time * 1000)
            return false
          }
        }
        this.callback && this.callback()
      },
      sure (val) {
        if (val == 'no') {
          this.close()
        }
        if (val == 'yes') {
          this.open({
            type: 1,
            content: '删除成功'
          })
        }
        this.$emit('update');
      },
      close () {
        this.layershow = false
        this.type = 1
        this.content = ''
      },
    },
    computed: {
    }
  }
</script>
