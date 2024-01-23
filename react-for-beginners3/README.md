# #6.0 ~ #6.3 Introduction, useEffect, Deps, Recap

리엑트 컴포넌트는 state가 변화하면 해당 컴포넌트 내부 코드가 전부 리렌더링된다.  
UI의 관점으로 보면 새로운 데이터가 들어올 때마다 리렌더링 되니 좋은 일이긴한데, 컴포넌트가 처음 render 될때만 코드가 실행되길 원할 수도 있다.  
예를들어, API로 외부 데이터를 가져올때 컴포넌트 처음 렌더링되는 그 순간에만 API요청을 하고
이후에 state가 변화할때는 그 API에서 똑같은 정보를 가져오고 싶지 않을 것이다.

이렇게 특정 코드들이 첫번째 컴포넌트 render 에서만 실행되게 하려면?  
=> useEffect‼

## 1. useEffect

### useEffect를 통해 우리는 언제 코드를 실행할지 선택권을 가질 수 있다.

### 1.1. useEffect 함수 불러오기

```
import React, { useEffect } from 'react';
```

### 1.2. 형식

`useEffect(function, deps)`

- 두 개의 argument를 가지는 함수이다.
  - 첫번째 argument(function)는 수행하고자 하는 작업
  - 두번째 argument(deps)는 배열 형태이며, 배열 안에는 검사하고자 하는 특정 값 or 빈 배열

### 1.3. componentDidMount

컴포넌트가 mount 됐을때 (처음 나타났을때 실행)

```javascript
useEffect(() => {
  console.log("I run only once.");
}, []);
```

- 컴포넌트가 화면에 가장 처음 렌더링 될때 한번만 실행하고 싶다면 deps 위치에 빈 배열을 넣어준다.
- 만약 배열을 생략한다면 리렌더링 될때마다 실행된다.

### 1.4. componentDidUpdate

컴포넌트가 update 될때 (특정 porps, state가 바뀔때 실행)

```javascript
useEffect(() => {
  console.log("I run when 'keyword' changes.");
}, [keyword]);
```

- 특정 값이 업데이트 될때 실행하고 싶다면, deps 위치의 배열안에 검사하고 싶은 값을 넣어준다.   
  (의존 값이 들어있는 배열 deps라고도 한다. dependency 를 의미)

## 2. `useEffect()`와 `useMemo()`의 차이점은?

`useEffect()`는 처음 render 시에만 실행되게끔. like API  
`useMemo()`는 rerender 시 데이터가 같으면 render안함.
