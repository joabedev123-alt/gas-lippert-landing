import styles from './FinalCTA.module.css';

const FinalCTA = () => {
  return (
    <section className={styles.finalCta}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>Precisando de gás ou água?</h2>
        <p className={styles.desc}>
          Faça seu pedido agora e consulte a entrega para seu endereço.
        </p>
        
        <div className={styles.actions}>
          <a 
            href="https://wa.me/5551997234647?text=Ol%C3%A1%21+Vim+pelo+site+da+Comercial+de+G%C3%A1s+Lippert+e+gostaria+de+fazer+um+pedido." 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <i className="bi bi-whatsapp"></i> Pedir pelo WhatsApp
          </a>
          <a href="tel:+5551997234647" className={`btn ${styles.btnPhone}`}>
            <i className="bi bi-telephone-fill"></i> Ligar agora
          </a>
        </div>
        
        <p className={styles.phoneDisplay}>
          <i className="bi bi-phone-vibrate"></i> (051) 99723-4647
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
