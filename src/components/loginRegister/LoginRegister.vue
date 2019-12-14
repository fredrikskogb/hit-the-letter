<template>
	<div class="login-register-wrapper">
		<div class="login-register-options" v-if="!openFields">
			<p @click="toggleFields">
				Log in / Register
			</p>
			<router-link to="/customization-menu">Play without logging in</router-link>
		</div>
		
		<form class="login_register_form login-register-fields" v-if="openFields">

			<label for="Email">Email</label>
			<input v-model="newUser.email" name="email" type="text" id="email" class="login_register_input" required>

			<label for="password">Password</label>
			<input v-model="newUser.password" name="password" type="password" id="password" class="login_register_input" required>

			<label for="username">Username</label>
			<input v-model="newUser.username" name="username" type="text" id="username" class="login_register_input" required>

			<button @click="verifyLogin" class="login_register_submit">Log in</button>
			<button @click="verifySignup" class="login_register_submit">Sign up</button>
			<button @click="toggleFields" class="login_register_submit">Back</button>

    </form>

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
		...mapActions(['loginUser', 'registerUser', 'addHighscore']),
		toggleFields() {
			this.openFields = !this.openFields;
		},
		async verifyLogin() {
			await this.loginUser({email: this.newUser.email, password: this.newUser.password});
			if(this.user.hasOwnProperty('id')) this.$router.push({ path: '/customization-menu' });
		},
		async verifySignup() {
			await this.registerUser(this.newUser);
			this.addHighscore({userId: this.user.id, points: 0, level: 0});
			if(this.user.hasOwnProperty('id')) this.$router.push({ path: '/customization-menu' });
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
		color: white;
		border-radius: @card-border-radius;
		user-select: none;
		text-align: center;
		.login-register-options {
			* {
				margin: 5px;
			}
			p {
				cursor: pointer;
			}
			a {
				color: white;
				box-shadow: none;
				text-decoration: none;
			}
		}
	}

	.login_register_form{
    display: flex;
    flex-direction: column;
    padding-bottom: 1.25rem;
    padding: 1.25em 3em 1.25em 3em;
    border-radius: 5px;
    min-width: 400px;
	}
	.login_register_form label {
		margin-bottom: 5px;
	}
  .login_register_form input{
    border: 1px solid #eee;
    border: 3px solid;
    border-radius: 5px;
    padding: 0.5em;
    transition: border-color .5s ease-out;

  }
  .login_register_form input:optional {
    border-color: #999;
  }
  .login_register_form input:required {
    border-color: palegreen;
  }
  .login_register_form input:invalid {
    border-color: salmon;
  }

.login_register_form input {
    margin-bottom: 1em;
}

.login_register_submit {
    border: none;
    cursor: pointer;
    padding: .6em 1.4em .5em .8em;
    border: 1px solid #aaa;
    margin:0 0.2em 0.2em 0;
    border-radius: .5em;
    box-sizing: border-box;
    text-decoration:none;
    font-weight:300;
    background-color:#FFFFFF;
    text-align:center;
    transition: all 0.15s;   
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    font-size: 1em;
}

.login_register_submit:hover{
    text-shadow: 0 0 2em rgba(255,255,255,1);
    border-color: palegreen;
    background-color: rgba(212, 252, 212, 0.281);
}

</style>