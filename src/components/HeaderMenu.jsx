import SelectMenu from "./SelectMenu";
import styles from './HeaderMenu.module.css'

function HeaderMenu() {
  return(
    <div className={styles.HeaderMenu}>
      <img src="/img/cogumelo.jpeg" alt="" />
      <SelectMenu urlHome='https://www.linkedin.com/feed/' home='Home' urlSobre='https://www.linkedin.com/feed/' sobre='Sobre'  urlContato='https://www.linkedin.com/feed/' contato='Contato'/>
    </div>

  )
}

export default HeaderMenu;