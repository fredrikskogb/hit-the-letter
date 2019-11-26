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

	// Import here

	name: 'loginRegister' as string,

	// What data the component contains, print in html using interpolation {{ test }}
  data() {
    return {
      // test: 'test'
    }
  },

	// Props sent down to this component
  props: [],

	// What components are children to this one.
  components: {
    
	},
	
	// Declare methods/functions of this component inside this block
	methods: {

	},
	
	// Lifecycle hook, component has been created
  created(): void {
		console.log('loginRegister component created');
	}
	
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