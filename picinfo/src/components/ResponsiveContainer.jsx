import React from "react";
import styles from "./ResponsiveContainer.module.css";

const ResponsiveContainer = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default ResponsiveContainer;
