<template>
	<!-- v:on 은 @와 같다  -->
	<div class="JoinContainer">
		<form @submit.prevent="submitForm">
			<h1>회원가입</h1>
			<div>
				<input
					id="userId"
					type="text"
					v-model="userId"
					placeholder="아이디를 입력하세요"
				/>
			</div>
			<div>
				<input
					id="userPw"
					type="text"
					v-model="userPw"
					placeholder="비밀번호를 입력하세요"
				/>
			</div>
			<div>
				<input
					id="userEmail"
					type="text"
					v-model="userEmail"
					placeholder="이메일을 입력하세요"
				/>
			</div>
			<button
				class="btn btn-success"
				:disabled="!isUserEmailValid || !userPw || !userEmail"
				type="submit"
			>
				회원가입
			</button>
			<p>{{ logMessage }}</p>
		</form>
	</div>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';
export default {
	data() {
		return {
			// form values
			userId: '',
			userPw: '',
			userEmail: '',

			//log
			logMessage: '',
		};
	},
	computed: {
		isUserEmailValid() {
			return validateEmail(this.userEmail);
		},
	},
	methods: {
		async submitForm() {
			const userData = {
				userId: this.userId,
				userPw: this.userPw,
				userEmail: this.userEmail,
			};
			//registerUser(JSON.stringify(userData));
			const response = await registerUser(userData);
			console.log(response);
			if (response.data === 1) {
				alert('회원가입이 왼료되었습니다.');
				this.$router.push('/login');
			} else {
				alert('회원가입 실패');
			}
			this.initForm();
		},
	},
	initForm() {
		this.userId = '';
		this.userPw = '';
		this.userEmail = '';
	},
};
</script>

<style scoped>
.JoinContainer {
	border: 1px solid #000000;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50%;
	height: 35vw;
	text-align: center;
	margin: 20px auto;
}
input {
	margin: 12px 0;
	width: 100%;
	font-size: 1.2rem;
}
</style>
