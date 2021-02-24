import Vue from 'vue';
import Vuex from 'vuex';
import { getProductionDayDate, getProductionData } from '@/api/index';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		propsdata: '',
		month: '',
		// 해당 날짜 데이터 값
		dayData: {},
		// 월 별 데이터 값
		target: [],
		product: [],
		date: [],
	},
	mutations: {
		// 콤보박스 월 별 props 값
		SetPropsdata(state, propsdata) {
			state.propsdata = propsdata;
		},
		SET_MONTH(state, selected) {
			state.month = selected;
		},
		// 해당 날짜 데이터 가져오기
		getDayData(state, data) {
			state.dayData = data;
		},
		// 월별 데이터들 가져오기  (2월,3월,..12월)
		getMonthData(state, data) {
			state.monthData = data;
			state.date = state.monthData.map(a => a.productionDate);
			state.product = state.monthData.map(a => a.product);
			state.target = state.monthData.map(a => a.target);
		},
	},
	actions: {
		// 해당 날짜 데이터 가져오기
		async FETCH_DAY(context, day) {
			try {
				const response = await getProductionDayDate(day);
				context.commit('getDayData', response.data);
			} catch (error) {
				console.log(error);
			}
		},
		// 월별 데이터들 가져오기  (2월,3월,..12월)
		async FETCH_MONTH(context, propsdata) {
			console.log('vuex aciton propsdata : ', propsdata);
			try {
				const response = await getProductionData(propsdata);
				context.commit('SetPropsdata', propsdata);
				context.commit('getMonthData', response.data);
			} catch (error) {
				console.log(error);
			}
		},
	},
	modules: {},
});
