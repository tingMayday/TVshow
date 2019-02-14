<template>
    <ul class="watch flex">
      <li v-for="(item, index) of list" :key="item.id" v-if="index <= 3">
        <router-link tag="div" class="poster" :to="'/detail/' + item.id">
          <img :src="item.poster">
        </router-link>
        <p class="name">{{item.name}}</p>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'Watch',
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
