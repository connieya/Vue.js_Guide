<template>
	<li>
		<div class="post-title">
			제목:
			{{ item.title }}
		</div>
		<div class="post-contents">{{ item.content }}</div>
		<div class="post-item">
			<i class="fas fa-edit"></i>
			<i class="far fa-trash-alt" @click="deletePost"></i>
		</div>
	</li>
</template>

<script>
import { deletePostItem } from '@/api/index';
export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	methods: {
		async deletePost() {
			confirm('정말 삭제하시겠습니까?');
			try {
				const reponse = await deletePostItem(this.item.pno);
				console.log('글 번호:', this.item.pnos);
				console.log(reponse.data);
				// 글을 삭제하고 나서 됐는지 UI에 확인 시켜줘야함
				// 그래서 emit 이벤트로 PostPage로 데이터 올려줄거임
				this.$emit('refresh');
				// 새로 고침 하지 하고 않고 삭제 된것을 확인 가능함
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style scoped>
li {
	border: 2px solid #e3c3e7;
	margin: 6px auto;
	width: 35%;
	min-height: 15vw;
}
.post-title {
	font-size: 2.4rem;
	text-align: center;
}
.post-contents {
	font-size: 1.7rem;
	display: flex;
	justify-content: center;
}
.post-item {
	display: flex;
	justify-content: flex-end;
	font-size: 1.7rem;
	padding: 4px;
}
</style>
