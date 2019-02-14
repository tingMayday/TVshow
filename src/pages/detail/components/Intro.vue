<template>
    <div class="intro">
        <p class="s-title">简介</p>
        <p class="content">{{intro}}</p>
    </div>
</template>

<script>
    export default {
        name: 'Intro',
        props: {
            intro: {
                type: String,
                default: ''
            }
        },
        data(){
            return {
            }
        }
    }
</script>