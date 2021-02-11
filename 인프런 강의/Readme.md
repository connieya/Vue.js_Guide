## props , emit

## vuex , map 헬퍼

`vuex 기술 요소`

- state
- getters
- mutations
- actions

## 모듈화

중복되는 코드, 재사용 가능한 코드
하나의 컴포넌트에서 관리 <br/>

`UserView.vue` , `UserProfile.vue` 같은 경우, <br/>

- computed로 직접 접근
- props로 전달

두 가지 방법을 사용함!!

## HOC

## Mixin

## 데이터 호출 시점

1. 컴포넌트 라이프 사이클 훅

   - created : (컴포넌트가 생성) 되자마자 호출되는 로직

2. 라우터 네비게이션 가드
   - 특정 URL로 접근하기 전의 동작을 정의하는 속성(함수)

## 비동기 , promise에 대한 이해

Spinner 을 사용하다 실행이 되지 않아 해결을 하던 중
비동기 , promise에 대해서 조금 더 개념이 잡히고 있다.

`3.고급 강의 / vue_7_mixin `
<br/>

**src/mixins/ListMixin.js**

```javascript
bus.$emit("start:spinner");
// 순서 1번 데이터를 받아오기 위해 store 호출
this.$store
  .dispatch("FETCH_LIST", this.$route.name)
  .then(() => {
    // 순서 5번
    console.log(5);
    bus.$emit("end:spinner");
  })
  .catch(() => {
    console.log(6);
  });
```

밑에 return 값 유무에 따라 비동기 처리가 달라진다.

**src/store/action.js**

```javascript
 FETCH_LIST({commit} , pageName){
            console.log("store , actions!!");
            //순서 3번
           return fetchList(pageName)
            .then(({data}) => {
                // 순서 4번
                console.log(4);
                commit('SET_LIST',data)

                })
            .catch(error => console.log(error));
        }

```

★
return 값이 없을 때는 dispatch 로 FETCH_LIST를 호출해서 데이터 값을 불러오는데 <br/>
이때 데이터 값을 불러오기전에 자바스크립트는 비동기적으로 bus.$emit 을 실행한다.

그 뒤로 아까 호출 했던 FETCH_LIST에 있는 (News or Ask or Jobs) 값들이
데이터에 담기게 된다.

<br/>
하지만 페이지가 넘어가기전 이미 __bus,$emit("end:spinner")__ 실행 되었기에
Spinner 가 발생하지 않는다. <br/>

그 뒤로 return 값을 fetchList 앞에 입력하자 Spinner 기능이 작동하였다.

## 컴포넌트 디자인 패턴

- Common - 기본적인 컴포넌트 등록과 컴포넌트 통신
- Slot - 마크업 확장이 가능한 컴포넌트
- Controlled - 결합력이 높은 컴포넌트
- Renderless - 데이터 처리 컴포넌트

# 서비스 배포를 위한 명령어

npm run build

## Netlify를 이용한 배포

회원가입 후
github 연동, repository 선택
