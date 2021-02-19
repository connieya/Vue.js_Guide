<template>
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<div class="modal-header">
						<slot name="header">
							default header
						</slot>
					</div>

					<div class="modal-body">
						<slot name="body">
							<form @submit.prevent="submitForm">
								<div>
									<input
										type="number"
										id="target"
										v-model="target"
										placeholder="목표치를 입력하세요"
									/>
								</div>
								<div>
									<input
										type="number"
										id="performance"
										v-model="performance"
										placeholder="실적치를 입력하세요"
									/>
								</div>
								<div>
									<input
										type="type"
										id="chartDate"
										v-model="chartDate"
										placeholder="날짜를 입력하세요"
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
import { fetchChart } from '@/api/index';
export default {
	data() {
		return {
			target: '',
			performance: '',
			chartDate: '',
		};
	},
	methods: {
		async submitForm() {
			const chartData = {
				target: this.target,
				performance: this.performance,
				chartDate: this.chartDate,
			};
			const response = await fetchChart(chartData);
			console.log(response);
			if (response.data === 1) {
				// alert('차트가 등록 되었습니다.');
				// this.$router.push('/bar');
				this.$router.go();
				// this.$emit('close');
				// this.$router.go(-1);
				// this.$emit('reload');
			} else {
				alert('차트 등록 실패');
			}
		},
	},
};
</script>

<style>
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
