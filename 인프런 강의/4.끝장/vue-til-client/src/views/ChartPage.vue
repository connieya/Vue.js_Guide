<template>
	<div>
		<div class="btnInfo">
			<a href="javascript:;" @click="logoutUser" class="btn btn-warning"
				>로그아웃</a
			>
			<a href="javascript:;" @click="logoutUser" class="btn btn-danger"
				>회원탈퇴</a
			>
		</div>

		<bar-chart :chartData="chartItem"></bar-chart>

		<span @click="addData"><i class="fas fa-plus-circle"></i></span>
		<Modal v-if="showModal" @close="showModal = false">
			<h3 slot="header">차트 등록하기</h3>
		</Modal>
		<ul>
			<li v-for="item in chartItem" :key="item.chartNo">{{ item.target }}</li>
		</ul>
	</div>
</template>

<script>
import BarChart from '../components/BarChart.vue';
import Modal from '@/components/common/Modal';
import { fetchChartList } from '@/api/index';
export default {
	components: { BarChart, Modal },
	data() {
		return {
			targetValue: [],
			dateValue: [],
			showModal: false,
			chartItem: [],
		};
	},
	methods: {
		logoutUser() {
			this.$store.commit('clearUserId');
			this.$router.push('/intro');
		},
		addData() {
			this.showModal = true;
		},
		async fetchData() {
			const response = await fetchChartList();
			this.chartItem = response.data;
			console.log('차트데이터', response);
			this.chartItem.forEach(item => {
				console.log('item!!!!!!!!!!', item);
			});
		},
	},
	created() {
		this.fetchData();
	},
};
</script>

<style scoped>
.btnInfo {
	display: flex;
	justify-content: flex-end;
	margin-right: 10px;
}
.fa-plus-circle {
	font-size: 2.9rem;
}
</style>
