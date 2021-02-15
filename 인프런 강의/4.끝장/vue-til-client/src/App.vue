<template>
	<div>
		<!-- <app-header></app-header> -->
		<Nav></Nav>
		<router-view></router-view>
	</div>
</template>

<script>
import Nav from './components/common/Nav.vue';
// import AppHeader from './components/common/AppHeader.vue';

export default {
	components: { Nav },
	// components: { AppHeader },4
};
</script>

<style></style>
