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
		propsdata: {
			type: Array,
			required: true,
		},
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
	mounted() {
		this.rerenderBarChart();
	},
	methods: {
		rerenderBarChart: function() {
			this.renderChart(
				{
					labels: this.date,
					datasets: [
						{
							label: '목표치',
							colors: 'green',
							backgroundColor: 'blue',
							data: this.target,
						},
						{
							label: '실적치',
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
		target: function() {
			this.rerenderBarChart();
		},
		product: function() {
			this.rerenderBarChart();
		},
		date: function() {
			this.rerenderBarChart();
		},
	},
	computed() {},
	created() {
		console.log('date', this.date);
		console.log('propsdata :', this.propsdata);
	},
};
</script>
