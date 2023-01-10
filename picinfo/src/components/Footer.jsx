import styles from './Footer.module.css'
function Footer(){
    return <footer className={styles.footerComponent}>
        <div>
        <p>Desarrollo de Aplicaciones Web de la UNIR curso 2022-2023</p>
        <p>Puedes:</p>
        <ul>
          <li>
            <a href="mailto:andrea.vega629@comunidadunir.net">Enviarme un correo electrónico</a>
          </li>
          <li>
            <a href="https://www.buymeacoffee.com/vegaandre">Invitarme a un cafetín</a>
          </li>
        </ul>
      </div>
    </footer>;
}

export default Footer;