npm init -y
npm i webpack webpack-cli --save-dev
npm i webpack webpack-cli -D
npm i lodash

`package.json` 안 에

```
"scripts":{
    "build" : "webpack"
}
```
추가

## Build

npm run build 입력 
<br/>
dist 폴더 , main.js가 생성 됨

## 참고 문서

- [Path API 문서](https://nodejs.org/api/path.html)
- [lodash join()문서](https://lodash.com/docs/4.17.15#join)


## webpack 사용 전 , 후 차이

- webpack 사용 전
![image](https://user-images.githubusercontent.com/66653324/108284960-847bc080-71c9-11eb-8923-a4e9643e6ef1.png)

lodash 라이브러리를 불러오기 위해 
`lodash.js`와  `index.js` 파일의 응답을 기다린다.
<br/>
수 많은 라이브러리를 불러온다고 가정하자! 많은 파일을 요청할 것이고
로딩 시간이 길어질 것이다.

- webpack 사용 후
![image](https://user-images.githubusercontent.com/66653324/108284773-35359000-71c9-11eb-89a5-1566e229c0f2.png)

`main.js` 자바스크립트 하나를 요청하여 lodash 라이브러리를 사용하기 때문에
로딩 시간이 줄어든다.