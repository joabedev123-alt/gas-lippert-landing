import styles from './MobileContactBar.module.css';

const MobileContactBar = () => {
  return (
    <div className={styles.mobileBar}>
      <a href="tel:+5551997234647" className={styles.btnPhone}>
        <i className="bi bi-telephone-fill"></i>
        <span>Ligar</span>
      </a>
      <a 
        href="https://wa.me/5551997234647?text=Ol%C3%A1%21+Vim+pelo+site+da+Comercial+de+G%C3%A1s+Lippert+e+gostaria+de+fazer+um+pedido." 
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btnWhatsapp}
      >
        <i className="bi bi-whatsapp"></i>
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

export default MobileContactBar;
