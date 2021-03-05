<template>
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<div class="modal-header">
						<slot name="header">
							{{ this.$store.state.propsdata }}월 데이터 변경
						</slot>
					</div>

					<div class="modal-body">
						<slot name="body">
							<div>
								<select name="day" id="" v-model="dateSelected">
									<option
										:value="d.productionDate"
										v-for="d in fetchData"
										:key="d.id"
										>{{ d.productionDate }}</option
									>
								</select>
							</div>
							<form @submit.prevent="submitForm">
								<div>
									<input
										type="number"
										id="target"
										v-model="target"
										placeholder="목표치를 입력하세요"
										required
									/>
								</div>
								<div>
									<input
										type="number"
										id="product"
										v-model="product"
										placeholder="실적치를 입력하세요"
										required
									/>
								</div>
								<div class="modalBtns">
									<button class="btn btn-primary" type="submit">
										수정
									</button>
									<button
										class="btn btn-danger"
										type="button"
										@click="deleteData"
									>
										삭제
									</button>
									<button
										class="btn btn-secondary"
										type="button"
										@click="$emit('close')"
									>
										취소
									</button>
								</div>
							</form>
							{{ this.dateSelected }}
						</slot>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import {
	getProductionData,
	getProductionDayDate,
	putProductionDayData,
	deleteProductionDayData,
} from '@/api/index';
export default {
	props: {
		propsdata: String,
	},
	data() {
		return {
			target: '',
			product: '',
			date: [],
			fetchData: [],
			dateSelected: '',
			id: '',
		};
	},
	methods: {
		// 해당 날짜 데이터 수정하기
		async submitForm() {
			const productionData = {
				target: this.target,
				product: this.product,
				productionDate: this.dateSelected,
			};
			try {
				const response = await putProductionDayData(this.id, productionData);
				console.log('수정한 데이터 보냄 응답 값은 : ', response);
				this.$emit('close');
				this.$emit('refresh');
			} catch (error) {
				alert('등록 실패');
				console.log(error);
			}
		},
		// 해당 날짜 데이터 삭제하기
		async deleteData() {
			if (confirm('정말 삭제 하시겠습니까?')) {
				const { data } = await deleteProductionDayData(this.id);
				console.log(data);
				this.$emit('close');
				this.$emit('refresh');
			}
		},
		//#2번해당 날짜 데이터 값 가져오기
		async getDayData() {
			const { data } = await getProductionDayDate(this.dateSelected);
			this.target = data.target;
			this.product = data.product;
			this.id = data.id;
		},
	},
	// #1번 월별 데이터 리스트 가져오기
	async created() {
		const response = await getProductionData(this.$store.state.propsdata);
		this.fetchData = response.data;
		this.date = this.fetchData.map(a => a.productionDate);
	},
	watch: {
		dateSelected: {
			immediate: true,
			handler: function(after, before) {
				console.log('after :', after, 'before : ', before);
				this.getDayData();
			},
		},
	},
};
</script>

<style scoped>
.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: table;
	transition: opacity 0.3s ease;
}
.modal-wrapper {
	display: table-cell;
	vertical-align: middle;
}
.modal-container {
	width: 30%;
	margin: 0px auto;
	padding: 20px 30px;
	background-color: #fff;
	border-radius: 2px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	transition: all 0.3s ease;
	border: 1px solid #000000;
	font-family: Helvetica, Arial, sans-serif;
}
.modal-header h3 {
	margin-top: 0;
	color: #42b983;
}
.modal-body {
	margin: 20px 0;
}
.modal-default-button {
	float: right;
}
.modal-enter {
	opacity: 0;
}
.modal-leave-active {
	opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
input {
	margin: 12px 0;
	width: 100%;
	font-size: 1.2rem;
}
.modalBtns {
	display: flex;
	justify-content: flex-end;
	margin-top: 20px;
}
</style>
