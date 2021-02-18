<template>
	<div class="body">
		<h2>차트 데이터 수정하기</h2>
		<form @submit.prevent="submitForm">
			<div>
				<input
					type="number"
					id="target"
					v-model="target"
					placeholder="목표치를 입력하세요"
				/>
			</div>
			<div>
				<input
					type="number"
					id="performance"
					v-model="performance"
					placeholder="실적치를 입력하세요"
				/>
			</div>
			<div>
				<input
					type="type"
					id="chartDate"
					v-model="chartDate"
					placeholder="날짜를 입력하세요"
				/>
			</div>
			<div class="modalBtns">
				<button class="btn btn-primary" type="submit">
					등록
				</button>
				<button class="btn btn-secondary" type="button" @click="goBackPage">
					취소
				</button>
			</div>
		</form>
	</div>
</template>

<script>
import { fetchChartUpdate, fetchChartDetail } from '@/api/index';
export default {
	data() {
		return {
			target: '',
			performance: '',
			chartDate: '',
		};
	},
	async created() {
		console.log('chartNO 값은:', this.$route.params.chartNo);

		const response = await fetchChartDetail(this.$route.params.chartNo);
		console.log('스프링 부트에서 가져온 데이터 값은 ', response);
		this.target = response.data.target;
		this.performance = response.data.performance;
		this.chartDate = response.data.chartDate;
	},
	methods: {
		goBackPage() {
			this.$router.go(-1);
		},
		async submitForm() {
			const response = await fetchChartUpdate(this.$route.params.chartNo, {
				chartDate: this.chartDate,
				target: this.target,
				performance: this.performance,
			});
			console.log(response);
			this.$router.push('/main');
		},
	},
};
</script>

<style scoped>
h2 {
	text-align: center;
	color: #26dae0;
	text-shadow: burlywood;
	font-weight: 600;
}
.body {
	margin: 40px auto;
	width: 60%;
	padding: 20px 30px;
	background-color: #fff;
	border-radius: 2px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
input {
	margin: 12px 0;
	width: 100%;
	font-size: 1.2rem;
}
</style>
