import Vue from 'vue';
import Vuex from 'vuex';
import { getAuthFromCookie, getUserFromCookie } from '@/utils/cookies';

Vue.use(Vuex);

// ****** Vuex는 새로 페이지가 리로드 되면 값이 초기화 된다
// 그렇기 때문에 Store.state 깂에 브라우저에 쿠키값을 넣어둔다.

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
			state.token = '';
		},
		setToken(state, token) {
			state.token = token;
		},
	},
});
