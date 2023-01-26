import styles from "./DetailContainer.module.css";
function DetailContainer(props) {
  return <div className={styles.detailContainer}>{props.children}</div>;
}

export default DetailContainer;
