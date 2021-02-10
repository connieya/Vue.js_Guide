import axios from 'axios'

// 기본 HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl :'https://api.hnpwa.com/v0/'
}

function fetchNewsList(){
  // return axios.get(config.baseUrl+'news/1.json')
   return axios.get(`${config.baseUrl}news/1.json`);
   
}
function fetchAskList(){
    return axios.get(`${config.baseUrl}ask/1.json`);
}
function fetchJobsList(){
    return axios.get(`${config.baseUrl}jobs/1.json`)
}
async function fetchUserList(username){
    try {
        
        const response = axios.get(`${config.baseUrl}user/${username}.json`)
        return response
        
    } catch (error) {
        console.log(error);
    }
}
function fetchItem(itemId){
    try {     
        return axios.get(`${config.baseUrl}item/${itemId}.json`)
    } catch (error) {
            console.log(error);
    }
}
// HOC , news, ask, jobs를 모두 포함하는 함수
function fetchList(pageName){
    try {
        return axios.get(`${config.baseUrl}${pageName}/1.json`) 
    } catch (error) {
        console.log(error);
    }
}

export{
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserList,
    fetchItem,
    fetchList
}
