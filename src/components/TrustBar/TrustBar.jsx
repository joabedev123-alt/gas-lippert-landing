import styles from './TrustBar.module.css';

const TrustBar = () => {
  return (
    <section className={styles.trustBar}>
      <div className={`container ${styles.trustContainer}`}>
        
        <div className={styles.trustItem}>
          <div className={styles.iconWrapper}>
            <i className="bi bi-clock-history"></i>
          </div>
          <div>
            <h3 className={styles.title}>Entrega rápida</h3>
            <p className={styles.desc}>Receba sem precisar sair de casa.</p>
          </div>
        </div>

        <div className={styles.trustItem}>
          <div className={styles.iconWrapper}>
            <i className="bi bi-headset"></i>
          </div>
          <div>
            <h3 className={styles.title}>Atendimento direto</h3>
            <p className={styles.desc}>Fale com uma pessoa pelo WhatsApp ou telefone.</p>
          </div>
        </div>

        <div className={styles.trustItem}>
          <div className={styles.iconWrapper}>
            <i className="bi bi-geo-alt-fill"></i>
          </div>
          <div>
            <h3 className={styles.title}>Atendimento local</h3>
            <p className={styles.desc}>Capão Novo e região.</p>
          </div>
        </div>

        <div className={styles.trustItem}>
          <div className={styles.iconWrapper}>
            <i className="bi bi-box-seam-fill"></i>
          </div>
          <div>
            <h3 className={styles.title}>Gás + Água</h3>
            <p className={styles.desc}>Tudo em um único pedido.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustBar;
