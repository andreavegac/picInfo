import styles from "./FeaturedSection.module.css";
function FeaturedSection(props) {
  return (
    <div className={styles.featuredContainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured</h2>
        <img className={styles.photo} src="https://picsum.photos/800"></img>
      </div>
      <span className={styles.backgroundText}>Featured</span>
    </div>
  );
}

export default FeaturedSection;
