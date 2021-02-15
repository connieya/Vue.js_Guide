<template>
	<div>
		<div class="main">
			<h1>Today I learned</h1>
			<ul>
				<li>{{ this.postItem[0].title }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { fetchPosts } from '@/api/index';
export default {
	data() {
		return {
			postItem: [],
		};
	},
	methods: {
		async fetchData() {
			const response = await fetchPosts();
			console.log('qq', response.data.title);
			console.log(response.data);
			this.postItem = response.data;
		},
	},
	// 라이프 사이클 훅
	created() {
		this.fetchData();
	},
};
</script>

<style></style>
