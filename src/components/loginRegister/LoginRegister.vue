<template>
	<div class="login-register-wrapper">
		<div class="login-register-options" v-if="!openFields">
			<p @click="toggleFields">
				Log in / Register
			</p>
			<p>
				Play without logging in
			</p>
		</div>
		<div class="login-register-fields" v-if="openFields">
			<input v-model="newUser.email" name="email" type="text" />
			<input v-model="newUser.username" name="username" type="text" />
			<input v-model="newUser.password" name="password" type="password" />
			<button @click="verifyLogin">Log in</button>
			<button @click="verifySignup">Sign up</button>
			<button @click="toggleFields">Back</button>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({

	name: 'loginRegister' as string,

	// What data the component contains, print in html using interpolation {{ test }}
  data() {
    return {
			openFields: false,
			newUser: {
				email: "",
				username: "",
				password: ""
			}
			
    }
  },

	// Props sent down to this component
  props: [],

	// What components are children to this one.
  components: {
	
	},

	computed: mapGetters(['user']),
	
	// Declare methods/functions of this component inside this block
	methods: {
		...mapActions(['loginUser', 'registerUser']),
		toggleFields() {
			this.openFields = !this.openFields;
		},
		verifyLogin() {
			this.loginUser({email: this.newUser.email, password: this.newUser.password});
		},
		verifySignup() {
			this.registerUser(this.newUser);
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
		.login-register-options {
			p {
				margin: 10px;
				cursor: pointer;
			}
		}
	}

</style>