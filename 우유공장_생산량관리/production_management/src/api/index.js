import axios from 'axios';

const config = {
	baseUrl: 'http://localhost:8000',
};
// 해당 월에 데이터 리스트 목록
function getProductionData(month) {
	return axios.get(`${config.baseUrl}/select/${month}`);
}
//  월 별 데이터 값 등록하기
function insertProductionData(productionData) {
	return axios.post(`${config.baseUrl}/insert`, productionData);
}
// 월에 해당 날짜 데이터 가져오기
function getProductionDayDate(day) {
	return axios.get(`${config.baseUrl}/selectDate/${day}`);
}
// 월에 해당 날짜 데이터 수정하기
function putProductionDayData(id, updateData) {
	return axios.put(`${config.baseUrl}/updateData/${id}`, updateData);
}

// 해당 날짜 데이터 삭제하기
function deleteProductionDayData(id) {
	return axios.delete(`${config.baseUrl}/deleteData/${id}`);
}
export {
	getProductionData,
	insertProductionData,
	getProductionDayDate,
	putProductionDayData,
	deleteProductionDayData,
};
