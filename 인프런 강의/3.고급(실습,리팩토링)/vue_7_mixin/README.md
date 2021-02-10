## Mixin으로 재사용하기

HOC에 이은 Mixin 사용!!

## mixin , HOC 비교

두가지 기술을 모두 사용하였고,
비교를 위해 <br/>
News ,Ask는 `mixin` , Jobs 는 `HOC` 를 사용하였다.

## 비동기 처리 코드 수정

`ListMixin.js` 와 데이터를 받아올 store
`action.js`에 log로 숫자 4,5 를 입력했다. <br/>

FETCH_LIST에 return 값이 없으면

순서가 5 => 4 **Spinner 작동안함**<br/>

return 값이 있으면

순서가 4 => 5 이다. **Spinner 작동 함**

## 라우터 네비게이션 가드 사용

- 특정 URL로 접근하기 전의 동작을 정의하는 속성(함수)
