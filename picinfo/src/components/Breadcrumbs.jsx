import styles from "./Breadcrumbs.module.css";
import { Link } from "react-router-dom";

function Breadcrumbs (props) {
  return (

    <Link className={styles.breadcrumbs} to={props.to}>
    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
      <path d="m10 16-6-6 6-6 1.062 1.062L6.875 9.25H16v1.5H6.875l4.187 4.188Z" />
    </svg>
    Atrás
  </Link>
  );
}

export default Breadcrumbs;
