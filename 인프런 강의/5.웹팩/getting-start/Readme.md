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