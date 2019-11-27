<template>

	<div class="background-content-wrapper">

		<img class="moon-image" src="../../assets/images/moon.png"/>
		<img class="alien-planet-image" src="../../assets/images/alien_planet.png"/>

		<div class="background-image-container" v-for="index in 3" :key="index">
			<img class="background-image" src="../../assets/images/mountain.png"/>
			<img class="background-image flip-image" src="../../assets/images/mountain.png"/>
			<img class="background-image" src="../../assets/images/mountain.png"/>
		</div>

		<div class="background-floor"></div>
		
	</div>
    
</template>

<script lang="ts">

	import Vue from 'vue'
	export default Vue.extend({
        
	})

</script>

<style lang="less" scoped>

	.background-content-wrapper {
		position: absolute;
		top:0;
		left:0;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		z-index: -10;
		background-color: rgb(36, 36, 36);
	}

	.moon-image {
		position: absolute;
		top: 10px;
		right: 10px;
		width: 200px;
		height: 200px;
		z-index: -9;
	}

	.alien-planet-image {
		position: absolute;
		top: 30px;
		left: 450px;
		width: 100px;
		height: 100px;
		z-index: -9;
	}

	.background-image {
		animation: 3s linear infinite alternate;
	}

	.background-image-container {
		width: 100vw;
		position: fixed;
		top: 50%;
		left: 70px;
		transform: translateY(-50%);
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		z-index: -1;

		.background-image {
			width: 380px;
			animation-name: l1; 
		}

		&:nth-child(2) {
			top: 42%;
			transform: translateY(-42%);
			z-index: -2;
			left: 270px;
			.background-image {
				width: 200px;
				animation-name: l2;
			}
		}

		&:nth-child(3) {
			top: 35%;
			transform: translateY(-35%);
			z-index: -3;
			left: -20px;
			.background-image {
				width: 150px;
				animation-name: l3;
			}
		}

	}

	@keyframes l1 { 100% { -webkit-transform: translate3d(-4px,2px,0); transform: translate3d(-4px,2px,0) } }
	@keyframes l2 { 100% { -webkit-transform: translate3d(-7px,1px,0); transform: translate3d(-7px,1px,0) } }
	@keyframes l3 { 100% { -webkit-transform: translate3d(-10px,2px,0); transform: translate3d(-10px,2px,0) } }

	.background-floor {
		width: 320vw;
		height: 70%;
		border-radius: 50%;
		overflow: hidden;
		position: fixed;
		top: 120%;
		left: -110%;
		transform: translateY(-120%);
		background-color: rgb(223, 198, 160);
		z-index: -4;
	}

	
    
</style>