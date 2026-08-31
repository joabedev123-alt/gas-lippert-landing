import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className={`bg-light ${styles.footer}`}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.colLogo}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="Comercial de Gás Lippert Logo" className={styles.logoImg} />
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Horários</h4>
          <p className={styles.text}>
            Segunda a sábado: 08:00/22:00<br/>
            Domingo: das 08:00/17:00
          </p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contato</h4>
          <p className={styles.text}>
            (051) 99723-4647<br/>
            contato@gaslippert.com.br
          </p>
          <p className={styles.text}>
            Avenida Paraguassu, 3602<br/>
            Capão Novo - Capão da Canoa
          </p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Menu</h4>
          <ul className={styles.navLinks}>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#sobre">Fale no WhatsApp</a></li>
          </ul>
        </div>
        
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Redes Sociais</h4>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/comercial_gaslippert" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://wa.me/5551997234647" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>

      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>&copy; Copyright COMERCIAL DE GÁS LIPPERT LTDA<br/>Todos os Direitos Reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
