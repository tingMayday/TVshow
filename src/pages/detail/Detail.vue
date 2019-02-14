<template>
    <div class="detail"> 
        <div class="back" @click="$router.go(-1)">
            <i class="iconfont">&#xe612;</i>
            <span>视频详情</span>
        </div>
        <player :options="playerOptions" :playerData="playerData" @addCollect="addCollect"></player>
        <selection :played="played"></selection>
        <starring :starring="starring"></starring>
        <intro :intro="intro"></intro>
        <layer ref="layer"></layer>
    </div>
</template>

<script>
    import axios from 'axios'
    import Layer from 'common/layer/Layer'
    import Player from './components/Player'
    import Selection from './components/Selection'
    import Starring from './components/Starring'
    import Intro from './components/Intro'
    export default {
        name: 'Detail',
        components: {
            Layer,
            Player,
            Selection,
            Starring,
            Intro
        },
        data(){
            return {
                playerOptions : {},
                playerData: {},
                played: 0,
                starring: [],
                intro: ''
            }
        },
        mounted() {
            this.getDetailData()
        },
        
        methods: {
            getDetailData(){
              axios.get('/detail')
                .then(this.getDetailDataSucc)
            },
            getDetailDataSucc(res){
                res = res.data
                if(res.ret && res.data){
                    this.playerOptions = res.data.playerOptions
                    this.playerData = res.data.playerData
                    this.played = res.data.played
                    this.starring = res.data.starring
                    this.intro = res.data.intro
                }
            },
            addCollect(con){
                let layer = this.$refs.layer
                this.playerData.collected = !this.playerData.collected
                layer.open({
                    content: con
                })
            }
        }
    }
</script>

