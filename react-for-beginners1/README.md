# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# #5.1 Tour of CRA

## 1. sytle을 전역으로 적용하는 방법

### index.js

```
import "./styles.css";
```

## 2. 해당 컴포넌트에 직접적으로 적용하는 방법

### Button.js

```
  function Button({ text }) {
    return (
      <button style={{ backgroundColor: "tomato", color: "white" }}>
        {text}
      </button>
    );
  }
```

## 3. CSS-Module

: CSS를 사용할때 클래스 이름을 고유한 값으로 자동으로 만들어서 컴포넌트 스타일 클래스 이름이 중첩되는 현상을 방지해주는 기술

- 파일명
  컴포넌트명.module.css
  ex) src/Button.module.css
- 적용법
  - 해당 컴포넌트상단에 import 할때 앞에 이름을 지정 - Button.js
    ```
    import styles from "./Button.module.css";
    ```
  - 클래스에 적용시킬때는 "위에서 지정한 이름.클래스명" 을 호출
    ```
    <button className={styles.btn}>{text}</button>
    ```
  - 여러 개의 클래스를 적용할 때는 백틱(`)을 사용
    ```
    <button className={`${styles.btn} ${styles.font}`}>{text}</button>
    ```

= 클래스명이 같아도 HTML의 클래스명은 랜덤 방식으로 생성된다.

✨ CSS Module을 이용하면 클래스명이 충돌하는 단점을 극복할 수 있다.
✨ CSS Module은 컴포넌트 단위로 스타일을 적용할때 유용하다.

[참고문서] <https://react.vlpt.us/styling/02-css-module.html?q=>
