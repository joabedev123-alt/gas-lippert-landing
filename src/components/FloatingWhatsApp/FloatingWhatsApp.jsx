import styles from './FloatingWhatsApp.module.css';

const FloatingWhatsApp = () => {
  return (
    <div className={styles.floatingContainer}>
      <div className={styles.tooltip}>Pedir pelo WhatsApp</div>
      <a 
        href="https://wa.me/5551997234647?text=Ol%C3%A1%21+Vim+pelo+site+da+Comercial+de+G%C3%A1s+Lippert+e+gostaria+de+fazer+um+pedido." 
        target="_blank"
        rel="noopener noreferrer"
        className={styles.fab}
        aria-label="Pedir pelo WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
