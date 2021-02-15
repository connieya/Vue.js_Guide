<template>
	<header class="headerBox">
		<div>
			<router-link to="/main">메인</router-link>
		</div>
		<div>
			<template v-if="$store.getters.isLogin">
				<span> {{ $store.state.username }}</span>
				<a href="javascript:;" @click="logoutUser">로그아웃</a>
			</template>
			<template v-else>
				<router-link to="/login">로그인</router-link> |
				<router-link to="/signup">회원가입</router-link>
			</template>
		</div>
	</header>
</template>

<script>
export default {
	// computed: {
	// 	isUserLogin() {
	// 		return this.$store.getters.isLogin;
	// 	},
	// },
	methods: {
		logoutUser() {
			this.$store.commit('clearUsername');
			this.$router.push('/');
		},
	},
};
</script>

<style scoped>
.headerBox {
	display: flex;
	background-color: rgb(134, 74, 190);
	color: #e4bfbf;
	height: 50px;
	font-weight: 600;
	justify-content: space-around;
	padding: 6px;
}
a {
	color: white;
	margin: 3px;
	padding: 3px;
}
</style>
