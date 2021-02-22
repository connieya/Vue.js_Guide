<template>
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<div class="modal-header">
						<slot name="header"> {{ propsdata }}월 생산량 입력 </slot>
					</div>

					<div class="modal-body">
						<slot name="body">
							<form @submit.prevent="submitForm">
								<div>
									<template v-if="Month === '01'">
										<input
											type="date"
											id="Date"
											v-model="DateValue"
											placeholder="날짜를 입력하세요"
											min="2021-01-01"
											max="2021-01-30"
											required
										/>
									</template>
									<template v-else-if="Month === '02'">
										<input
											type="date"
											id="Date"
											v-model="DateValue"
											placeholder="날짜를 입력하세요"
											min="2021-02-01"
											max="2021-02-28"
											required
										/>
									</template>
									<template v-else-if="Month === '03'">
										<input
											type="date"
											id="Date"
											v-model="DateValue"
											placeholder="날짜를 입력하세요"
											min="2021-03-01"
											max="2021-03-30"
											required
										/>
									</template>
									<template v-else-if="Month === '04'">
										<input
											type="date"
											id="Date"
											v-model="DateValue"
											placeholder="날짜를 입력하세요"
											min="2021-04-01"
											max="2021-04-30"
											required
										/>
									</template>
									<template v-else-if="Month === '05'">
										<input
											type="date"
											id="Date"
											v-model="DateValue"
											placeholder="날짜를 입력하세요"
											min="2021-05-01"
											max="2021-05-30"
											required
										/>
									</template>
									<template v-else-if="Month === '06'">
										<input
											type="date"
											id="Date"
											v-model="DateValue"
											placeholder="날짜를 입력하세요"
											min="2021-06-01"
											max="2021-06-30"
											required
										/>
									</template>
									<template v-else-if="Month === '07'">
										<input
											type="date"
											id="Date"
											v-model="DateValue"
											placeholder="날짜를 입력하세요"
											min="2021-07-01"
											max="2021-07-30"
											required
										/>
									</template>
									<template v-else-if="Month === '08'">
										<input
											type="date"
											id="Date"
											v-model="DateValue"
											placeholder="날짜를 입력하세요"
											min="2021-08-01"
											max="2021-08-30"
											required
										/>
									</template>
									<template v-else-if="Month === '09'">
										<input
											type="date"
											id="Date"
											v-model="DateValue"
											placeholder="날짜를 입력하세요"
											min="2021-09-01"
											max="2021-09-30"
											required
										/>
									</template>
									<template v-else-if="Month === '10'">
										<input
											type="date"
											id="Date"
											v-model="DateValue"
											placeholder="날짜를 입력하세요"
											min="2021-10-01"
											max="2021-10-30"
											required
										/>
									</template>
									<template v-else-if="Month === '11'">
										<input
											type="date"
											id="Date"
											v-model="DateValue"
											placeholder="날짜를 입력하세요"
											min="2021-11-01"
											max="2021-11-30"
											required
										/>
									</template>
									<template v-else-if="Month === '12'">
										<input
											type="date"
											id="Date"
											v-model="DateValue"
											placeholder="날짜를 입력하세요"
											min="2021-12-01"
											max="2021-12-30"
											required
										/>
									</template>
								</div>
								<div>
									<input
										type="number"
										id="target"
										v-model="Target"
										placeholder="목표치를 입력하세요"
										required
									/>
								</div>
								<div>
									<input
										type="number"
										id="product"
										v-model="Product"
										placeholder="실적치를 입력하세요"
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
							</form>
						</slot>
					</div>

					<!-- <div class="modal-footer">
						<slot name="footer"> </slot>
					</div> -->
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import { insertProductionData } from '@/api/index';
export default {
	props: {
		propsdata: String,
	},
	data() {
		return {
			Target: '',
			Product: '',
			DateValue: '',
			Month: '',
		};
	},
	methods: {
		async submitForm() {
			if (this.Target === '' || this.Product === '' || this.DateValue === '') {
				alert('입력 하지 않는 값이 있습니다.');
			} else {
				const productionData = {
					target: this.Target,
					product: this.Product,
					productionDate: this.DateValue,
				};
				const response = await insertProductionData(productionData);
				console.log('서버로 데이터 보냄 응답 값은 : ', response);
				// this.$router.go();
				this.$emit('close');
				this.$emit('refresh');
			}
		},
	},
	created() {
		if (this.propsdata === '2021-01') {
			this.Month = '01';
		} else if (this.propsdata === '2021-02') {
			this.Month = '02';
		} else if (this.propsdata === '2021-03') {
			this.Month = '03';
		} else if (this.propsdata === '2021-04') {
			this.Month = '04';
		} else if (this.propsdata === '2021-05') {
			this.Month = '05';
		} else if (this.propsdata === '2021-06') {
			this.Month = '06';
		} else if (this.propsdata === '2021-07') {
			this.Month = '07';
		} else if (this.propsdata === '2021-08') {
			this.Month = '08';
		} else if (this.propsdata === '2021-09') {
			this.Month = '09';
		} else if (this.propsdata === '2021-10') {
			this.Month = '10';
		} else if (this.propsdata === '2021-11') {
			this.Month = '11';
		} else if (this.propsdata === '2021-12') {
			this.Month = '12';
		}
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
	width: 50%;
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
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
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
