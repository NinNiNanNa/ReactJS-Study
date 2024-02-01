# #7.5 React Router

React.js 앱에서 페이지를 전환하는 방법

## 1. React Router 초기 설정

- React Router : 페이지 전환

  > 설치
  > `npm install react-router-dom`
  > 이번 프로젝트는 5버전으로 설치함
  > `npm i react-router-dom@5.3.0`

- src 폴더에 routes와 components 라는 폴더 생성

  - routes 폴더 : 전환되는 화면하나를 그려주는 파일들
    - Home route 생성 (Home.js)
    - Detail route 생성 (Detail.js)
  - components 폴더 : 화면에 포함되는 작은 부분들
    - Movie.js 이동 (App.js에서 Movie 컴포넌트 import 주소 변경)

- Home route는 App 컴포넌트 전체를 가지고 있게 될것임  
  => 이전 App 컴포넌트 코드가 Home 컴포넌트로 옮김 (이때 import 주소 변경!)

- App.js 는 새로운 컴포넌트(router: URL을 보고있는 컴포넌트)를 render한다.  
  => URL에 따라서 Home을 보여주거나 Detail을 보여준다.
