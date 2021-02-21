<template>
	<div>
		<div class="header">
			<div>우유</div>
			<div>
				<select name="month" id="" v-model="selected">
					<option value="January">1월</option>
					<option value="February">2월</option>
					<option value="March">3월</option>
					<option value="April">4월</option>
					<option value="May">5월</option>
					<option value="June">6월</option>
					<option value="July">7월</option>
					<option value="August">8월</option>
					<option value="September">9월</option>
					<option value="October">10월</option>
					<option value="November">11월</option>
					<option value="December">12월</option>
				</select>
				일별 생산현황
			</div>
			<div>품목 : 맛나우유</div>
		</div>
		<Main :propsdata="selected"></Main>
	</div>
</template>

<script>
import Main from '@/views/Main';
export default {
	components: {
		Main,
	},
	data() {
		return {
			selected: 'February',
		};
	},
};
</script>

<style scoped>
.header {
	display: flex;
	justify-content: space-between;
}
</style>
