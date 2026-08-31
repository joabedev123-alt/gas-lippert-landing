import styles from './TrustBar.module.css';

const TrustBar = () => {
  return (
    <section className={`bg-primary ${styles.trustBar}`}>
      <div className={`container ${styles.trustContainer}`}>
        
        <div className={styles.whiteBox}>
          <h2 className={styles.title}>Estamos sempre perto de você.</h2>
          <p className={styles.desc}>
            Receba o seu gás rapidinho! Peça seu gás aqui na Comercial de Gás Lippert.
          </p>
          
          <div className={styles.actions}>
            <a 
              href="https://wa.me/5551997234647" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`btn btn-primary ${styles.actionBtn}`}
            >
              WhatsApp <i className="bi bi-whatsapp"></i>
            </a>
            <a href="tel:+5551997234647" className={`btn btn-primary ${styles.actionBtn}`}>
              Ligue Grátis <i className="bi bi-telephone-fill"></i>
            </a>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img 
            src="/WhatsApp%20Image%202026-08-31%20at%2012.32.51.jpeg" 
            alt="Entregador de gás" 
            className={styles.image}
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default TrustBar;
