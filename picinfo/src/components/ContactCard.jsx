import styles from "./ContactCard.module.css";

function Button(props) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={props.image}></img>
      <div className={styles.textContainer}>
        <span className={styles.name}>{props.name}</span>
        <span className={styles.description}>
          ¡Hola! Mi nombre es {props.name}, estudiante de la UNIR 2022-2023.
          Este proyecto es para la asignatura de Desarrollo de Aplicaciones en
          Red.
        </span>
      </div>
    </div>
  );
}

export default Button;
