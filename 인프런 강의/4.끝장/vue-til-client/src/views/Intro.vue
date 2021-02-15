<template>
	<header>
		<div class="introContainer">
			<p>
				<router-link to="/login">
					<button class="btn btn-primary">
						로그인
					</button>
				</router-link>
				<router-link to="/signup">
					<button class="btn btn-info">회원가입</button>
				</router-link>
			</p>
		</div>
	</header>
</template>

<script>
export default {};
</script>

<style scoped>
.introContainer {
	margin-top: 200px;
}
button {
	font-size: 1.8rem;
}
p {
	text-align: center;
}
</style>
