<template>
	<div class="loginContainer">
		<form @submit.prevent="submitForm">
			<h1>로그인</h1>
			<div>
				<input
					type="text"
					id="userId"
					v-model="userId"
					placeholder="아이디를 입력하세요"
				/>
			</div>
			<div>
				<input
					type="text"
					id="userPw"
					v-model="userPw"
					placeholder="비밀번호를 입력하세요"
				/>
			</div>
			<button
				v-bind:disabled="!userId || !userPw"
				type="submit"
				class="btn btn-danger"
			>
				로그인
			</button>
		</form>
	</div>
</template>

<script>
import { loginUser } from '@/api/index';
import { saveUserToCookie, saveAuthToCookie } from '@/utils/cookies';
export default {
	data() {
		return {
			userId: '',
			userPw: '',
		};
	},

	methods: {
		async submitForm() {
			try {
				const userData = {
					userId: this.userId,
					userPw: this.userPw,
				};
				// const { data } = await loginUser(userData);
				const response = await loginUser(userData);
				if (response.data === '') {
					alert('로그인 실패');
				} else {
					console.log('222', response);

					this.$store.commit('setUserId', response.data.userId);
					this.$store.commit('setToken', response.data.userNo); // 자바스크립트 범위에서 저장
					saveUserToCookie(response.data.userId);
					saveAuthToCookie(response.data.userNo); // 브라우저에 쿠키값 저장
					this.$router.push('/main/bar');
				}
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style scoped>
.loginContainer {
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
