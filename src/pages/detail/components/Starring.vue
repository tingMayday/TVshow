<template>
    <div class="starring wrap">
        <p class="s-title">主演</p>
        <ul>
            <li v-for="(item,index) in starring">
            	<div class="avatar">
            		<img :src="item.avatar">
            	</div>
            	<p>{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Selection',
        props: {
            starring: {
                type: Array,
                default: []
            }
        },
        data(){
            return {
            }
        }
    }
</script>