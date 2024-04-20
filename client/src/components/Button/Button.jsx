import PropTypes from "prop-types";
import styles from "./Button.module.css";

export const Button = (props) => {
  return (
    <button className={styles.Btn} onClick={props.onClick}>
      {props.title}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
