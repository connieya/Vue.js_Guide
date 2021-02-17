<template>
	<div>
		<a href="javascript:;" @click="logoutUser">로그아웃</a>
		<my-switch
			:propsdata="switchValue"
			@switchValueChanged="switchButton"
		></my-switch>
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
import MySwitch from '../components/common/MySwitch.vue';
export default {
	components: { PostListItem, LoadingSpinner, MySwitch },
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
			const response = await fetchPosts();
			this.isLoading = false;
			this.postItem = response.data;
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
	font-size: 2.12rem;
}
ul {
	list-style: none;
}
</style>
