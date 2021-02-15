import Vue from 'vue';
import Vuex from 'vuex';
import { getAuthFromCookie, getUserFromCookie } from '@/utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		userId: getUserFromCookie() || '',
		token: getAuthFromCookie() || '',
	},
	getters: {
		isLogin(state) {
			return state.userId !== '';
		},
	},
	mutations: {
		setUserId(state, userId) {
			state.userId = userId;
		},
		clearUserId(state) {
			state.userId = '';
		},
		setToken(state, token) {
			state.token = token;
		},
	},
});
