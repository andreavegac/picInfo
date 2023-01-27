import styles from "./DetailContainer.module.css";
import ResponsiveContainer from "./ResponsiveContainer";
import ScrollToTop from "./ScrollToTop";

function DetailContainer(props) {
  return (
    <>
      <ScrollToTop />
      <ResponsiveContainer>
        <div className={styles.detailContainer}>{props.children}</div>
      </ResponsiveContainer>
    </>
  );
}

export default DetailContainer;
