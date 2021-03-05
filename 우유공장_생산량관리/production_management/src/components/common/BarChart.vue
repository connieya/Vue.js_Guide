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
		target: {
			type: Array,
			required: true,
		},
		product: {
			type: Array,
			required: true,
		},
		date: {
			type: Array,
			required: true,
		},
	},
	methods: {
		rerenderBarChart() {
			this.renderChart(
				{
					labels: this.date,
					datasets: [
						{
							label: '목표량(팩)',
							colors: 'green',
							backgroundColor: 'blue',
							data: this.target,
						},
						{
							label: '생산량(팩)',
							colors: 'green',
							backgroundColor: 'red',
							data: this.product,
						},
					],
				},
				this.options,
			);
		},
	},
	watch: {
		target: {
			handler: 'rerenderBarChart',
		},
		product: {
			handler: 'rerenderBarChart',
		},
		date: {
			handler: 'rerenderBarChart',
		},
		// height: {
		// 	handler: 'rerenderBarChart',
		// },
	},
};
</script>
