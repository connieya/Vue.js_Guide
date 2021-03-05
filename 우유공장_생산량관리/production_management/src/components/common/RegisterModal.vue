<template>
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<div class="modal-header">
						<slot name="header"> {{ this.propsdata }}월 생산량 입력 </slot>
					</div>

					<div class="modal-body">
						<slot name="body">
							<form @submit.prevent="submitForm">
								<div>
									<template v-if="this.propsdata === '2021-01'">
										<input
											type="date"
											id="Date"
											v-model="date"
											placeholder="날짜를 입력하세요"
											min="2021-01-01"
											max="2021-01-30"
											required
										/>
									</template>
									<template v-else-if="this.propsdata === '2021-02'">
										<input
											type="date"
											id="Date"
											v-model="date"
											placeholder="날짜를 입력하세요"
											min="2021-02-01"
											max="2021-02-28"
											required
										/>
									</template>
									<template v-else-if="this.propsdata === '2021-03'">
										<input
											type="date"
											id="Date"
											v-model="date"
											placeholder="날짜를 입력하세요"
											min="2021-03-01"
											max="2021-03-30"
											required
										/>
									</template>
									<template v-else-if="this.propsdata === '2021-04'">
										<input
											type="date"
											id="Date"
											v-model="date"
											placeholder="날짜를 입력하세요"
											min="2021-04-01"
											max="2021-04-30"
											required
										/>
									</template>
									<template v-else-if="this.propsdata === '2021-05'">
										<input
											type="date"
											id="Date"
											v-model="date"
											placeholder="날짜를 입력하세요"
											min="2021-05-01"
											max="2021-05-30"
											required
										/>
									</template>
									<template v-else-if="this.propsdata === '2021-06'">
										<input
											type="date"
											id="Date"
											v-model="date"
											placeholder="날짜를 입력하세요"
											min="2021-06-01"
											max="2021-06-30"
											required
										/>
									</template>
									<template v-else-if="this.propsdata === '2021-07'">
										<input
											type="date"
											id="Date"
											v-model="date"
											placeholder="날짜를 입력하세요"
											min="2021-07-01"
											max="2021-07-30"
											required
										/>
									</template>
									<template v-else-if="this.propsdata === '2021-08'">
										<input
											type="date"
											id="Date"
											v-model="date"
											placeholder="날짜를 입력하세요"
											min="2021-08-01"
											max="2021-08-30"
											required
										/>
									</template>
									<template v-else-if="this.propsdata === '2021-09'">
										<input
											type="date"
											id="Date"
											v-model="date"
											placeholder="날짜를 입력하세요"
											min="2021-09-01"
											max="2021-09-30"
											required
										/>
									</template>
									<template v-else-if="this.propsdata === '2021-10'">
										<input
											type="date"
											id="Date"
											v-model="date"
											placeholder="날짜를 입력하세요"
											min="2021-10-01"
											max="2021-10-30"
											required
										/>
									</template>
									<template v-else-if="this.propsdata === '2021-11'">
										<input
											type="date"
											id="Date"
											v-model="date"
											placeholder="날짜를 입력하세요"
											min="2021-11-01"
											max="2021-11-30"
											required
										/>
									</template>
									<template v-else-if="this.propsdata === '2021-12'">
										<input
											type="date"
											id="Date"
											v-model="date"
											placeholder="날짜를 입력하세요"
											min="2021-12-01"
											max="2021-12-30"
											required
										/>
									</template>
								</div>
								<!-- <template v-if="this.fetchData">
									<input
										type="text"
										placeholder="이미 등록한 날짜입니다."
										readonly
									/>
									<input
										type="text"
										placeholder="다른 날짜를 선택하세요"
										readonly
									/>
									<button
										class="btn btn-secondary"
										type="button"
										@click="$emit('close')"
									>
										취소
									</button>
								</template> -->
								<template>
									<div>
										<input
											type="number"
											id="target"
											v-model="target"
											placeholder="목표량을 입력하세요"
											required
										/>
									</div>
									<div>
										<input
											type="number"
											id="product"
											v-model="product"
											placeholder="생산량을 입력하세요"
											required
										/>
									</div>
									<div class="modalBtns">
										<button class="btn btn-primary" type="submit">
											등록
										</button>
										<button
											class="btn btn-secondary"
											type="button"
											@click="$emit('close')"
										>
											취소
										</button>
									</div>
								</template>
							</form>
						</slot>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import { insertProductionData, getProductionDayDate } from '@/api/index';
export default {
	props: {
		propsdata: String,
	},
	data() {
		return {
			target: '',
			product: '',
			date: '',
			fetchData: '',
		};
	},
	methods: {
		async submitForm() {
			const productionData = {
				target: this.target,
				product: this.product,
				productionDate: this.date,
			};
			try {
				const response = await insertProductionData(productionData);
				console.log('서버로 데이터 보냄 응답 값은 : ', response);
				this.$emit('close');
				this.$emit('refresh');
			} catch (error) {
				alert('이미 등록한 날짜 입니다.');
				console.log(error);
			}
		},
		async getDayDatas() {
			try {
				const response = await getProductionDayDate(this.date);
				console.log('날짜데이터 응답 : ', response);
				console.log('1111', response.data);
				console.log('2222', response.data.id);
				this.fetchData = response.data.id;
			} catch (error) {
				console.log('에러 : ', error);
			}
		},
	},
	// async created() {
	// 	try {
	// 		const response = await getProductionDayDate(this.date);
	// 		console.log('날짜데이터 응답 : ', response);
	// 	} catch (error) {
	// 		console.log('에러 : ', error);
	// 	}
	// },
	watch: {
		date: {
			immediate: true,
			handler: function() {
				// this.$store.dispatch('FETCH_DAY', this.date);
				this.getDayDatas();
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
