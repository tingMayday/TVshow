<template>
    <ul class="history flex">
       <li v-for="(item, index) of list" :key="item.id" v-if="index <= 5">
        <router-link tag="div" class="poster" :to="'/detail/' + item.id">
          <img :src="item.poster">
          <p class="update">更新至{{item.update}}集</p>
        </router-link>
        <p class="name">{{item.name}}</p>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'History',
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
