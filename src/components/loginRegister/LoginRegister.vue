<template>
	<div class="login-register-wrapper">
		<div class="login-options">
			<div>
				<p @click="showFields">Log in / Register</p>
			</div>
			<div>
				<p>Play without logging in</p>
			</div>
		</div>
		<LoginFields v-if="openFields"/>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import LoginFields from "@/components/loginFields/LoginFields.vue";

export default Vue.extend({

	name: 'loginRegister' as string,

	// What data the component contains, print in html using interpolation {{ test }}
  data() {
    return {
			openFields: false
    }
  },

	// Props sent down to this component
  props: ["loggedIn"],

	// What components are children to this one.
  components: {
    LoginFields
	},
	
	// Declare methods/functions of this component inside this block
	methods: {
		showFields() {
			this.openFields = !this.openFields;
		}
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