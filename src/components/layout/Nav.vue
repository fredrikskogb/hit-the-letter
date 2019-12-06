<template>
  <div id="nav">
			<div class="nav-container">
				<div>
					<router-link to="/">Home</router-link> |
					<router-link to="/about">About</router-link>
					<p><router-link to="/">Leaderboard</router-link></p>
					<p><router-link to="/customization-menu">Customization</router-link></p>
				</div>
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
		margin: 0 auto;
		display: flex;
		justify-content: center;
		* {
			margin: 5px;
		}
	}
}
</style>