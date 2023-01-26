import styles from './Footer.module.css'
import {Link} from "react-router-dom"
function Footer(){
    return <footer className={styles.footerComponent}>
        <div>
        <p>Desarrollo de Aplicaciones Web de la UNIR curso 2022-2023</p>
     
            <Link className={styles.buttonFooter} to="/AboutUs">Conócenos</Link>

    
      </div>
    </footer>;
}

export default Footer;