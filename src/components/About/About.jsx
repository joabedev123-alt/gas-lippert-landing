import styles from './About.module.css';

const About = () => {
  return (
    <section id="sobre" className={`bg-light ${styles.about}`}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.mapCol}>
          {/* Using a placeholder for the map. An iframe would be ideal here */}
          <div className={styles.mapPlaceholder}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111228.69466540608!2d-50.15582305!3d-29.7423275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95229db7ee2fbd5b%3A0xa645fb5b0e008ff7!2sCap%C3%A3o%20da%20Canoa%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1714578502395!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização"
            ></iframe>
          </div>
        </div>

        <div className={styles.contentCol}>
          <h2 className={styles.title}>Comercial de Gás Lippert</h2>
          
          <div className={styles.hours}>
            <p><strong>Atendimento</strong></p>
            <p>Seg à Sáb: 08h às 20:30h</p>
            <p>Dom e Feriados: 08h às 13:30h</p>
          </div>
          
          <ul className={styles.contactList}>
            <li>
              <i className="bi bi-geo-alt"></i>
              <span>Av. Paraguassu, 605<br/>Capão da Canoa/RS</span>
            </li>
            <li>
              <i className="bi bi-telephone"></i>
              <span>(051) 99723-4647</span>
            </li>
            <li>
              <i className="bi bi-whatsapp"></i>
              <span>(051) 99723-4647</span>
            </li>
          </ul>

          <a 
            href="https://wa.me/5551997234647?text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+fazer+um+pedido." 
            target="_blank" 
            rel="noopener noreferrer"
            className={`btn btn-primary ${styles.btnContact}`}
          >
            Chamar Gás
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
