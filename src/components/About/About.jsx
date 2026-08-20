import styles from './About.module.css';

const About = () => {
  return (
    <section id="sobre" className={styles.about}>
      <div className={`container ${styles.container}`}>
        <div className={styles.imageCol}>
          <img 
            src="/assets/about_img.jpg" 
            alt="Comercial de Gás Lippert" 
            className={styles.image}
            loading="lazy"
          />
        </div>
        <div className={styles.contentCol}>
          <span className={styles.eyebrow}>COMERCIAL DE GÁS LIPPERT</span>
          <h2 className={styles.title}>Atendimento local, simples e direto.</h2>
          
          <div className={styles.textWrapper}>
            <p>
              A Comercial de Gás Lippert atende Capão Novo e diferentes pontos do litoral norte, 
              oferecendo entrega de gás de cozinha e água mineral para quem busca praticidade no dia a dia.
            </p>
            <p>
              Nosso atendimento é direto: você entra em contato pelo WhatsApp ou telefone, 
              informa o que precisa e nossa equipe confirma a disponibilidade e a entrega para sua região.
            </p>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><i className="bi bi-geo-fill"></i></div>
              <span>Atendimento na região litorânea</span>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><i className="bi bi-telephone-fill"></i></div>
              <span>Contato direto sem complicação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
