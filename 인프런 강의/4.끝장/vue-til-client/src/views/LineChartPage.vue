<template>
	<div>
		<line-chart
			v-if="loaded"
			:targetData="targetValue"
			:performanceData="performanceValue"
			:labelsDate="dateValue"
		></line-chart>
		<span @click="addData"><i class="fas fa-plus-circle"></i></span>
		<Modal v-if="showModal" @close="showModal = false" @refreshs="fetchData">
			<h3 slot="header">차트 등록하기</h3>
		</Modal>
	</div>
</template>

<script>
import Modal from '@/components/common/Modal';
import LineChart from '../components/LineChart.vue';
import { fetchChartList } from '@/api/index';
export default {
	components: { Modal, LineChart },
	data() {
		return {
			loaded: false,
			showModal: false,
			targetValue: [],
			performanceValue: [],
			chartItem: [],
			dateValue: [],
		};
	},
	methods: {
		addData() {
			this.showModal = true;
		},
		logoutUser() {
			this.$store.commit('clearUserId');
			this.$router.push('/intro');
		},
		async fetchData() {
			try {
				const response = await fetchChartList();
				this.chartItem = response.data;
				this.chartItem.forEach(item => {
					this.targetValue.push(item.target); // 목표치
					this.dateValue.push(item.chartDate);
					this.performanceValue.push(item.performance); //실적치
					this.loaded = true;
				});
			} catch (error) {
				console.log(error);
			}
		},
	},
	created() {
		this.fetchData();
	},
};
</script>

<style scoped>
.fa-plus-circle {
	font-size: 2.9rem;
}
</style>
