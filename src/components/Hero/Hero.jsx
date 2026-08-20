import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            ENTREGA DE GÁS E ÁGUA EM CAPÃO NOVO E REGIÃO
          </div>
          <h1 className={styles.title}>
            Seu gás acabou? <br />
            <span className={styles.highlight}>A Lippert entrega até você.</span>
          </h1>
          <p className={styles.description}>
            Entrega de gás P13, P45 e água mineral de 20 litros em Capão Novo e região. 
            Atendimento rápido, direto e sem complicação.
          </p>
          <p className={styles.subInfo}>
            <i className="bi bi-geo-alt-fill"></i> Atendimento de Curumim a Xangri-Lá.
          </p>
          
          <div className={styles.actions}>
            <a 
              href="https://wa.me/5551997234647?text=Ol%C3%A1%21+Vim+pelo+site+da+Comercial+de+G%C3%A1s+Lippert+e+gostaria+de+fazer+um+pedido." 
              target="_blank" 
              rel="noopener noreferrer"
              className={`btn btn-whatsapp ${styles.btnLarge}`}
            >
              <i className="bi bi-whatsapp"></i>
              Pedir pelo WhatsApp
            </a>
            <a href="tel:+5551997234647" className={`btn btn-outline ${styles.btnLarge}`}>
              <i className="bi bi-telephone-fill"></i>
              Ligar agora
            </a>
          </div>
          
          <div className={styles.features}>
            <span className={styles.featureItem}><i className="bi bi-check-circle-fill"></i> Atendimento local</span>
            <span className={styles.featureItem}><i className="bi bi-check-circle-fill"></i> Entrega rápida</span>
            <span className={styles.featureItem}><i className="bi bi-check-circle-fill"></i> Pedido direto pelo WhatsApp</span>
          </div>
        </div>
        
        <div className={styles.heroImage}>
          {/* Using a placeholder premium image representing delivery/residential environment */}
          <img 
            src="/assets/hero_bg.jpg" 
            alt="Residência - Entrega de Gás" 
            className={styles.image}
            loading="eager"
          />
          <div className={styles.imageOverlay}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
