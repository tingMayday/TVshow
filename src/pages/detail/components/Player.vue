<template>
    <div class="player"> 
        <video-player  class="video-player vjs-custom-skin"
             ref="videoPlayer"
             :playsinline="true"
             :options="options"
        ></video-player>
        <p>
        	<span>{{playerData.name}}</span>
        	<span @click="addCollect('已取消看单')" v-if="playerData.collected">
                <i class="iconfont color-e3b25e">&#xe61b;</i>
            </span>
            <span @click="addCollect('已加入看单')"  v-else>
                <i class="iconfont color-e3b25e">&#xe61e;</i>
            </span>
        </p>
        <p class="info">{{playerData.score}}分·{{playerData.type}}·全{{playerData.episode}}集·{{playerData.playVolume}}</p>
    </div>
</template>

<script>
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
export default {
    name: 'Player',
    props: {
	    options: {
	      type: Object,
	      default: {}
	    },
	    playerData: {
	      type: Object,
	      default: {}
	    }
	},
    data(){
        return {
        }
    },
    methods: {
        addCollect(con) {
          this.$emit('addCollect', con)
        }
    }
}
</script>
