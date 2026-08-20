import styles from './Products.module.css';

const Products = () => {
  const getWhatsAppLink = (message) => {
    return `https://wa.me/5551997234647?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="produtos" className={styles.productsSection}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>O QUE VOCÊ PRECISA?</span>
          <h2 className={styles.title}>Gás e água entregues na sua casa</h2>
          <p className={styles.description}>
            Escolha o produto e fale diretamente com nossa equipe para fazer seu pedido.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          
          {/* CARD 01 - P13 */}
          <div className={`${styles.card} ${styles.cardFeatured}`}>
            <div className={styles.cardBadge}>MAIS PEDIDO</div>
            <div className={styles.imageWrapper}>
              <img 
                src="/gas.jpeg" 
                alt="Gás de Cozinha P13" 
                loading="lazy"
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Gás de Cozinha P13</h3>
              <p className={styles.cardDesc}>
                O botijão tradicional para o dia a dia da sua casa. Peça pelo WhatsApp e consulte disponibilidade para sua região.
              </p>
              <ul className={styles.featureList}>
                <li><i className="bi bi-check2"></i> Uso residencial</li>
                <li><i className="bi bi-check2"></i> Entrega em domicílio</li>
                <li><i className="bi bi-check2"></i> Pedido rápido</li>
              </ul>
              <a 
                href={getWhatsAppLink('Olá! Vim pelo site da Comercial de Gás Lippert e gostaria de pedir um gás P13.')}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-whatsapp ${styles.btnFull}`}
              >
                <i className="bi bi-whatsapp"></i> Pedir P13
              </a>
            </div>
          </div>

          {/* CARD 02 - P45 */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img 
                src="/gas.jpeg" 
                alt="Gás P45" 
                loading="lazy"
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Gás P45</h3>
              <p className={styles.cardDesc}>
                Maior capacidade para quem precisa de mais autonomia e consumo. Consulte nossa equipe sobre disponibilidade e entrega.
              </p>
              <ul className={styles.featureList}>
                <li><i className="bi bi-check2"></i> Maior capacidade</li>
                <li><i className="bi bi-check2"></i> Atendimento sob consulta</li>
                <li><i className="bi bi-check2"></i> Entrega na região</li>
              </ul>
              <a 
                href={getWhatsAppLink('Olá! Vim pelo site da Comercial de Gás Lippert e gostaria de informações para pedir um gás P45.')}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-primary ${styles.btnFull}`}
              >
                Consultar P45
              </a>
            </div>
          </div>

          {/* CARD 03 - Água 20L */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img 
                src="/assets/water_20l.jpg" 
                alt="Água Mineral 20L" 
                loading="lazy"
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Água Mineral 20L</h3>
              <p className={styles.cardDesc}>
                Peça sua água mineral junto com o gás e receba tudo com praticidade.
              </p>
              <ul className={styles.featureList}>
                <li><i className="bi bi-check2"></i> Galão de 20 litros</li>
                <li><i className="bi bi-check2"></i> Entrega local</li>
                <li><i className="bi bi-check2"></i> Pedido pelo WhatsApp</li>
              </ul>
              <a 
                href={getWhatsAppLink('Olá! Vim pelo site da Comercial de Gás Lippert e gostaria de pedir água mineral de 20 litros.')}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-primary ${styles.btnFull}`}
              >
                Pedir Água 20L
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;
