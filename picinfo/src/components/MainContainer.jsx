import styles from "./MainContainer.module.css";
import ResponsiveContainer from "./ResponsiveContainer";

function MainContainer(props) {
  return (
    <ResponsiveContainer>
      <div className={styles.container}>{props.children}</div>
    </ResponsiveContainer>
  );
}

export default MainContainer;
