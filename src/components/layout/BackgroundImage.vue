<template>

	<div class="background-content-wrapper">

		<img class="moon-image" src="../../assets/images/moon.png"/>
		<img class="alien-planet-image" src="../../assets/images/alien_planet.png"/>

		<div class="background-image-container" v-for="index in mountainRows" :key="index">
			<img class="background-image" v-for="index in mountainsPerRow"
				:key="index"
				v-bind:src="getRandomMountain()" />
		</div>

		<div class="background-floor"></div>
		
	</div>
    
</template>

<script lang="ts">

	import Vue from 'vue'
	export default Vue.extend({
		data() {
			return {
				mountainRows: 2,
				mountainsPerRow: 3
			}
		},
		methods: {
			getRandomMountain(): string {
				const random = Math.random() * 2;
				return random > 1
					? require("../../assets/images/mountain.png")
					: require("../../assets/images/mountain2.png")
			}
		}
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
		width: 400px;
		height: 400px;
		z-index: -9;
		animation: 420s linear infinite;
		animation-name: shake; 
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

	@keyframes l1 { 100% { -webkit-transform: translate3d(-14px,2px,0); transform: translate3d(-14px,2px,0) } }
	@keyframes l2 { 100% { -webkit-transform: translate3d(-5px,1px,0); transform: translate3d(-5px,1px,0) } }
	@keyframes l3 { 100% { -webkit-transform: translate3d(-3px,2px,0); transform: translate3d(-3px,2px,0) } }

	@keyframes shake { 100% { -webkit-transform: rotate(360deg); transform: rotate(360deg) } }

	.background-floor {
		width: 100vw;
		top: 35%;
		height: 70%;
		overflow: hidden;
		position: fixed;
		background: #870000;  /* fallback for old browsers */
		z-index: -4;
		background-image: url("../../assets/images/ground.jpg");
		background-size: 100%;
		box-shadow: 0px 2px 19px 0px rgba(232,228,211,1);
	}

	
    
</style>