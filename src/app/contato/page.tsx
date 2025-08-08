// app/contato/page.tsx
import React from 'react';
import styles from '../../styles/contato.module.css';
import Cabecalho from '../../_components/cabecalho';
import Image from 'next/image';

export default function Contato() {
  return (
    <div className={styles.container}>
      <Cabecalho />
      
      {/* Banner Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Fale Conosco</h1>
          <p>Estamos aqui para ajudar com qualquer dúvida ou solicitação</p>
        </div>
      </section>

      {/* Seção de Contato */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <h2>Informações de Contato</h2>
            
            <div className={styles.contactItem}>
              <Image
                src="/phone-icon.png"
                alt="Telefone"
                width={24}
                height={24}
              />
              <div>
                <h3>Telefone</h3>
                <p>(14) 98116-8152</p>
                <p>(14) 1234-5678</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <Image
                src="/email-icon.png"
                alt="Email"
                width={24}
                height={24}
              />
              <div>
                <h3>Email</h3>
                <p>contato@belezanatural.com</p>
                <p>vendas@belezanatural.com</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <Image
                src="/location-icon.png"
                alt="Localização"
                width={24}
                height={24}
              />
              <div>
                <h3>Endereço</h3>
                <p>Rua das Flores, 123</p>
                <p>Centro, Bauru - SP</p>
                <p>CEP: 17010-000</p>
              </div>
            </div>

            <div className={styles.socialMedia}>
              <h3>Redes Sociais</h3>
              <div className={styles.socialIcons}>
                <a href="#" aria-label="Instagram">
                  <Image src="/instagram-icon.png" alt="Instagram" width={32} height={32} />
                </a>
                <a href="#" aria-label="Facebook">
                  <Image src="/facebook-icon.png" alt="Facebook" width={32} height={32} />
                </a>
                <a href="#" aria-label="WhatsApp">
                  <Image src="/whatsapp-icon.png" alt="WhatsApp" width={32} height={32} />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h2>Envie sua Mensagem</h2>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Telefone</label>
                <input type="tel" id="phone" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Assunto</label>
                <select id="subject" required>
                  <option value="">Selecione...</option>
                  <option value="duvida">Dúvida</option>
                  <option value="sugestao">Sugestão</option>
                  <option value="reclamacao">Reclamação</option>
                  <option value="pedido">Status de Pedido</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" rows={5} required></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Beleza Natural</h3>
            <p>Sua beleza em harmonia com a natureza</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Links Úteis</h3>
            <a href="/">Home</a>
            <a href="/produtos">Produtos</a>
            <a href="/contato">Contato</a>
          </div>
          <div className={styles.footerSection}>
            <h3>Contato</h3>
            <p>(14) 98116-8152</p>
            <p>contato@belezanatural.com</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Beleza Natural. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}