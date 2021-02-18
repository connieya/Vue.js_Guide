<template>
	<div>
		<line-chart
			v-if="loaded"
			:targetData="targetValue"
			:performanceData="performanceValue"
			:labelsDate="dateValue"
		></line-chart>

		<div
			v-for="item in chartItem"
			v-bind:key="item.chartNo"
			class="chartItemBox"
		>
			<span
				>{{ item.chartDate }}
				<i class="fas fa-pen-square chartItem"></i>
				<i
					class="fas fa-minus-circle chartItem"
					@click="deleteChartData(item.chartNo)"
				></i
			></span>
		</div>
	</div>
</template>

<script>
import LineChart from '../components/LineChart.vue';
import { fetchChartList, ChartItemDelete } from '@/api/index';
export default {
	components: { LineChart },
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
		logoutUser() {
			this.$store.commit('clearUserId');
			this.$router.push('/intro');
		},
		async fetchData() {
			try {
				const response = await fetchChartList();
				console.log('선 그래프에서 데이터 가져오기');
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
		async deleteChartData(chartNo) {
			console.log('sadsaads', chartNo);
			const response = await ChartItemDelete(chartNo);
			console.log(response);
			this.$emit('refresh');
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
.chartItemBox {
	display: inline;
	margin: 12px;
	font-size: 1.3rem;
}
.chartItem {
	font-size: 1.9rem;
}
</style>
