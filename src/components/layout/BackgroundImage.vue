<template>

	<div class="background-image-container">
		<img class="background-image" src="../../assets/images/background.jpg"/>
	</div>
    
</template>

<script lang="ts">

	import Vue from 'vue'
	export default Vue.extend({
        
	})

</script>

<style lang="less" scoped>

	.background-image {
		position: fixed;
		top: 0;
		z-index: -1;
		height: 100vh;
		width: 100vw;
		object-fit: cover;
	}
    
</style>