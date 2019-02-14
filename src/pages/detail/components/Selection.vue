<template>
    <div class="selection wrap">
        <p class="s-title">剧集</p>
        <ul class="flex">
            <li v-for="(item,index) in played">{{item}}</li>
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
            }
        }
    }
</script>