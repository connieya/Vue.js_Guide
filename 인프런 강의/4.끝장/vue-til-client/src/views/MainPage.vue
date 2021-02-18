<template>
	<div>
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
		<span @click="ModalOpen"><i class="fas fa-plus-circle"></i></span>
		<Modal
			v-if="showModal"
			@close="showModal = false"
			@reload="fetchChartListData"
		>
			<h3 slot="header">차트 등록하기</h3>
		</Modal>
		<template v-if="switchOfOff">
			<BarChartPage
				@refresh="fetchChartListData"
				@pageReload="fetchChartListData"
			></BarChartPage>
		</template>
		<template v-else>
			<LineChartPage @refresh="fetchChartListData"></LineChartPage>
		</template>
	</div>
</template>

<script>
// import MySwitch from '../components/common/MySwitch.vue';
import { deleteUser } from '@/api/index';
import BarChartPage from '@/views/BarChartPage';
import LineChartPage from '@/views/LineChartPage';
import { fetchChartList } from '@/api/index';
import Modal from '../components/common/Modal.vue';
export default {
	components: {
		//MySwitch,
		LineChartPage,
		BarChartPage,
		Modal,
	},
	data() {
		return {
			loaded: false,
			// switchValue: true,
			switchOfOff: true,
			showModal: false,
			chartItem: [],
			chartNo: '',
		};
	},
	methods: {
		// switchButton() {
		// 	this.switchValue = !this.switchValue;
		// },
		changeSwitchValue() {
			this.switchOfOff = !this.switchOfOff;
		},
		logoutUser() {
			this.$store.commit('clearUserId');
			this.$router.push('/intro');
		},
		ModalOpen() {
			this.showModal = true;
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

		async fetchChartListData() {
			try {
				const response = await fetchChartList();
				console.log('메인 페이지에서 차트 데이터 불러오기');
				this.chartItem = response.data;
				this.chartItem.forEach(item => {
					this.chartNo = item.chartNo;
					this.loaded = true;
				});
			} catch (error) {
				console.log(error);
			}
		},
	},
	created() {
		this.fetchChartListData();
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
.fa-plus-circle {
	font-size: 2.9rem;
}
</style>
