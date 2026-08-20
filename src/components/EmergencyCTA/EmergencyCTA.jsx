import styles from './EmergencyCTA.module.css';

const EmergencyCTA = () => {
  return (
    <section className={styles.emergency}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.iconWrapper}>
            <i className="bi bi-fire"></i>
          </div>
          <h2 className={styles.title}>Acabou o gás no meio do almoço?</h2>
          <p className={styles.desc}>
            Não precisa sair procurando. Fale com a Comercial de Gás Lippert e consulte a entrega para o seu endereço.
          </p>
          <div className={styles.actions}>
            <a 
              href="https://wa.me/5551997234647?text=Ol%C3%A1%21+Vim+pelo+site+da+Comercial+de+G%C3%A1s+Lippert+e+gostaria+de+fazer+um+pedido." 
              target="_blank" 
              rel="noopener noreferrer"
              className={`btn btn-whatsapp ${styles.btnPrimary}`}
            >
              <i className="bi bi-whatsapp"></i> Chamar no WhatsApp
            </a>
            <a href="tel:+5551997234647" className={`btn ${styles.btnSecondary}`}>
              <i className="bi bi-telephone-fill"></i> Ligar agora
            </a>
          </div>
          <p className={styles.urgencyText}>
            <i className="bi bi-info-circle-fill"></i> Consulte disponibilidade e tempo estimado de entrega.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCTA;
