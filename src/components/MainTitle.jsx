import styles from './MainTitle.module.css'

function MainTitle() {
  return(
    <div className={styles.MainTitleTitle}>
      <h1>Estamos aprendendo React com o melhor professor do mundo!</h1>
      <div className={styles.MainTitleCogu}>
      <img src="/img/cogumelo.jpeg" alt="Cogumelo 1" />
      <img src="/img/cogumelo.jpeg" alt="Cogumelo 2" />
      <img src="/img/cogumelo.jpeg" alt="Cogumelo 3" />
      </div>
    </div>
  )
}

export default MainTitle;