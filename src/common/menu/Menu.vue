<template>
  <div class="menu">
	  <ul class="flex">
	  	<li class="flex1">
	  		<router-link to="/">
		  		<p><i class="iconfont">&#xe61c;</i></p>
		  		<p>首页</p>
		  	</router-link>
	  	</li>
	  	<li class="flex1">
	  		<router-link to="/mine">
		  		<p><i class="iconfont">&#xe61a;</i></p>
		  		<p>我的</p>
		  	</router-link>
	  	</li>
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
