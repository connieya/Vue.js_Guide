<template>
	<div>
		<!-- <router-link to="/bar">막대차트</router-link>
		<router-link to="/line">선차트</router-link> -->
		<bar-chart
			v-if="loaded"
			:targetData="targetValue"
			:chartLabels="dateValue"
			:performanceData="performanceValue"
			:style="myStyles"
		></bar-chart>
		<div class="minus">
			<i class="fas fa-minus" @click="chartDelete"></i>
		</div>
		<!-- <button @click="increase()">Increase height</button> -->

		<span @click="addData"><i class="fas fa-plus-circle"></i></span>
		<Modal v-if="showModal" @close="showModal = false" @refreshs="fetchData">
			<h3 slot="header">차트 등록하기</h3>
		</Modal>
		<!-- <ul>
			<li v-for="item in chartItem" :key="item.chartNo">{{ item.target }}</li>
		</ul> -->
	</div>
</template>

<script>
import BarChart from '../components/BarChart.vue';
import Modal from '@/components/common/Modal';
import { fetchChartList, lastChartItemDelete } from '@/api/index';
export default {
	components: { BarChart, Modal },
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
		increase() {
			this.height += 10;
			console.log('sadasdadasd');
		},

		addData() {
			this.showModal = true;
		},

		async fetchData() {
			try {
				const response = await fetchChartList();
				this.chartItem = response.data;
				this.chartItem.forEach(item => {
					// console.log('item!!!!!!!!!!', item);
					this.targetValue.push(item.target); //  목표치
					this.dateValue.push(item.chartDate);
					this.performanceValue.push(item.performance); // 실적치
					this.loaded = true;
					console.log('하하하낭만ㅇㅁㅇ마');
				});
			} catch (error) {
				console.log(error);
			}
		},
		async chartDelete() {
			const ItemLength = this.chartItem.length;
			const LastChartNo = this.chartItem[ItemLength - 1].chartNo;
			// console.log('ddsadd', this.chartItem.length);
			// console.log('ddsadadsadd', this.chartItem[ItemLength - 1]);
			// console.log('ddsadadsadd12111', this.chartItem[ItemLength - 1].chartNo);
			console.log('dsadd12111', LastChartNo);
			try {
				const response = await lastChartItemDelete(LastChartNo);
				console.log(response);
				this.$router.go();
			} catch (error) {
				console.log('에러!!!', error);
			}
		},
	},
	created() {
		this.fetchData();
	},
	computed: {
		myStyles() {
			return {
				height: `${this.height}px`,
				position: 'relative',
			};
		},
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
.fa-minus {
	font-size: 2.9rem;
}
.minus {
	display: flex;
	justify-content: flex-end;
	margin-right: 10px;
}
</style>
