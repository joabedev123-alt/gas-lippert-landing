import styles from './DeliveryArea.module.css';

const DeliveryArea = () => {
  const regions = [
    "Capão Novo", "Curumim", "Arroio Teixeira", "Atlântida", "Xangri-Lá"
  ];

  return (
    <section id="entregas" className={styles.deliveryArea}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.content}>
          <span className={styles.eyebrow}>ONDE ENTREGAMOS</span>
          <h2 className={styles.title}>Capão Novo e região</h2>
          <p className={styles.description}>
            Estamos em Capão Novo e atendemos aproximadamente um raio de 12 a 15 km, 
            com cobertura de Curumim até Xangri-Lá.
          </p>
          
          <div className={styles.regions}>
            {regions.map((region, index) => (
              <span key={index} className={styles.chip}>
                <i className="bi bi-geo-alt"></i> {region}
              </span>
            ))}
          </div>
          
          <div className={styles.ctaBox}>
            <p className={styles.ctaText}>Está fora dessa região? Consulte pelo WhatsApp.</p>
            <a 
              href="https://wa.me/5551997234647?text=Ol%C3%A1%21+Gostaria+de+saber+se+voc%C3%AAs+entregam+no+meu+endere%C3%A7o." 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Consultar meu endereço
            </a>
          </div>
        </div>
        
        <div className={styles.mapMockup}>
          <div className={styles.mapContainer}>
            <div className={styles.mapIcon}>
              <i className="bi bi-geo-alt-fill"></i>
            </div>
            <h3>Comercial de Gás Lippert</h3>
            <p>Capão Novo — Capão da Canoa/RS</p>
            <a 
              href="https://maps.google.com/?q=Capão+Novo,+Capão+da+Canoa+-+RS" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              Abrir localização <i className="bi bi-box-arrow-up-right"></i>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DeliveryArea;
