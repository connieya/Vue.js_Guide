import axios from 'axios';

const config = {
	baseUrl: 'http://localhost:8000',
};

function getProductionData(month) {
	return axios.get(`${config.baseUrl}/select/${month}`);
}

function insertProductionData(productionData) {
	return axios.post(`${config.baseUrl}/insert`, productionData);
}
export { getProductionData, insertProductionData };
