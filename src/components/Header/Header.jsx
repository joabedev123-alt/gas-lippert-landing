import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Comercial de Gás Lippert Logo" className={styles.logoImg} />
        </div>
        
        <nav className={styles.nav}>
          <a href="#inicio">Início</a>
          <a href="#produtos">Produtos</a>
        </nav>
        
        <div className={styles.ctas}>
          <a 
            href="https://wa.me/5551997234647?text=Ol%C3%A1%21+Vim+pelo+site+da+Comercial+de+G%C3%A1s+Lippert+e+gostaria+de+fazer+um+pedido." 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Pedir Gás
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
