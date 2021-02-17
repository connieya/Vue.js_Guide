<template>
	<div>
		<!-- <my-switch
			:propsdata="switchValue"
			@switchValueChanged="switchButton"
		></my-switch> -->
		<!-- 구분선 -->

		<div class="switch-component-wrapper">
			<div
				class="switch-wrapper"
				:class="{ on: switchOfOff, off: !switchOfOff }"
				@click="changeSwitchValue"
			>
				<div class="circle"></div>
			</div>
		</div>
		<div class="btnInfo">
			<a href="javascript:;" @click="logoutUser" class="btn btn-warning"
				>로그아웃</a
			>
			<a href="javascript:;" @click="deleteUserData" class="btn btn-danger"
				>회원탈퇴</a
			>
		</div>

		<template v-if="switchOfOff">
			<BarChartPage></BarChartPage>
		</template>
		<template v-else>
			<LineChartPage></LineChartPage>
			<!-- <router-link to="/main/bar">dd</router-link> -->
		</template>
	</div>
</template>

<script>
// import MySwitch from '../components/common/MySwitch.vue';
import { deleteUser } from '@/api/index';
import BarChartPage from '@/views/BarChartPage';
import LineChartPage from '@/views/LineChartPage';
export default {
	components: {
		//MySwitch,
		LineChartPage,
		BarChartPage,
	},
	data() {
		return {
			// switchValue: true,
			switchOfOff: true,
		};
	},
	methods: {
		switchButton() {
			this.switchValue = !this.switchValue;
		},
		changeSwitchValue() {
			this.switchOfOff = !this.switchOfOff;
		},
		logoutUser() {
			this.$store.commit('clearUserId');
			this.$router.push('/intro');
		},
		async deleteUserData() {
			const response = await deleteUser(this.$store.state.token);
			console.log(response);
			if (response.data === 1) {
				alert('회원 탈퇴가 완료 되었습니다.');
				this.$router.push('/intro');
			} else {
				alert('회원 탈퇴 실패');
			}
		},
	},
	created() {
		console.log('dsd', this.$store.state);
		console.log('dsdssd', this.$store.state.token);
	},
};
</script>

<style scoped>
.switch-component-wrapper {
	display: flex;
}
.switch-wrapper {
	width: 10%;
	min-height: 4vw;
	display: flex;
	cursor: pointer;
	border-radius: 22px;
	align-items: center;
	padding: 2px;
	transition: all 0.5s;
}
.on {
	background: green;
	justify-content: flex-end;
}
.off {
	background: gray;
	justify-content: flex-start;
}
.circle {
	background: #fff;
	width: 40%;
	height: 100%;
	border-radius: 50%;
}
.btnInfo {
	display: flex;
	justify-content: flex-end;
	margin-right: 10px;
}
</style>
