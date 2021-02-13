import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage';
// import SignupPage from '@/views/SignupPage';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			// component: LoginPage,
			component: () => import('@/views/LoginPage'),
			// 코드 스플리팅
		},
		{
			path: '/signup',
			// component: SignupPage,
			component: () => import('@/views/SignupPage'),
		},
	],
});
