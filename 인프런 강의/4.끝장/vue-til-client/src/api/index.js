import axios from 'axios';
// import store from '../store';
import { setInterceptors } from '@/api/common/interceptors';

function createInstance() {
	// axios api 이다
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
		// headers: {
		// 	Authorization: 'test1234',
		// Authorization:  store.state.token,
		// 토큰 값이 있다고 가정해도 크롬 - 네트워크 - 헤더에 Authorization 값이 없다.
		// 초기에 있는 토큰 값이 데이터로 전송됨
		// 왜냐하면 밑에 loginUser()가 호출 되기 전에 이미 이 로직이 실행 되었다.
		// 그렇기 때문에 인터셉터라는 라이브러리를 사용해서 해결해야한다.
		// },
	});
	return setInterceptors(instance);
	//axios.post('http://localhost:8000/register') // 원래 오리지널
	//instance.interceptors.request.use();
}

const instance = createInstance();

// 회원가입 API
function registerUser(userData) {
	//axios.post(url, userData);
	return instance.post('/register', userData);
}

// 로그인 APi
function loginUser(userData) {
	return instance.post('/login', userData);
}

function fetchPosts() {
	return instance.get('/posts');
}
export { registerUser, loginUser, fetchPosts };
