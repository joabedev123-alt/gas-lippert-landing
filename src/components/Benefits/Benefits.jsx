import styles from './Benefits.module.css';

const Benefits = () => {
  const benefitsList = [
    {
      icon: "bi-headset",
      title: "Atendimento direto",
      desc: "Sem formulários complicados. Fale diretamente com nossa equipe."
    },
    {
      icon: "bi-geo-alt",
      title: "Entrega local",
      desc: "Atendimento próximo para Capão Novo e região."
    },
    {
      icon: "bi-box-seam",
      title: "Gás e água",
      desc: "Peça os itens essenciais para sua casa em um único lugar."
    },
    {
      icon: "bi-phone",
      title: "Pedido fácil",
      desc: "WhatsApp ou ligação: escolha como prefere falar conosco."
    },
    {
      icon: "bi-house-door",
      title: "Praticidade",
      desc: "Você faz o pedido sem precisar sair de casa."
    }
  ];

  return (
    <section className={styles.benefits}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>Por que pedir com a Lippert?</h2>
        
        <div className={styles.grid}>
          {benefitsList.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <i className={`bi ${item.icon}`}></i>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
