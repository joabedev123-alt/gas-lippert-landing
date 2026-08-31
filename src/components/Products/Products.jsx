import styles from './Products.module.css';

const Products = () => {
  const getWhatsAppLink = (message) => {
    return `https://wa.me/5551997234647?text=${encodeURIComponent(message)}`;
  };

  const products = [
    {
      id: 'p13',
      name: 'P13',
      image: '/gas%20p%2013.png',
      message: 'Olá! Vim pelo site da Comercial de Gás Lippert e gostaria de pedir um gás P13.'
    },
    {
      id: 'p45',
      name: 'P45',
      image: '/gas%20p%2045-Photoroom.png',
      message: 'Olá! Vim pelo site da Comercial de Gás Lippert e gostaria de informações para pedir um gás P45.'
    },
    {
      id: 'agua',
      name: 'Água 20L',
      image: '/agua%2020l.png',
      message: 'Olá! Vim pelo site da Comercial de Gás Lippert e gostaria de pedir água mineral de 20 litros.'
    }
  ];

  return (
    <section id="produtos" className={`bg-white ${styles.productsSection}`}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Botijões e Água</h2>
          <p className={styles.description}>
            Trabalhamos com os seguintes tamanhos:
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <div className={styles.blobShape}></div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className={styles.productImage}
                  loading="lazy"
                />
              </div>
              <h3 className={styles.cardTitle}>{product.name}</h3>
              <a 
                href={getWhatsAppLink(product.message)}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-primary ${styles.btnProduct}`}
              >
                Pedir Já
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
