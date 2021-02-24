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
		target: {
			type: Array,
			default: null,
		},
		product: {
			type: Array,
			default: null,
		},
		date: {
			type: Array,
			default: null,
		},
	},
	methods: {
		rerenderLineChart() {
			this.renderChart(
				{
					labels: this.date,
					datasets: [
						{
							label: '목표치',
							colors: 'green',
							borderWidth: 2,
							borderColor: 'blue',
							backgroundColor: 'white',
							pointBackgroundColor: 'blue',
							data: this.target,
							fill: false,
						},
						{
							label: '실적치',
							colors: 'green',
							borderWidth: 2,
							borderColor: 'red',
							backgroundColor: 'white',
							pointBackgroundColor: 'red',
							data: this.product,
							fill: false,
						},
					],
				},
				this.options,
			);
		},
	},
	watch: {
		target: {
			handler: 'rerenderLineChart',
		},
		product: {
			handler: 'rerenderLineChart',
		},
		date: {
			handler: 'rerenderLineChart',
		},
	},
};
</script>
