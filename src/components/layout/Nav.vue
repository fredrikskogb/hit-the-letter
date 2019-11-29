<template>
  <div id="nav">
			<div class="nav-container">
				<router-link to="/">Home</router-link> |
				<router-link to="/about">About</router-link>
			</div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    
  })
</script>

<style lang="less" scoped>
#nav {
	position: absolute;
	width: 100vw;
	.nav-container {
		width: 100px;
		margin: 0 auto;
	}
}
</style>