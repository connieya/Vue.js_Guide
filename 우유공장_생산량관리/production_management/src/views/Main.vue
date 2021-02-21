<template>
	<div>
		<table style="border: 1px solid black">
			<tr>
				<td><input value="일자" readonly /></td>
				<td><input value="1" readonly /></td>
				<td><input value="2" readonly /></td>
				<td><input value="3" readonly /></td>
				<td><input value="4" readonly /></td>
				<td><input value="5" readonly /></td>
				<td><input value="6" readonly /></td>
				<td><input value="7" readonly /></td>
				<td><input value="8" readonly /></td>
				<td><input value="9" readonly /></td>
				<td><input value="10" readonly /></td>
				<td><input value="11" readonly /></td>
				<td><input value="12" readonly /></td>
				<td><input value="13" readonly /></td>
				<td><input value="14" readonly /></td>
				<td><input value="15" readonly /></td>
			</tr>
			<tr>
				<td><input type="text" value="목표" /></td>
				<td><input type="number" value="100" id="target1" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
			</tr>
			<tr>
				<td><input type="text" value="생산" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
			</tr>
			<tr>
				<td><input value="일자" readonly /></td>
				<td><input value="16" readonly /></td>
				<td><input value="16" readonly /></td>
				<td><input value="16" readonly /></td>
				<td><input value="16" readonly /></td>
				<td><input value="16" readonly /></td>
				<td><input value="16" readonly /></td>
				<td><input value="16" readonly /></td>
				<td><input value="16" readonly /></td>
				<td><input value="16" readonly /></td>
				<td><input value="16" readonly /></td>
				<td><input value="16" readonly /></td>
				<td><input value="16" readonly /></td>
				<td><input value="16" readonly /></td>
				<td><input value="16" readonly /></td>
				<td><input value="16" readonly /></td>
			</tr>
			<tr>
				<td><input type="text" value="목표" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
			</tr>
			<tr>
				<td><input type="text" value="생산" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
				<td><input type="number" /></td>
			</tr>
		</table>

		<i class="fas fa-plus-circle" @click="OpenModal"></i>
		<register-modal
			v-if="showModal"
			@close="showModal = false"
			:propsdata="propsdata"
		></register-modal>
		{{ propsdata }}
	</div>
</template>

<script>
import RegisterModal from '../components/common/RegisterModal.vue';
export default {
	props: {
		propsdata: String,
	},
	data() {
		return {
			showModal: false,
		};
	},
	components: {
		RegisterModal,
	},
	methods: {
		OpenModal() {
			this.showModal = true;
		},
	},
	watch: {
		// 원래 created 라이프사이클을 이용해서 this.propsdata 값을 확인하려고 했는데
		// 아무 값도 나타나지 않았다. 알고보니 props로 내려준 값이 계속 변해서 그렇다.
		// 이럴 때는 watch를 이용해서 값을 확인할수 있다.
		propsdata: function(value, oldValue) {
			console.log('propsdata :', value);
			console.log('oldValue : ', oldValue);
		},
	},
};
</script>

<style scoped>
table RegisterModal {
	width: 80%;
}
tr {
	border: 1px solid black;
	/* background-color: red; */
	width: 100%;
	height: 100%;
}
td {
	/* background-color: gray; */
}
input {
	width: 90%;
	height: 100%;
}
.fa-plus-circle {
	font-size: 1.9rem;
}
</style>
