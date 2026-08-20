import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className={styles.footer}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.col}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="Comercial de Gás Lippert Logo" className={styles.logoImg} />
          </div>
          <p className={styles.desc}>
            Gás e água entregues com praticidade em Capão Novo e região.
          </p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Navegação</h4>
          <ul className={styles.navLinks}>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#entregas">Entregas</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Atendimento</h4>
          <ul className={styles.infoLinks}>
            <li>
              <strong>Telefone / WhatsApp</strong>
              <br />
              <a href="tel:+5551997234647">(51) 99723-4647</a>
            </li>
            <li>
              <strong>Região</strong>
              <br />
              Capão Novo — Capão da Canoa/RS
              <br />
              <span className={styles.subtext}>Atendimento de Curumim a Xangri-Lá.</span>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Redes</h4>
          <a 
            href="https://www.instagram.com/comercial_gaslippert" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <i className="bi bi-instagram"></i> @comercial_gaslippert
          </a>
        </div>

      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>&copy; {currentYear} Comercial de Gás Lippert. Todos os direitos reservados.</p>
          <p className={styles.camalySignature}>
            Produzida com 💚 por <a href="https://camaly.com.br/" target="_blank" rel="noopener noreferrer">CAMALY</a>
          </p>
          <div className={styles.legalLinks}>
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
