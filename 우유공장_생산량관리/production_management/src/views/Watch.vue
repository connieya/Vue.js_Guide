<template>
	<div>{{ message }}</div>
</template>

<script>
export default {
	data() {
		return {
			message: 'Hello',
		};
	},
	watch: {
		message: function(value, oldValue) {
			console.log('value: ', value);
			console.log('oldValue : ', oldValue);
		},
	},
};
</script>

<style></style>
