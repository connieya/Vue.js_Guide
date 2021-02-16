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
		chartData: {
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
				labels: ['2월01일', '2월02일', '2월3일', '2월4일', '2월5일', '2월6일'],
				datasets: [
					{
						label: '실적치',
						colors: 'green',
						backgroundColor: 'red',
						// data: this.chartData,
						data: [100, 80, 90, 60, 80, 58],
					},
				],
			},
			this.options,
		);
	},
	created() {
		console.log('sss', this.chartData);
	},
};
</script>
