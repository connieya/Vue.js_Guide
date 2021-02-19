# Vue.js 의 모든 것 !!!!


## EsLint(자바스크립트 문법 검사) 오류관련 설정 파일

`vue.config.js`
```
module.exports ={
    devServer:{
        overlay : false
    }
}
```

## prettier 설정 


`.prettierrc` 파일 생성 후 설정

```
      singleQuote: true,
      semi: true,
      useTabs: true,
      tabWidth: 2,
      trailingComma: 'all',
      printWidth: 80,
      bracketSpacing: true,
      arrowParens: 'avoid',
```

<br/>
하지만, __.eslintrc.js__  파일이 있는 경우 충돌이 날 수 있기 때문에
 **.eslintrc.js** 파일 안에 prttier 관련 설정을 해야한다. 

 ## ESlint 설정 변경하기

 1. ctrl + , 으로 settings 창 열기

eslint 검색 후 Eslint:Probe에 필요한 기술 추가
 ![image](https://user-images.githubusercontent.com/66653324/108502277-ea656680-72f5-11eb-92ef-213ba3dd4e8c.png)
 

 2. Eslint : Validate 설정

 ![image](https://user-images.githubusercontent.com/66653324/108502514-4203d200-72f6-11eb-8c5b-b1b65a007ccb.png)

 `setting.json 파일 불러오기`

autoFix 설정
 ```json
"eslint.validate": [
    
        {
            "language": "vue",
            "autoFix": true
        },
        {
            "language": "javascript",
            "autoFix": true
        },
        {
            "language": "javascriptreact",
            "autoFix": true
        },
        {
            "language": "typescript",
            "autoFix": true
        },
        {
            "language": "typescriptreact",
            "autoFix": true
        }
    
    ],
 ```

추가 설정
```json
 "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.workingDirectories": [
    {"mode": "auto"}
  ],
```

3. format on save 설정

ctrl + , 입력
![image](https://user-images.githubusercontent.com/66653324/108503077-20571a80-72f7-11eb-9478-de2086c4c90f.png)

format on save 검색 후

`Editor : Format on Save`
체크 박스 해제하기
