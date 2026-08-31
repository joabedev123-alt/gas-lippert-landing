import styles from './About.module.css';

const About = () => {
  return (
    <section id="sobre" className={`bg-light ${styles.about}`}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.mapCol}>
          {/* Using a placeholder for the map. An iframe would be ideal here */}
          <div className={styles.mapPlaceholder}>
            <iframe 
              src="https://maps.google.com/maps?q=Avenida+Paraguassu+3602,+Cap%C3%A3o+Novo,+Cap%C3%A3o+da+Canoa&t=&z=15&ie=UTF8&iwloc=&output=embed" 
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
            <p><strong>Segunda a sábado:</strong> 08:00/22:00</p>
            <p><strong>Domingo:</strong> das 08:00/17:00</p>
          </div>
          
          <ul className={styles.contactList}>
            <li>
              <i className="bi bi-geo-alt"></i>
              <span>Avenida Paraguassu, 3602<br/>Capão Novo - Capão da Canoa</span>
            </li>
            <li>
              <i className="bi bi-telephone"></i>
              <a href="tel:+5551997234647" style={{ color: 'inherit', textDecoration: 'none' }}>(051) 99723-4647</a>
            </li>
            <li>
              <i className="bi bi-whatsapp"></i>
              <a href="https://wa.me/5551997234647" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>(051) 99723-4647</a>
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
