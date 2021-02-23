<template>
	<div>
		<bar-chart
			:target="this.target"
			:date="this.date"
			:product="this.product"
		></bar-chart>
		<i class="fas fa-plus-circle" @click="OpenModal"></i>
		<i class="fas fa-edit" @click="OpenUpdateModal"></i>
		<i class="fas fa-trash-alt"></i>

		<table>
			<tr>
				<td><input value="일자" readonly /></td>
				<td v-for="data in fetchData.slice(0, 15)" :key="data.id">
					<input type="text" :value="data.productionDate | subStr" />
				</td>
			</tr>
			<tr>
				<td><input type="text" value="목표" readonly /></td>
				<td v-for="data in fetchData.slice(0, 15)" :key="data.id">
					<input type="number" v-model="data.target" />
				</td>
			</tr>
			<tr>
				<td><input type="text" value="생산" readonly /></td>
				<td v-for="data in fetchData.slice(0, 15)" :key="data.id">
					<input type="number" v-model="data.product" />
				</td>
			</tr>

			<tr>
				<td><input value="일자" readonly size="5" /></td>
				<td v-for="data in fetchData.slice(15, 30)" :key="data.id">
					<input type="text" :value="data.productionDate | subStr" />
				</td>
			</tr>
			<tr>
				<td><input type="text" value="목표" size="5" readonly /></td>
				<td v-for="data in fetchData.slice(15, 30)" :key="data.id">
					<input type="number" v-model="data.target" size="5" />
				</td>
			</tr>
			<tr>
				<td><input type="text" value="생산" size="5" readonly /></td>
				<td v-for="data in fetchData.slice(15, 30)" :key="data.id">
					<input type="number" v-model="data.product" size="5" />
				</td>
			</tr>
		</table>

		<register-modal
			v-if="showModal"
			@close="showModal = false"
			@refresh="fetchProductionData"
			:propsdata="propsdata"
		></register-modal>
		<update-modal
			v-if="updateModal"
			@close="updateModal = false"
		></update-modal>
		{{ this.$store.state.propsdata }}
	</div>
</template>

<script>
import RegisterModal from '../components/common/RegisterModal.vue';

import { getProductionData } from '@/api/index';
import BarChart from '../components/common/BarChart.vue';
import UpdateModal from '../components/common/UpdateModal.vue';
export default {
	props: {
		propsdata: String,
	},
	data() {
		return {
			showModal: false,
			updateModal: false,
			fetchData: [],
			target: [],
			product: [],
			date: [],
		};
	},
	filters: {
		subStr: function(string) {
			return string.substr(5, 5);
		},
	},
	components: {
		RegisterModal,
		BarChart,
		UpdateModal,
	},
	methods: {
		subStringDate(string) {
			return string.subString(0, 2);
		},
		OpenModal() {
			this.showModal = true;
		},
		OpenUpdateModal() {
			this.updateModal = true;
		},
		async fetchProductionData() {
			const response = await getProductionData(this.propsdata);
			this.fetchData = response.data;
			this.date = this.fetchData.map(a => a.productionDate);
			this.product = this.fetchData.map(a => a.product);
			this.target = this.fetchData.map(a => a.target);
			this.$store.commit('SetPropsdata', this.propsdata);
		},
	},

	watch: {
		propsdata: {
			immediate: true,
			handler: function() {
				this.fetchProductionData();
			},
		},
	},
};
</script>

<style scoped>
table {
	border: 1px solid black;
	display: grid;
}
tr {
	border: 1px solid black;
	/* background-color: red; */
	width: 100%;
	height: 100%;
}
td {
	/* background-color: gray; */
}
input {
	width: 90%;
	height: 100%;
}
.fa-plus-circle {
	font-size: 1.9rem;
	margin-top: 30px;
}
.fa-arrow-alt-circle-right {
	font-size: 1.5rem;
}
.updateIcon {
	font-size: 1.5rem;
	display: flex;
	width: 80px;
	justify-content: flex-end;
}
button {
	display: inline;
	width: 100%;
}
.btn-info {
	display: flex;
}
</style>
