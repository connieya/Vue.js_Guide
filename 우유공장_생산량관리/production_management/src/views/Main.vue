<template>
	<div>
		<bar-chart :propsdata="fetchData"></bar-chart>
		<table>
			<tr>
				<td><input value="일자" readonly /></td>
				<td><input value="1" readonly /></td>
				<td><input value="2" readonly /></td>
				<td><input value="3" readonly /></td>
				<td><input value="4" readonly /></td>
				<td><input value="5" readonly /></td>
				<td><input value="6" readonly /></td>
				<td><input value="7" readonly /></td>
				<td><input value="8" readonly /></td>
				<td><input value="9" readonly /></td>
				<td><input value="10" readonly /></td>
				<td><input value="11" readonly /></td>
				<td><input value="12" readonly /></td>
				<td><input value="13" readonly /></td>
				<td><input value="14" readonly /></td>
				<td><input value="15" readonly /></td>
			</tr>
			<tr>
				<td><input type="text" value="목표" /></td>
				<td><input type="number" value="" v-model="target" /></td>
			</tr>
			<tr v-for="data in fetchData" v-bind:key="data.id">
				<td><input type="text" value="생산" /></td>
				<td><input type="number" v-model="data.product" /></td>
			</tr>
			<tr>
				<td><input value="일자" readonly /></td>
				<td><input value="16" readonly /></td>
				<td><input value="17" readonly /></td>
				<td><input value="18" readonly /></td>
				<td><input value="19" readonly /></td>
				<td><input value="20" readonly /></td>
				<td><input value="21" readonly /></td>
				<td><input value="22" readonly /></td>
				<td><input value="23" readonly /></td>
				<td><input value="24" readonly /></td>
				<td><input value="25" readonly /></td>
				<td><input value="26" readonly /></td>
				<td><input value="27" readonly /></td>
				<td><input value="28" readonly /></td>
				<td><input value="29" readonly /></td>
				<td><input value="30" readonly /></td>
			</tr>
			<tr>
				<td><input type="text" value="목표" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
			</tr>
			<tr>
				<td><input type="text" value="생산" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
			</tr>
		</table>

		<i class="fas fa-plus-circle" @click="OpenModal"></i>
		<register-modal
			v-if="showModal"
			@close="showModal = false"
			@refresh="fetchProductionData"
			:propsdata="propsdata"
		></register-modal>

		<div>
			<table v-for="data in fetchData" v-bind:key="data.id">
				<thead>
					<tr>
						<th>일자</th>
						<th>{{ data.productionDate }}</th>
					</tr>
				</thead>
				<tbody>
					<!-- <tr>
						<td>목표치</td>
						<td>{{ data.target }}</td>
					</tr>
					<tr>
						<td>실적치</td>
						<td>{{ data.product }}</td>
					</tr> -->
				</tbody>
			</table>
			{{ date }}
			<p>
				------------------------------------------------------------------------
			</p>
		</div>
		<div class="dataList">
			<div v-for="data in fetchData" v-bind:key="data.id">
				{{ data.productionDate }}
				목표치:{{ data.target }} 실적치:{{ data.product }}
			</div>
		</div>
	</div>
</template>

<script>
import RegisterModal from '../components/common/RegisterModal.vue';

import { getProductionData } from '@/api/index';
import BarChart from '../components/common/BarChart.vue';
export default {
	props: {
		propsdata: String,
	},
	data() {
		return {
			showModal: false,
			fetchData: [],
			target: [],
			product: [],
			date: [],
		};
	},
	components: {
		RegisterModal,
		BarChart,
	},
	methods: {
		OpenModal() {
			this.showModal = true;
		},
		async fetchProductionData(value) {
			const response = await getProductionData(value);
			console.log('데이터 갯수  :', response.data.length);
			this.fetchData = response.data;
			// const jsonParsingData = JSON.stringify(response.data);
			console.log('응답 받은 데이터들 :', this.fetchData);
			for (let data in this.fetchData) {
				console.log('data: ', this.fetchData[data].productionDate);
				this.date.push(this.fetchData[data].productionDate);
			}
			console.log('날짜 : ', this.date);
			// this.fetchData.forEach(item => {
			// 	this.target.push(item.target);
			// 	this.product.push(item.product);
			// 	this.date.push(item.productionDate);
			// 	console.log('fetch한 date : ', this.date);
			// });
		},
	},
	watch: {
		propsdata: function(value) {
			this.fetchProductionData(value);
		},
		// propsdata: {
		// 	immediate: true,
		// 	handler: function() {
		// 		this.fetchProductionData();
		// 	},
		// },
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
}

.dataList {
	display: grid;
	grid-template-columns: auto auto auto auto;
	background-color: pink;
}
</style>
