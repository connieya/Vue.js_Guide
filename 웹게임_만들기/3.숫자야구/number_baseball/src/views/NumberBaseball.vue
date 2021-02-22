<template>
	<div>
		<h1>{{ result }}</h1>
		<form @submit.prevent="onSubmitForm">
			<input ref="answer" minlength="4" maxlength="4" v-model="value" />
			<button type="submit">입력</button>
		</form>
		<div>시도 : {{ tries.length }}</div>
		<ul>
			<li v-for="t in tries" :key="t.id">
				<div>{{ t.try }}</div>
				<div>{{ t.result }}</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			answer: this.getNumbers(), // ex) [1,4,5,8]
			tries: [],
			value: '',
			result: '',
		};
	},
	methods: {
		getNumbers() {
			const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const array = [];
			for (let i = 0; i < 4; i++) {
				const chosen = candidates.splice(
					Math.floor(Math.random() * 9) - i,
					1,
				)[0];
				array.push(chosen);
			}
			return array;
		},
		getResult(callback) {
			this.result = '홈런';
			callback();
		},
		restart() {
			alert('홈런입니다.  게임을 다시 실행합니다.');
			this.value = '';
			this.tries = [];
		},
		onSubmitForm() {
			console.log('정답 :', this.answer);
			if (this.value === this.answer.join('')) {
				this.tries.push({
					try: this.value,
					result: '홈런',
				});
				this.getResult(function() {
					this.restart(); // 콜백 함수 사용 할랬는데 실패...
				});
			} else {
				if (this.tries.length >= 9) {
					this.result = `10번 넘게 틀려서 실패! 답은 ${this.answer.join(
						',',
					)} 입니다.`;
					alert('게임을 다시 시작합니다.');
					this.value = '';
					this.answer = this.getNumbers();
					this.tries = [];
				}
				let strike = 0;
				let ball = 0;
				const answerArray = this.value.split('').map(v => parseInt(v));
				for (let i = 0; i < 4; i++) {
					if (answerArray[i] === this.answer[i]) {
						// 숫자 자릿수 모두 정답
						strike = strike + 1;
					} else if (this.answer.includes(answerArray[i])) {
						ball = ball + 1;
					}
				}
				this.tries.push({
					try: this.value,
					result: `${strike} 스트라이크 , ${ball} 볼입니다.`,
				});
				this.value = '';
			} //else
		}, // onSubmitForm
	}, // methods
};
</script>

<style></style>
