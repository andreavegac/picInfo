import styles from './Button.module.css'
function Button(props){
    return <button type="button" className={styles.customButton}>{props.text}</button>;
}

export default Button;