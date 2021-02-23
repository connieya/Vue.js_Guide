import Vue from 'vue';
import Vuex from 'vuex';
// import { getProductionData } from '@/api/index';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		target: [],
		date: [],
		product: [],
		month: '',
		productionData: [],
		items: [],
	},
	mutations: {
		// getItem(state, item) {
		// 	console.log('mutatuionssss item : ', item);
		// 	// state.items.push(item);
		// },
		// SET_PRODUCT(state, data) {
		// 	state.productionData = data;
		// },
		getProduction(state, fetchData) {
			console.log('mm', fetchData);
			state.productionData = fetchData;
			console.log('state.productionData', state.productionData);
		},
	},
	actions: {},
	modules: {},
});
