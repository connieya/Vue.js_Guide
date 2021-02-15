import axios from 'axios';

function registerUser(userData) {
	const url = 'http://localhost:8000/register';

	console.log('userData', userData);
	return axios.post(url, userData);
}

export { registerUser };
