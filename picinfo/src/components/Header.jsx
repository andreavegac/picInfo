import styles from "./Header.module.css";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <header className={styles.headerComponent}>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/login`}>Login</Link>
          </li>
          <li>
            <Link to={`/aboutUs`}>About us</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.overlay}>
        <h1>PicInfo</h1>
        <h3>Lorem Picsum data information</h3>
        <p>
          Showing the information of some pics extracted from Lorem Picsum. This
          is a PoC to defend doing the project with React instead of plain JS.
        </p>
      </div>
    </header>
  );
}

export default Header;
