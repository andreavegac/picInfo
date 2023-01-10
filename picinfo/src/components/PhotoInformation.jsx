import styles from './PhotoInformation.module.css';
import Button from './Button';

function PhotoInformation(props){
    return <div className={styles.cardContainer}>
            <img className={styles.photo} src={props.url}></img>
            <span><strong>ID:</strong>{props.id}</span>
            <span><strong>Author:</strong>{props.author}</span>
            <span><strong>Width:</strong>{props.width}</span>
            <span><strong>Height:</strong>{props.height}</span> 
            <Button text="Click me!!!!!"></Button>
        </div>;
}


export default PhotoInformation;