<template>
	<div>
		<div class="switch-component-wrapper">
			<div
				class="switch-wrapper"
				:class="{ on: switchOnOff, off: !switchOnOff }"
				@click="changeSwitch"
			>
				<div class="circle"></div>
			</div>
		</div>

		<i class="fas fa-bars" @click="tableControl"></i>
		<template v-if="switchOnOff">
			<bar-chart
				:target="this.target"
				:date="this.date"
				:product="this.product"
				:style="myStyles"
			></bar-chart>
		</template>
		<template v-else>
			<line-chart
				:target="this.target"
				:date="this.date"
				:product="this.product"
				:style="myStyles"
			></line-chart>
		</template>
		<div class="btnInfo">
			<i class="fas fa-plus-circle" @click="OpenModal"></i>
			<i class="fas fa-edit" @click="OpenUpdateModal"></i>
		</div>
		<template v-if="tableView">
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
				<template v-if="this.fetchData.length > 15">
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
				</template>
			</table>
		</template>

		<register-modal
			v-if="showModal"
			@close="showModal = false"
			@refresh="fetchProductionData"
		></register-modal>
		<update-modal
			v-if="updateModal"
			@close="updateModal = false"
			@refresh="fetchProductionData"
		></update-modal>
	</div>
</template>

<script>
import RegisterModal from '../components/common/RegisterModal.vue';

import { getProductionData } from '@/api/index';
import BarChart from '../components/common/BarChart.vue';
import UpdateModal from '../components/common/UpdateModal.vue';
import LineChart from '../components/common/LineChart.vue';
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
			switchOnOff: true,
			tableView: true,
			height: '',
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
		LineChart,
	},
	computed: {
		myStyles() {
			return {
				height: `${this.height}px`,
				position: 'relative',
			};
		},
	},
	methods: {
		tableControl() {
			this.tableView = !this.tableView;
		},
		changeSwitch() {
			this.switchOnOff = !this.switchOnOff;
		},
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
		switchOnOff: {
			immediate: true,
			handler: function() {
				this.fetchProductionData();
			},
		},
		tableView: {
			handler: function() {
				if (this.tableView === true) {
					this.height = 300;
				} else {
					this.height = 600;
				}
			},
		},
		height: function(value, oldValue) {
			console.log(value, oldValue);
		},
	},
};
</script>

<style scoped>
/* 토글 스타일링  */
.switch-component-wrapper {
	display: flex;
	margin: 1.5rem 0.5rem;
	justify-content: flex-end;
}
.switch-wrapper {
	width: 6%;
	min-height: 3vw;
	display: flex;
	cursor: pointer;
	border-radius: 23px;
	align-items: center;
	padding: 2px;
	transition: all 0.5s;
}
.on {
	background: green;
	justify-content: flex-end;
}
.off {
	background: gray;
	justify-content: flex-start;
}
.circle {
	background: #fff;
	width: 50%;
	height: 100%;
	border-radius: 50%;
}

table {
	border: 1px solid black;
	margin-top: 10px;
	/* display: grid; */
}
tr {
	border: 1px solid black;
	width: 100%;
	height: 100%;
}
input {
	width: 90%;
	height: 100%;
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

/* 수정 삭제 버튼  */
.btnInfo {
	display: flex;
	justify-content: flex-end;
	font-size: 2.1rem;
	margin: 7px 0 0 0;
}

/* 햄버거 아이콘  */
.fa-bars {
	font-size: 2.2rem;
	margin: 1rem auto 0 auto;
}
</style>
