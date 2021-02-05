import axiox from 'axios'

// 기본 HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl :'https://api.hnpwa.com/v0/'
}

function fetchNewsList(){
  // return axiox.get(config.baseUrl+'news/1.json')
   return axiox.get(`${config.baseUrl}news/1.json`);
   
}
function fetchAskList(){
    return axiox.get(`${config.baseUrl}ask/1.json`);
}
function fetchJobsList(){
    return axiox.get(`${config.baseUrl}jobs/1.json`)
}

export{
    fetchNewsList,
    fetchAskList,
    fetchJobsList
}
