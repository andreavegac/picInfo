import styles from "./Button.module.css";
function Button(props) {
  return (

    <a
      type="button"
      download
      href={props.url}
      className={styles.customButton}
      target="_blank"
    >
      {props.text}
    </a>
  );
}

export default Button;
