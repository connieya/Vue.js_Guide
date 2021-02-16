<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="title">제목:</label>
			<input type="text" v-model="title" />
		</div>
		<div>
			<label for="title">내용:</label>
			<input type="text" v-model="content" />
		</div>
		<button type="submit" class="btn btn-info">등록</button>
	</form>
</template>

<script>
import { registerPost } from '@/api/index';
export default {
	data() {
		return {
			title: '',
			content: '',
		};
	},
	methods: {
		async submitForm() {
			const postData = {
				title: this.title,
				content: this.content,
			};

			try {
				const response = await registerPost(postData);
				if (response.data === 1) {
					alert('글 등록 완료');
					this.$router.push('/main');
				} else {
					alert('글 등록 실패');
					console.log(response);
				}
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style></style>
