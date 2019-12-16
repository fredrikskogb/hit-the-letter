<template>
  <div id="nav">
			<div class="nav-container">
				<nav>
					<div>
						<router-link to="/" v-if="!user.id">Login</router-link><span v-if="!user.id"> | </span>
						<router-link to="/about">About</router-link>
					</div>
					<router-link to="/leaderboard">Leaderboard</router-link>
					<router-link to="/customization-menu">Customization</router-link>
				</nav>
			</div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
	import { mapGetters } from 'vuex';

  export default Vue.extend({

		computed: mapGetters(["user"]),
		
  })
</script>

<style lang="less" scoped>
@import url("../../styles/main.less");
#nav {
	position: absolute;
	width: 100vw;
	text-align: center;
	.nav-container {
		margin: 0 auto;
		display: flex;
		justify-content: center;
		* {
			margin: 5px;
			span {
				color: rgba(106, 107, 155, 0.65);
			}
		}
	}
	nav {
		display: flex;
		flex-direction: column;
	}
}
</style>