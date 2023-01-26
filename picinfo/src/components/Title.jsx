import React from "react";
import styles from "./Title.module.css";

const Title = (props) => {
    return (
        <div class={styles.titleContainer}>
        { props.icon != undefined ? <span className={styles.icon}>{props.icon}</span> : ""}
        <h2 className={styles.title}> {props.children} </h2>
        </div>
    )
};

export default Title;