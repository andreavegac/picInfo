import styles from './PhotoInformation.module.css';
import Button from './Button';
import { Link } from "react-router-dom";

function PhotoInformation(props){
    return <div className={styles.cardContainer}>
            <img className={styles.photo} src={props.url}></img>
            <Link to={`/detail/`+ props.id}>Go to detail</Link>
            <Button text="Click me!!!!!"></Button>
        </div>;
}


export default PhotoInformation;