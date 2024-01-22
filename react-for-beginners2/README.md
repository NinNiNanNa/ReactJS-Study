# #5.1 Tour of CRA

## 1. sytle을 전역으로 적용하는 방법

### `index.js`

```
import "./styles.css";
```

## 2. 해당 컴포넌트에 직접적으로 적용하는 방법

### `Button.js`

```ruby
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
  - 컴포넌트명.module.css
    ```
    src/Button.module.css
    ```
- 적용법
  - 해당 컴포넌트상단에 import 할때 앞에 이름을 지정
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
