<template>
	<div>
		<my-switch
			:propsdata="switchValue"
			@switchValueChanged="switchButton"
		></my-switch>
		<template v-if="switchValue">
			<LineChartPage></LineChartPage>
		</template>
		<template v-else>
			<BarChartPage></BarChartPage>
		</template>
	</div>
</template>

<script>
import MySwitch from '../components/common/MySwitch.vue';
import BarChartPage from '@/views/BarChartPage';
import LineChartPage from '@/views/LineChartPage';
export default {
	components: { MySwitch, LineChartPage, BarChartPage },
	data() {
		return {
			switchValue: true,
		};
	},
	methods: {
		switchButton() {
			this.switchValue = !this.switchValue;
		},
	},
};
</script>

<style></style>
