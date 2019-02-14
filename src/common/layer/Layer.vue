<template>
  <div class="mask" v-if="layershow">
    <div class="layermbox">
      <div class="laymshade" :class="{'laymshadeBgNo': type >= 2 ? false : shade}" @click="laymshadeClose"></div>
      <div class="layermmain" :class="layermmain[type]">
        <!-- <template v-if="type == 0">
          <transition name="fade">
            <div class="layermchild">
              <div class="logBox" v-if="layershow">
                <img class="img1" :src="logImg1" alt="" />
                <img class="img2" :src="logImg2" alt="" />
              </div>
            </div>
          </transition>
        </template> -->
        <!-- <template v-if="type == 1"> -->
          <div class="section">
            <transition name="fade">
              <div class="layermchild layermPrompts" v-if="layershow">
                <section class="layermcont">
                  <i class="iconfont">&#xe650;</i>
                  <p class="text">{{content}}</p>
                </section>
              </div>
            </transition>
          </div>
        <!-- </template> -->
        <!-- <template v-if="type == 2">
          <div class="section">
            <transition name="fade">
              <div class="layermchild" v-if="layershow">
                <section class="layermcont">
                  <p>{{content}}</p>
                </section>
                <div class="layermbtn">
                  <span class="layermspan" v-for="(item, index) in button" @click="sure(index)">{{ item }}</span>
                </div>
              </div>
            </transition>
          </div>
        </template> -->
      </div>
    </div>
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
        layershow: false, // 是否显示弹出框
        shade: true, // 蒙层
        shadeClose: false, // 蒙层是否点击隐藏
        content: '已加入看单',  // 默认内容
        time: 20, // 倒计时隐藏时间
        callback: '', // 是否回调-type大于1
      }
    },
    created () {
      // this.layermmain = ['layermmain0', 'layermmain1', 'layermmain2']
      // this.imgurl_ = ['error', 'success', 'collection']
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
      close () {
        this.layershow = false
        // this.type = 0
        this.shade = true
        this.shadeClose = false
        this.imgurl = ''
        this.content = '全力加载中'
        this.button = ['确定']
      },
      laymshadeClose () {
        this.shadeClose && this.close()
      }
    },
    computed: {
    }
  }
</script>
