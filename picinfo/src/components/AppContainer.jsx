import styles from "./AppContainer.module.css";

function AppContainer(props) {
  return <div className={styles.appContainer}>{props.children}</div>;
}

export default AppContainer;
