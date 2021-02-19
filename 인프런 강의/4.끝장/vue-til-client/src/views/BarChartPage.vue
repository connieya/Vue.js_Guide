<template>
	<div>
		<!-- 토글 버튼 -->
		<div class="switch-component-wrapper" v-if="toggleView">
			<div
				class="switch-wrapper"
				:class="{ on: switchOfOff, off: !switchOfOff }"
				@click="changeSwitchValue"
			>
				<div class="circle"></div>
			</div>
		</div>
		<!-- 토글 버튼 -->
		<div class="btnInfo">
			<a href="javascript:;" @click="logoutUser" class="btn btn-warning"
				>로그아웃</a
			>
			<a href="javascript:;" @click="deleteUserData" class="btn btn-danger"
				>회원탈퇴</a
			>
		</div>
		<!-- 차트 등록하는 모달  -->
		<span @click="ModalOpen"><i class="fas fa-plus-circle"></i></span>
		<RegisterModal
			v-if="showModal"
			@close="showModal = false"
			@reload="fetchData"
		>
			<h3 slot="header">차트 등록하기</h3>
		</RegisterModal>

		<!-- 차트 마지막 데이터 삭제  버튼  -->
		<!-- <div class="minus">
			<i class="fas fa-minus" @click="chartLastDataDelete"></i>
		</div> -->

		<bar-chart
			v-if="loaded"
			:targetData="targetValue"
			:chartLabels="dateValue"
			:performanceData="performanceValue"
		></bar-chart>
		<chart-update-modal
			v-if="updateModal"
			@close="updateModal = false"
			:propsdata="chartNo"
		></chart-update-modal>

		<div
			v-for="item in chartItem"
			v-bind:key="item.chartNo"
			class="chartItemBox"
		>
			<span
				>{{ item.chartDate }}
				<!-- <i
					class="fas fa-pen-square chartItem"
					@click="updateChartData(item.chartNo)"
				></i> -->
				<i
					class="fas fa-pen-square chartItem"
					@click="openUpdateModal(item.chartNo)"
				></i>
				<i
					class="fas fa-minus-circle chartItem"
					@click="deleteChartData(item.chartNo)"
				></i
			></span>
		</div>
	</div>
</template>

<script>
import BarChart from '../components/BarChart.vue';
import {
	fetchChartList,
	lastChartItemDelete,
	ChartItemDelete,
	deleteUser,
} from '@/api/index';
import RegisterModal from '@/components/common/Modal'; // 차트 등록하는 모달
import ChartUpdateModal from '../components/common/ChartUpdateModal.vue'; // 차트 수정하는 모달
import { deleteCookie, deleteCookie2 } from '@/utils/cookies';
export default {
	components: { BarChart, ChartUpdateModal, RegisterModal },
	data() {
		return {
			loaded: false,
			updateModal: false,
			showModal: false,
			targetValue: [],
			performanceValue: [],
			chartItem: [],
			dateValue: [],
			chartNo: '',
			switchOfOff: true,
			// 토글버튼 스위치,
			toggleView: false,
		};
	},
	methods: {
		// 토글 스위치 온 오프 메서드
		changeSwitchValue() {
			this.switchOfOff = !this.switchOfOff;
			this.$router.push('/main/line');
		},
		logoutUser() {
			console.log('로그아웃 버튼 클릭 토큰값: ', this.$store.state.token);
			console.log('로그아웃 버튼 클릭 유저아이디: ', this.$store.state.userId);
			deleteCookie(this.$store.state.token);
			deleteCookie2(this.$store.state.userId);
			this.$store.commit('clearUserId');
			this.$router.push('/intro');
		},
		ModalOpen() {
			this.showModal = true; // 모달 오픈하는 plus 아이콘 메서드
		},
		async deleteUserData() {
			console.log('삭제 버튼 토큰:', this.$store.state.token);
			const response = await deleteUser(this.$store.state.token);
			console.log(response);
			if (response.data === 1) {
				alert('회원 탈퇴가 완료 되었습니다.');
				deleteCookie(this.$store.state.token);
				deleteCookie2(this.$store.state.userId);
				this.$store.commit('clearUserId');
				this.$router.push('/intro');
			} else {
				alert('회원 탈퇴 실패');
			}
		},

		async fetchData() {
			try {
				const response = await fetchChartList();
				console.log('막대 그래프에서 차트 데이터 가져오기');

				this.chartItem = response.data;
				this.chartItem.forEach(item => {
					this.targetValue.push(item.target); //  목표치
					this.dateValue.push(item.chartDate);
					this.performanceValue.push(item.performance); // 실적치
					this.toggleView = true;
					this.loaded = true;
				});
			} catch (error) {
				console.log(error);
			}
		},
		async deleteChartData(chartNo) {
			console.log('차트 일별 삭제 !! 번호는 : ', chartNo);
			const response = await ChartItemDelete(chartNo);
			console.log(response);
			// this.$emit('refresh');
			this.$router.go();
		},
		async updateChartData(chartNo) {
			this.$router.push(`/updatePage/${chartNo}`);
		},
		openUpdateModal(chartNo) {
			this.updateModal = true;
			this.chartNo = chartNo;
		},
		// 차트 마지막 데이터 삭제 하는 메서드
		async chartLastDataDelete() {
			const ItemLength = this.chartItem.length;
			const LastChartNo = this.chartItem[ItemLength - 1].chartNo;
			try {
				const response = await lastChartItemDelete(LastChartNo);
				console.log(response);
				// this.$router.go();
				this.$emit('pageReload');
			} catch (error) {
				console.log('에러!!!', error);
			}
		},
	},
	created() {
		this.fetchData();
	},
};
</script>

<style scoped>
/* 로그아웃 , 회원탈퇴 스타일  */
.btnInfo {
	display: flex;
	justify-content: flex-end;
	margin-right: 15px;
}
.fa-minus {
	font-size: 2.9rem;
}
.minus {
	display: flex;
	justify-content: flex-end;
	margin-right: 10px;
}
.chartItemBox {
	display: inline;
	margin: 12px;
	font-size: 1.3rem;
}
.chartItem {
	font-size: 1.9rem;
}
/* 토글 버튼 스타일  */
.switch-component-wrapper {
	display: flex;
	margin-left: 8px;
}
.switch-wrapper {
	width: 8%;
	min-height: 3vw;
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
/* 토글 버튼 스타일 */

/* 차트 등록하는 모달 오픈 하는 아이콘  */
.fa-plus-circle {
	font-size: 3.3rem;
}
</style>
