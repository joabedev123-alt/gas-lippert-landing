import styles from './HowItWorks.module.css';

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.stepsGrid}>
          
          <div className={styles.step}>
            <div className={styles.stepNumber}>01</div>
            <h3 className={styles.stepTitle}>Escolha o produto</h3>
            <p className={styles.stepDesc}>Gás P13, P45 ou água mineral de 20 litros.</p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>02</div>
            <h3 className={styles.stepTitle}>Chame pelo WhatsApp</h3>
            <p className={styles.stepDesc}>Informe seu endereço e o produto desejado.</p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>03</div>
            <h3 className={styles.stepTitle}>Confirme sua entrega</h3>
            <p className={styles.stepDesc}>Nossa equipe informa disponibilidade e condições para sua região.</p>
          </div>

        </div>

        <div className={styles.ctaWrapper}>
          <a 
            href="https://wa.me/5551997234647?text=Ol%C3%A1%21+Vim+pelo+site+da+Comercial+de+G%C3%A1s+Lippert+e+gostaria+de+fazer+um+pedido." 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <i className="bi bi-whatsapp"></i> Fazer meu pedido
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default HowItWorks;
