<script>
import { Line } from 'vue-chartjs';
export default {
	extends: Line,
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
								display: true,
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
			default: null,
		},
		performanceData: {
			type: Array,
			default: null,
		},
		labelsDate: {
			type: Array,
			default: null,
		},
	},
	mounted() {
		this.renderChart(
			{
				labels: this.labelsDate,
				datasets: [
					{
						label: '목표치',
						colors: 'green',
						borderWidth: 2,
						borderColor: 'blue',
						backgroundColor: 'white',
						pointBackgroundColor: 'blue',
						data: this.targetData,
						fill: false,
					},
					{
						label: '실적치',
						colors: 'green',
						borderWidth: 2,
						borderColor: 'red',
						backgroundColor: 'white',
						pointBackgroundColor: 'red',
						data: this.performanceData,
						fill: false,
					},
				],
			},
			this.options,
		);
	},
};
</script>
