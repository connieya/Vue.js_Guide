import store from '@/store/index';
// interceptors
// you can intercept requests or responses before they are handled by then or catch

export function setInterceptors(instance) {
	instance.interceptors.request.use(
		function(config) {
			console.log('인터셉터 api 함수 :', config);
			config.headers.Authorization = store.state.token;
			// 네트워크 헤더에 있는  Authoroization에  토큰 값을 담았다.
			// 토큰 값이 없어서 임의로 primary key인 userNo을 담았다.
			return config;
		},
		function(error) {
			// Do something with request error
			return Promise.reject(error);
		},
	);

	// Add a response interceptor
	instance.interceptors.response.use(
		function(response) {
			// Any status code that lie within the range of 2xx cause this function to trigger
			// Do something with response data
			return response;
		},
		function(error) {
			// Any status codes that falls outside the range of 2xx cause this function to trigger
			// Do something with response error
			return Promise.reject(error);
		},
	);

	return instance;
}
