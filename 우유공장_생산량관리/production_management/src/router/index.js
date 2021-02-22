import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	{
		path: '/',
		redirect: '/main',
	},
	{
		path: '/main',
		component: () => import('@/views/Main'),
	},
	{
		path: '/watch',
		component: () => import('@/views/Watch'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
