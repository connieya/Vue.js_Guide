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
function fetchUserList(username){
    console.log("확인", username)
    return axios.get(`${config.baseUrl}user/${username}.json`)
}
function fetchItem(itemId){
    return axios.get(`${config.baseUrl}item/${itemId}.json`)
}

export{
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserList,
    fetchItem
}
