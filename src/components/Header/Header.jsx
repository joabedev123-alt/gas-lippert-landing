import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <div className={styles.logo}>
          <img src="/assets/logo.jpg" alt="Comercial de Gás Lippert Logo" className={styles.logoImg} />
        </div>
        
        <nav className={styles.nav}>
          <a href="#inicio">Início</a>
          <a href="#produtos">Produtos</a>
          <a href="#entregas">Entregas</a>
          <a href="#sobre">Por que escolher</a>
          <a href="#contato">Contato</a>
        </nav>
        
        <div className={styles.ctas}>
          <a href="tel:+5551997234647" className={`${styles.btn} ${styles.btnSecondary}`}>
            <i className="bi bi-telephone-fill"></i>
            <span className={styles.hideMobile}>Ligar agora</span>
          </a>
          <a 
            href="https://wa.me/5551997234647?text=Ol%C3%A1%21+Vim+pelo+site+da+Comercial+de+G%C3%A1s+Lippert+e+gostaria+de+fazer+um+pedido." 
            target="_blank" 
            rel="noopener noreferrer"
            className={`btn btn-whatsapp ${styles.btnPrimary}`}
          >
            <i className="bi bi-whatsapp"></i>
            <span className={styles.hideMobile}>Pedir pelo WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
