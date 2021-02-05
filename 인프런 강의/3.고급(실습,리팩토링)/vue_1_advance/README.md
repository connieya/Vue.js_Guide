# vue_advance1

## CLI 2.x vs CLI 3.x

- 명령어

  - 2.x : vue init '프로젝트 템플릿 이름' '파일 위치'
  - 3.x : vue create '프로젝트 이름'

- 웹팩 설정 파일

  - 2.x : 노출 0 (webpack.config.js)
  - 3.x : 노출 x

- 프로젝트 구성

  - 2.x : 깃헙의 템플릿 다운로드
  - 3.x : 플러그인 기반으로 기능 추가

- ES6 이해도
  - 2.x : 필요 x
  - 3.x : 필요 o

## 자바스크립트 this 4가지와 화살표 함수의 this

강의 복습하기

## Vuex 사용

![image](https://user-images.githubusercontent.com/66653324/106878378-3d97c080-671d-11eb-9177-cbbffe9554df.png)

## store & actions 사용

axios 로 url 받아 오는 공통 부분을 api/index.js 파일에 모듈화 시킴 <br />

store/index.js 파일에서 actions 사용함 <br/>

그리고 views 파일에서 \$store.dispatch로 actions 사용
