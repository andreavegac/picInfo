import styles from './Footer.module.css'
import Link from './Link';
function Footer(){
    return <footer className={styles.footerComponent}>
        <div>
        <p>Desarrollo de Aplicaciones Web de la UNIR curso 2022-2023</p>
        <p>Puedes:</p>
        <ul>
          <li>
            <Link text="Invitarme un correo electrónico" route="mailto:andrea.vega629@comunidadunir.net"></Link>

          </li>
          <li>
            <Link text="Invitarme a un cafetín" route="https://www.buymeacoffee.com/vegaandre"></Link>
          </li>
        </ul>
      </div>
    </footer>;
}

export default Footer;