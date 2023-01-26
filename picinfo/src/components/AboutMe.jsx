import styles from './AboutMe.module.css'
function AboutMe(props){
    return <p className={styles.link}>¡Hola! Mi nombre es {props.name}, estudiante de la UNIR 2022-2023. Este proyecto es para la asignatura de Desarrollo de Aplicaciones en Red.</p>;
}

export default AboutMe;