<template>
	<div>
		<div class="header">
			<div><i class="fas fa-coffee"></i>우유</div>
			<div class="options">
				<select name="month" id="" v-model="selected">
					<option value="2021-01">1월</option>
					<option value="2021-02">2월</option>
					<option value="2021-03">3월</option>
					<option value="2021-04">4월</option>
					<option value="2021-05">5월</option>
					<option value="2021-06">6월</option>
					<option value="2021-07">7월</option>
					<option value="2021-08">8월</option>
					<option value="2021-09">9월</option>
					<option value="2021-10">10월</option>
					<option value="2021-11">11월</option>
					<option value="2021-12">12월</option>
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
			selected: '2021-02',
		};
	},
};
</script>

<style scoped>
.header {
	display: flex;
	justify-content: space-between;
	font-size: 1.5rem;
}
.options {
	font-size: 1.2rem;
}
select {
	color: #181010;
	font-weight: 550;
}
</style>
