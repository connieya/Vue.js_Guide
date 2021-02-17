<template>
	<div class="switch-component-wrapper" @click="changeSwitchValue">
		<div class="switch-wrapper" :class="{ on: propsdata, off: !propsdata }">
			<div class="circle"></div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['propsdata'],
	methods: {
		changeSwitchValue() {
			this.$emit('switchValueChanged');
		},
	},
};
</script>

<style>
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
.body {
	width: 100%;
}
</style>
