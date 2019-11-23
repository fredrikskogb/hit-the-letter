<template>
	<div class="login-register-wrapper">
		<div>
			<p>Log in / Register</p>
		</div>
		<div>
			<p>Play without logging in</p>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
        
})

</script>

<style lang="less" scoped>

	@import url('../../styles/main.less');

	.login-register-wrapper {
		.hv-centering;
		.card;
		color: black;
		border-radius: @card-border-radius;
		user-select: none;
		text-align: center;
		div {
			margin: 5px;
			cursor: pointer;
		}
	}

</style>