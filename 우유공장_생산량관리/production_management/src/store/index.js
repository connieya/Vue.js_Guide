import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		propsdata: '',
		month: '',
	},
	mutations: {
		SetPropsdata(state, propsdata) {
			state.propsdata = propsdata;
		},
		SET_MONTH(state, selected) {
			state.month = selected;
		},
	},
	actions: {},
	modules: {},
});
