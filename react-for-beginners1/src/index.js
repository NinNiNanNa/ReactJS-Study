import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/*
#5.0 Introduction

1. 설치&확인
  - nodeJS 설치&확인
      node -v
  - npx 설치&확인
      npx

2. 프로젝트(=폴더) 생성
  npx create-react-app 프로젝트이름

3. 프로젝트 실행
  npm run start 또는 npm start

4. 프로젝트 구조
  - index.js
      리액트 어플리케이션을 랜더링 해줌
  - App.js
      Welcome back!을 랜더링해줌

5. 프로젝트 정리
  - node-modules 디렉토리는 디스크 용량을 많이 차지하므로 삭제하는게 좋다. 
      rmdir /s node_modules
  - "npm i" 명령어로 다시 설치 가능하다.

[Tip] cmd에서 vsCode실행법
  code 프로젝트이름
*/
