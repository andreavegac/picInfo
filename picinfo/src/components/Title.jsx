import React from "react";
import styles from "./Title.module.css";

const Title = (props) => {
  return (
    <div className={styles.titleContainer}>
      {props.icon != undefined ? (
        <span className={styles.icon}>{props.icon}</span>
      ) : (
        ""
      )}
      <h2
        className={props.small === true ? styles.titleSmall : styles.titleLarge}
      >
        {" "}
        {props.children}{" "}
      </h2>
    </div>
  );
};

export default Title;
