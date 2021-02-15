<template>
	<!-- v:on 은 @와 같다  -->
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">id: </label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="password">pw: </label>
			<input id="password" type="text" v-model="password" />
		</div>
		<div>
			<label for="nickname">nickname: </label>
			<input id="nickname" type="text" v-model="nickname" />
		</div>
		<button
			:disabled="!isUsernameValid || !password || !nickname"
			type="submit"
		>
			join
		</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';
export default {
	data() {
		return {
			// form values
			username: '',
			password: '',
			nickname: '',

			//log
			logMessage: '',
		};
	},
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async submitForm() {
			const userData = {
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			};
			//registerUser(JSON.stringify(userData));
			const response = await registerUser(userData);
			console.log(response.data);
			this.logMessage = ' 가입 완료';
			this.logMessage = `${response.data.username} 님이 가입되었습니다`;
			this.initForm();
		},
	},
	initForm() {
		this.username = '';
		this.password = '';
		this.nickname = '';
	},
};
</script>

<style></style>
