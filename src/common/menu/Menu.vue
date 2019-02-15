<template>
  <div class="menu">
	  <ul class="flex">
  		<router-link to="/" tag="li" class="flex1">
	  		<p><i class="iconfont">&#xe61c;</i></p>
	  		<p>首页</p>
	  	</router-link>
  		<router-link to="/mine" tag="li" class="flex1">
	  		<p><i class="iconfont">&#xe61a;</i></p>
	  		<p>我的</p>
	  	</router-link>
	  </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style lang="scss" scoped>
</style>
