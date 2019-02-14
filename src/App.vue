<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view exclude="Detail" />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
