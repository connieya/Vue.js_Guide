<template>
	<div>
		<form @submit.prevent="submitForm">
			<div>
				<label for="username">id:</label>
				<input type="text" id="username" v-model="username" />
			</div>
			<div>
				<label for="password">pw:</label>
				<input type="text" id="password" v-model="password" />
			</div>
			<button v-bind:disabled="!isUsernameValid || !password" type="submit">
				로그인
			</button>
			<p>{{ logMessage }}</p>
		</form>
	</div>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';
export default {
	data() {
		return {
			username: '',
			password: '',
			//log message
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
			try {
				//비즈니스 로직
				const userData = {
					username: this.username,
					password: this.password,
				};
				// const { data } = await loginUser(userData);
				const response = await loginUser(userData);
				if (response.data === '') {
					alert('로그인 실패');
				} else {
					console.log('222', response);
					// 나는 jwt 값을 지정하지 않았기 때문에 token 값이 없음

					this.$store.commit('setUsername', response.data.username);
					// this.$store.commit('setToken',response.data.token); //토큰값이 없음 ㅠㅠ
					//this.logMessage = `${response.data.username} 님 환영합니다.`;
					this.$router.push('/main');
					// this.initForm();
				}
			} catch (error) {
				// 에러 핸들링할 코드
				console.log(error);
				// this.initForm();
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style></style>
