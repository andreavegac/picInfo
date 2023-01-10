import styles from "./checkbox.module.css"
import { useState } from "react";

function Checkbox(props)  {
    const [checked, setChecked] = useState(false);
    const handleCheck = () => {
        setChecked(!checked);
    };
    return <>
            <input id={props.id} type="checkbox" onChange={handleCheck} value={props.value} name={props.name} className={checked ? styles.checked : ""}></input>
            <label for={props.id}>{props.label}</label>
        </>
    ;
}

export default Checkbox;