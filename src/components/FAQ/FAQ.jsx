import { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Vocês entregam gás em Capão Novo?",
      a: "Sim. A Comercial de Gás Lippert está localizada em Capão Novo e atende também outras localidades da região."
    },
    {
      q: "Quais produtos vocês entregam?",
      a: "Trabalhamos com gás P13, gás P45 e água mineral em galões de 20 litros."
    },
    {
      q: "Qual é a região de entrega?",
      a: "O atendimento ocorre aproximadamente em um raio de 12 a 15 km, de Curumim até Xangri-Lá. Consulte seu endereço pelo WhatsApp."
    },
    {
      q: "Como faço um pedido?",
      a: "Você pode falar diretamente com nossa equipe pelo WhatsApp ou ligar para (051) 99723-4647."
    },
    {
      q: "Posso pedir água junto com o gás?",
      a: "Sim. Consulte a disponibilidade e faça seu pedido diretamente pelo WhatsApp."
    },
    {
      q: "Qual o valor do gás?",
      a: "Consulte o valor atual e promoções vigentes diretamente pelo WhatsApp."
    }
  ];

  return (
    <section className={styles.faqSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Dúvidas Frequentes</h2>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <div className={styles.faqQuestion}>
                <h3>{faq.q}</h3>
                <i className={`bi ${openIndex === index ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
              </div>
              <div className={styles.faqAnswer}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
