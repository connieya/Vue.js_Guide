<template>
	<div>
		<a href="javascript:;" @click="logoutUser">로그아웃</a>
		<div class="main">
			<h1>Today I learned</h1>
			<router-link to="/add">
				<i class="fas fa-plus-square"></i>
			</router-link>
			<!-- <div v-if="isLoading">
				Loading...
			</div> -->
			<LoadingSpinner v-if="isLoading"></LoadingSpinner>
			<ul v-else>
				<post-list-item
					v-for="post in postItem"
					:item="post"
					v-bind:key="post.pno"
				></post-list-item>
			</ul>
		</div>
	</div>
</template>

<script>
import { fetchPosts } from '@/api/index';
import PostListItem from '../components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner';
export default {
	components: { PostListItem, LoadingSpinner },
	data() {
		return {
			postItem: [],
			isLoading: false,
		};
	},
	methods: {
		async fetchData() {
			this.isLoading = true;
			const response = await fetchPosts();
			this.isLoading = false;
			this.postItem = response.data;
		},
		logoutUser() {
			this.$store.commit('clearUserId');
			this.$router.push('/intro');
		},
	},
	// 라이프 사이클 훅
	created() {
		this.fetchData();
	},
};
</script>

<style scoped>
.fa-plus-square {
	font-size: 2.12rem;
}
</style>
