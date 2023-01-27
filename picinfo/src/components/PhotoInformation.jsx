import styles from "./PhotoInformation.module.css";
import { Link } from "react-router-dom";

function PhotoInformation(props) {
  return (
    <div className={styles.cardContainer}>
      <Link to={`/detail/` + props.id} className={styles.link}>
        <div className={styles.photoContainer}>
          <img className={styles.photo} src={props.url}></img>
        </div>
      </Link>
    </div>
  );
}

export default PhotoInformation;
