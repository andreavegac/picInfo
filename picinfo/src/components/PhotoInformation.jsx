import styles from "./PhotoInformation.module.css";
import Button from "./Button";
import { Link } from "react-router-dom";

function PhotoInformation(props) {
  return (
    <div className={styles.cardContainer}>
      <Link to={`/detail/` + props.id} className={styles.link}>
        <img className={styles.photo} src={props.url}></img>
      </Link>
    </div>
  );
}

export default PhotoInformation;
