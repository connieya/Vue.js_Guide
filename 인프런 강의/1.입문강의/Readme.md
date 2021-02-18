# Vue 기초

![image](https://user-images.githubusercontent.com/66653324/107162749-b7170380-69e8-11eb-93e6-e8479b999e88.png)

## vue.js CDN

```javascript
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```


## 기존의 웹 개발 => reactivity

`Object.defineProperty()`

(문서링크)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty]

## 즉시 실행 함수

(문서링크)[https://developer.mozilla.org/ko/docs/Glossary/IIFE]

## 전역 컴포넌트

싱글 파일 컴포넌트 사용하지 않고 DOM에서 사용 할 때는 규칙을 따라줘야한다.

- 케밥-표기법
- 파스칼표기법

제일 베스트는 모두 소문자로 쓰고 단어는 하이픈(-)으로 연결하는 것

## Props 대소문자 구분(camelCase vs kebab-case)

- [공식문서 정독](https://kr.vuejs.org/v2/guide/components-props.html)

## 참고 할 강의 목록

- [컴포넌트 통신 규칙이 필요한 이유](https://www.inflearn.com/course/Age-of-Vuejs/lecture/21418?tab=note&speed=1.5)

=> 기존 MVC 패턴과 다르게 컴포넌트는 규칙이 있다. 100% 와닿지 않기 때문에, 향 후 개념이 더 잡혔을 때 디시 보도록!!
