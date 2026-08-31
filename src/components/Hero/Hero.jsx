import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="inicio" className={`bg-primary ${styles.hero}`}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            <span className={styles.textRed}>LIPPERT</span><br />
            <span className={styles.titleSmall}>Comercial de Gás e água</span>
          </h1>
          <p className={styles.subtitle}>
            Revenda Autorizada de gás e água
          </p>
          <p className={styles.description}>
            Garantia de qualidade e agilidade.<br/>
            Peça já o seu gás e sua água
          </p>
          
          <div className={styles.actions}>
            <a 
              href="https://wa.me/5551997234647?text=Ol%C3%A1%21+Vim+pelo+site+da+Comercial+de+G%C3%A1s+Lippert+e+gostaria+de+fazer+um+pedido." 
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
        
        <div className={styles.heroImageWrapper}>
          <div className={styles.blobImageContainer}>
            <img 
              src="/ChatGPT%20Image%2031%20de%20ago.%20de%202026,%2012_38_55.png" 
              alt="Mulher cozinhando" 
              className={styles.image}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
