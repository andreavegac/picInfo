import styles from "./Link.module.css";

function Link(props) {
  return (
    <a className={styles.link} href={props.route}>
      {props.text}
    </a>
  );
}

export default Link;
