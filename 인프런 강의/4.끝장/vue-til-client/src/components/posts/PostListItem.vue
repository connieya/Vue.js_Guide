<template>
	<li>
		<div class="post-title">
			{{ item.title }}
		</div>
		<div class="post-contents">{{ item.content }}</div>
	</li>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style></style>
