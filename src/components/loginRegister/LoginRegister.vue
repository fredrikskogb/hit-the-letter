<template>
	<div class="login-register-wrapper">
		<div class="login-register-options" v-if="!openFields">
      <p class="keyboard-notification">Physical keyboard is required</p>
			<p @click="openLogIn" class="login-link">
				Log in
			</p>
			<p @click="openSignUp" v-if="!openFields">
				Sign up
			</p>
			<router-link to="/customization-menu">
				Play without logging in
			</router-link>
		</div>
		
		<div class="login_register_form login-register-fields" v-if="openFields">

			<label for="username">Username</label>
			<input name="username"
				v-model="formData.username"
				type="text"
				id="username"
				class="login_register_input"
				required>

			<label for="email" v-if="openFields === 'signup'">Email</label>
			<input name="email"
				v-if="openFields === 'signup'"
				v-model="formData.email"
				type="text"
				id="email"
				class="login_register_input"
				required>

			<label for="password">Password</label>
			<input name="password"
				v-model="formData.password"
				type="password"
				id="password"
				class="login_register_input"
				required>

			<p v-for="(error, index) in errors" :key="index">
				{{error}}
			</p>

			<div class="button-container">
				<button @click="logIn"
					v-if="openFields === 'login'"
					class="login_register_submit">
					Log in
				</button>
				<button @click="signUp"
					v-if="openFields === 'signup'"
					class="login_register_submit middle-button">
					Sign up
				</button>
				<button @click="closeFields"
					class="login_register_submit">
					Back
				</button>
			</div>

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
			openFields: "",
			formData: {
				email: "",
				username: "",
				password: ""
			} as any,
			errors: [] as string[]
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

		openLogIn() {
			this.openFields = "login";
		},

		openSignUp() {
			this.openFields = "signup";
		},

		closeFields() {
			this.openFields = "";
		},

		async logIn(event: Event) {
			this.errors = [];
			event.stopPropagation();
			const response = await this.loginUser(
				{
					username: this.formData.username,
					password: this.formData.password
				}
			);
			if (response.message) {
				this.errors.push(response.message);
			}
			if(this.user.hasOwnProperty('id')) {
				this.$router.push({ path: '/customization-menu' });
			}
		},

		async signUp(event: Event) {
			event.stopPropagation();
			if(this.verifySignup()) {
				const response = await this.registerUser(this.formData);
				if (response.message) {
					this.errors.push(response.message);
				}
				this.addHighscore({userId: this.user.id, points: 0, level: 0});
			}
			if(this.user.hasOwnProperty('id')) this.$router.push({ path: '/customization-menu' });
		},

		verifySignup(): boolean {
			this.errors = [];
			if (this.formData.email === "") {
				this.errors.push("Email field is empty!");
			} else if (this.formData.email.includes("@") === false) {
				this.errors.push("Not a valid email address.");
			}

			if (this.formData.username === "") {
				this.errors.push("Username field is empty!");
			} else if (this.formData.username.length <= 2) {
				this.errors.push("Username must be 3 characters or more!");
			}

			if (this.formData.password === "") {
				this.errors.push("Password field is empty");
			} else {
				if (this.formData.password.length <= 5) {
					this.errors.push("Password must be 6 characters or more");
				}
				const format = /^(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
				if (!format.test(this.formData.password)) {
					this.errors.push(
						"Password must contain one capital letter, one small letter and one number"
					);
				}
			}

			if(!this.errors[0]) {
				return true;
			} else {
				return false;
			}
		}
	}
})

</script>

<style lang="less" scoped>

	@import url('../../styles/main.less');

	input[type=text], input[type=email], button {
		font-family: 'Tomorrow', sans-serif;
		font-weight: bold; 
	}

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
			.keyboard-notification {
				font-weight: 300;
				font-style: italic;
				font-size: 0.9em;
				margin-bottom: 15px;
			}
			p {
				cursor: pointer;
			}
			a {
				color: white;
				box-shadow: none;
				text-decoration: none;
			}
			.login-link {
				margin-bottom: 10px;
			}
		}
	}
	

	.fail-register {
		border-color: salmon;
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

.button-container {

	display: flex;
	.middle-button {
		margin: 0 5px;
	}

	.login_register_submit {
		flex: 1;
			border: none;
			cursor: pointer;
			padding: .4em 1.3em .4em .7em;
			border: 1px solid #aaa;
			margin-top:0.5em;
			border-radius: @card-border-radius;
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

}



</style>