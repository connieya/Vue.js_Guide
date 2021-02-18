<template>
	<div>
		<div class="minus">
			<i class="fas fa-minus" @click="chartDelete"></i>
		</div>

		<bar-chart
			v-if="loaded"
			:targetData="targetValue"
			:chartLabels="dateValue"
			:performanceData="performanceValue"
		></bar-chart>
		<chart-update-modal
			v-if="updateModal"
			@close="updateModal = false"
		></chart-update-modal>

		<div
			v-for="item in chartItem"
			v-bind:key="item.chartNo"
			class="chartItemBox"
		>
			<span
				>{{ item.chartDate }}
				<!-- <i
					class="fas fa-pen-square chartItem"
					@click="updateChartData(item.chartNo)"
				></i> -->
				<i class="fas fa-pen-square chartItem" @click="updateModal = true"></i>
				<i
					class="fas fa-minus-circle chartItem"
					@click="deleteChartData(item.chartNo)"
				></i
			></span>
		</div>
	</div>
</template>

<script>
import BarChart from '../components/BarChart.vue';
import {
	fetchChartList,
	lastChartItemDelete,
	ChartItemDelete,
} from '@/api/index';
import ChartUpdateModal from '../components/common/ChartUpdateModal.vue';
export default {
	components: { BarChart, ChartUpdateModal },
	data() {
		return {
			loaded: false,
			updateModal: false,
			targetValue: [],
			performanceValue: [],
			chartItem: [],
			dateValue: [],
		};
	},
	methods: {
		async fetchData() {
			try {
				const response = await fetchChartList();
				console.log('막대 그래프에서 차트 데이터 가져오기');
				this.chartItem = response.data;
				this.chartItem.forEach(item => {
					this.targetValue.push(item.target); //  목표치
					this.dateValue.push(item.chartDate);
					this.performanceValue.push(item.performance); // 실적치
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
		async updateChartData(chartNo) {
			this.$router.push(`/updatePage/${chartNo}`);
		},
		async chartDelete() {
			const ItemLength = this.chartItem.length;
			const LastChartNo = this.chartItem[ItemLength - 1].chartNo;
			try {
				const response = await lastChartItemDelete(LastChartNo);
				console.log(response);
				// this.$router.go();
				this.$emit('pageReload');
			} catch (error) {
				console.log('에러!!!', error);
			}
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
.fa-minus {
	font-size: 2.9rem;
}
.minus {
	display: flex;
	justify-content: flex-end;
	margin-right: 10px;
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
