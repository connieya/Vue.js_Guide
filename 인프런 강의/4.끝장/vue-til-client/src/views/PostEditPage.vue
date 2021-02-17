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
		<button type="submit" class="btn btn-info">수정</button>
	</form>
</template>

<script>
import { fetchPost, editPost } from '@/api/index';
export default {
	data() {
		return {
			title: '',
			content: '',
		};
	},
	methods: {
		async submitForm() {
			const response = await editPost(this.$route.params.id, {
				title: this.title,
				content: this.content,
			});

			console.log(response);
			this.$router.push('/post');
		},
	},
	async created() {
		const { data } = await fetchPost(this.$route.params.id);
		console.log(data);
		this.title = data.title;
		this.content = data.content;
	},
};
</script>

<style></style>
