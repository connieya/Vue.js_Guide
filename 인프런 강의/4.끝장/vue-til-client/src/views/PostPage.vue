<template>
	<div>
		<div class="main">
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
					@refresh="fetchData"
				></post-list-item>
				<!-- @refresh는 postItem에서 올려준 emit의 이름이다  -->
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
			switchValue: true,
			postItem: [],
			isLoading: false,
		};
	},
	methods: {
		async fetchData() {
			this.isLoading = true;
			// post 데이터 리스트
			const response = await fetchPosts();
			this.isLoading = false;
			this.postItem = response.data;
			console.log('로그값 확인!!!!!!!!!!!!!!');
		},
		logoutUser() {
			this.$store.commit('clearUserId');
			this.$router.push('/intro');
		},
		switchButton() {
			this.switchValue = !this.switchValue;
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
	font-size: 4.12rem;
	display: flex;
	justify-content: center;
}
ul {
	list-style: none;
}
</style>
