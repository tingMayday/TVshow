<template>
    <div class="selection wrap">
        <p class="s-title">剧集</p>
        <ul class="flex">
            <li v-for="(item,index) in played" @click="select(item)" :class="item == selected ? 'active' : ''">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Selection',
        props: {
            played: {
                type: Number,
                default: 0
            }
        },
        data(){
            return {
                selected: 1
            }
        },
        methods: {
            select(item){
                this.selected = item
            }
        }
    }
</script>