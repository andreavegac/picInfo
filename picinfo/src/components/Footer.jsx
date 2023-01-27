import styles from "./Footer.module.css";
import Button from "./Button";
function Footer() {
  return (
    <footer className={styles.footerComponent}>
      <div>
        <p>Desarrollo de Aplicaciones en Red de la UNIR curso 2022-2023</p>

        <div className={styles.buttonsContainer}>
          <Button type="isReactLink" variant="inverse" to="/aboutus">
            Conócenos
          </Button>
          <Button
            type="isLink"
            variant="secondaryInverse"
            url="https://picsum.photos/"
          >
            Ir a lorem picsum
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
