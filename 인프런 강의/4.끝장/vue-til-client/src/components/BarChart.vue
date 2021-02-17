<script>
import { Bar } from 'vue-chartjs';
export default {
	extends: Bar,
	data() {
		return {
			options: {
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true,
							},
							gridLines: {
								display: true,
							},
						},
					],
					xAxes: [
						{
							gridLines: {
								display: false,
							},
						},
					],
				},
				legend: {
					display: true,
				},
				responsive: true,
				maintainAspectRatio: false,
			},
		};
	},
	props: {
		targetData: {
			type: Array,
			required: true,
		},
		performanceData: {
			type: Array,
			required: true,
		},
		chartLabels: {
			type: Array,
			required: true,
		},
	},
	mounted() {
		this.renderChart(
			{
				labels: this.chartLabels,
				datasets: [
					{
						label: '목표치',
						colors: 'green',
						backgroundColor: 'blue',
						data: this.targetData,
					},
					{
						label: '실적치',
						colors: 'green',
						backgroundColor: 'red',
						data: this.performanceData,
					},
				],
			},
			this.options,
		);
	},
	created() {
		// console.log('sss', this.targetData);
		console.log('001', this.$refs);
		console.log('002', this.$refs.__proto__);
	},
	methods: {},
};
</script>
