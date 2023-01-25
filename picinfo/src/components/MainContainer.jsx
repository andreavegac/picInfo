import styles from './MainContainer.module.css'
function MainContainer(props){
    return  <div className={styles.container}>{props.children}</div>
}

export default MainContainer;