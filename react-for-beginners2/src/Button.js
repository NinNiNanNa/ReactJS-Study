import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return (
    // style을 직접적으로 적용할 수 있다.
    // <button style={{ backgroundColor: "tomato", color: "white" }}>
    //   {text}
    // </button>
    // <button className={styles.btn}>{text}</button>
    <button className={`${styles.btn} ${styles.title}`}>{text}</button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

// App.js에서 Button을 가져올 수 있게 하기위해 선언
export default Button;
