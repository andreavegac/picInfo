import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button(props) {
  return (() => {
    if (props.type === "isLink") {
      return (
        <a
          type="button"
          href={props.url}
          target="_blank"
          className={(() => {
            if (props.variant === "secondary") {
              return styles.secondary;
            } else if (props.variant === "secondaryInverse") {
              return styles.secondaryInverse;
            }
          })()}
        >
          {props.children}
        </a>
      );
    } else if (props.type === "isReactLink") {
      return (
        <Link
          className={(() => {
            if (props.variant === "primary") {
              return styles.primary;
            } else if (props.variant === "secondary") {
              return styles.secondary;
            } else if (props.variant === "inverse") {
              return styles.inverse;
            }
          })()}
          to={props.to}
        >
          {props.children}
        </Link>
      );
    } else if (props.type === "isButton") {
      return (
        <button className={styles.primary} disabled={props.disabled}>
          {props.children}
        </button>
      );
    }
  })();
}

export default Button;
