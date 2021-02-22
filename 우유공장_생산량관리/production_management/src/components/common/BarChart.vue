<script>
import { Bar } from 'vue-chartjs';
export default {
	extends: Bar,
	data() {
		return {
			target: [],
			product: [],
			date: [],
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
	// watch: {
	// 	target: function() {
	// 		this.rerenderBarChart();
	// 	},
	// 	product: function() {
	// 		this.rerenderBarChart();
	// 	},
	// 	date: function() {
	// 		this.rerenderBarChart();
	// 	},
	// },

	created() {
		console.log('datsssssssssssssssssse', this.date);
		console.log('propsdata :', this.propsdata);
		this.propsdata.forEach(item => {
			console.log('item!!!!!:', item);
			this.target.push(item.target);
			this.product.push(item.product);
			this.date.push(item.productionDate);
		});
	},
};
</script>
