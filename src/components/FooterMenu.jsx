import SelectMenu from "./SelectMenu";
import styles from "./FooterMenu.module.css";

function FooterMenu() {
  return(
    <div className={styles.FooterMenu}>
      <SelectMenu urlHome='https://www.linkedin.com/feed/' home='Home' urlSobre='https://www.linkedin.com/feed/' sobre='Sobre'  urlContato='https://www.linkedin.com/feed/' contato='Contato'/>
    </div>

  )
}

export default FooterMenu;