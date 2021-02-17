# 핸드북

[웹팩 핸드북 참고](https://joshua1988.github.io/webpack-guide/)

## NPM 초기화 명령어 - init

- npm init
- npm init -y 


## NPM 설치 명령어 - install

- npm install jquery
- npm install gulp
- npm install gulp --global
- npm install vue --save-dev
- npm i vue -D   (위의 명령어를 축약한 것)

### 전역 설치

--global로 전역으로 설치하면 node_modules 밑에 보이지 않는다.  
    <br/> 
-> 설치 경로는 `C:\Users\82109\AppData\Roaming\npm\node_modules` 여기에 있다.


### 지역설치와 전역(--global) 설치 비교정리

- NPM 지역섪치 
NPM 초기화 명령어로 `package.json` 파일을 생성하고 나면 해당 프로젝트에서 사용할 
라이브러리를 설치하게 된다.
__설치경로__ <br/>
해당 프로젝트의 `node_modules` 폴더 아래에 설치된다. <br/>

- NPM 전역설치
프로젝트에서 사용할 라이브러리를 불러올 때 사용하는 것이 아니라 시스템 레벨에서 사용할
자바스크립트 라이브러리를 설치할 때 사용한다. <br/>

__설치경로__ <br/>
`C:\Users\82109\AppData\Roaming\npm\node_modules`

## NPM을 사용하는 이유

__#1__ <br/>
웹 개발을 할 때 어떤 라이브러리가 필요해서 
파일 중간에 script 태그로 가져온다. <br/>

그렇게 되면 코드가 엄청 많았을 때 어떤 라이브러리가 있고 버전은 얼마인지,
일일히 확인해야하고, 의존성도 떨어진다. <br/>

하지만 `package.json`으로 관리를 하면 보기도 편하고 관리하기가 쉽다.

<br/>

 __#2__

cdn으로 가져오기 위해 브라우저에서 검색하고 페이지에서 해당 cdn을 찾고 
코드를 복사해야한다. <br/>

하지만 NPM을 사용하면 `npm install jquery-ui` 만 입력하면 끝이다.!!
<br/>


## npm 제거 명령어 - uninstall

- npm uninstall gulp


## NPM 지역 설치 옵션

- npm install vue --save-dev
- npm i vue -D

-> `package.json` 에  __"devDependencies"__ 안에 설치 된다.

#### dependencies 와 devDependencies의 차이점

``json
 "dependencies": {
    "jquery": "^3.5.1",
    "jquery-ui": "^1.12.1"
  },
  "devDependencies": {
    "vue": "^2.6.12"
  }
``

dependencies는 애플리케이션의 로직과 구현에 관련된 라이브러리   <br/>
devDependencies는 개발 할 때 도움을 주는 개발용 보조 라이브러리 <br/>


- dependencies (배포용)
- devDependencies (개발용)

[정리 글](https://joshua1988.github.io/webpack-guide/build/npm-module-install.html#%EA%B0%9C%EB%B0%9C%EC%9A%A9-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC%EC%99%80-%EB%B0%B0%ED%8F%AC%EC%9A%A9-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EA%B5%AC%EB%B6%84%ED%95%98%EA%B8%B0)