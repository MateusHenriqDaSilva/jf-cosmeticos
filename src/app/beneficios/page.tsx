import Image from "next/image";
import styles from "../../styles/beneficios.module.css";
import Link from "next/link";
import Cabecalho from "@/_components/cabecalho";

export default function Beneficios() {
  return (
    <div className={styles.container}>
        <Cabecalho />
      {/* Banner Hero */}
      <section className={styles.benefitsHero}>
        <div className={styles.heroContent}>
          <h1>Descubra os Benefícios Exclusivos</h1>
          <p>Por que nossos produtos fazem a diferença na sua rotina de beleza</p>
        </div>
      </section>

      {/* Seção de Benefícios Persuasiva */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsContainer}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitImage}>
              <Image
                src="/natural-ingredients.jpg"
                alt="Ingredientes Naturais"
                width={400}
                height={300}
              />
            </div>
            <div className={styles.benefitContent}>
              <h2>100% Ingredientes Naturais</h2>
              <p>
                Nossos produtos são formulados com extratos botânicos puros, livres de 
                químicos agressivos. Você sentirá a diferença desde a primeira aplicação - 
                uma textura mais suave, um aroma mais autêntico e resultados visíveis.
              </p>
              <ul className={styles.benefitList}>
                <li>Sem parabenos, sulfatos ou ftalatos</li>
                <li>Plantas cultivadas organicamente</li>
                <li>Extração sustentável dos ativos</li>
              </ul>
            </div>
          </div>

          <div className={`${styles.benefitCard} ${styles.reverse}`}>
            <div className={styles.benefitContent}>
              <h2>Eficácia Comprovada</h2>
              <p>
                93% de nossas clientes relatam resultados visíveis em até 14 dias de uso. 
                Nossas fórmulas foram desenvolvidas com dermatologistas para oferecer o 
                equilíbrio perfeito entre natureza e ciência.
              </p>
              <div className={styles.resultsGrid}>
                <div className={styles.resultItem}>
                  <span className={styles.resultNumber}>24h</span>
                  <span className={styles.resultText}>Hidratação prolongada</span>
                </div>
                <div className={styles.resultItem}>
                  <span className={styles.resultNumber}>97%</span>
                  <span className={styles.resultText}>Redução de irritações</span>
                </div>
                <div className={styles.resultItem}>
                  <span className={styles.resultNumber}>2x</span>
                  <span className={styles.resultText}>Mais nutrição</span>
                </div>
              </div>
            </div>
            <div className={styles.benefitImage}>
              <Image
                src="/clinical-results.jpg"
                alt="Resultados Clínicos"
                width={400}
                height={300}
              />
            </div>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitImage}>
              <Image
                src="/eco-friendly.jpg"
                alt="Embalagens Sustentáveis"
                width={400}
                height={300}
              />
            </div>
            <div className={styles.benefitContent}>
              <h2>Compromisso com o Planeta</h2>
              <p>
                Ao escolher nossos produtos, você está fazendo mais do que cuidar da sua 
                beleza - está contribuindo para um mundo melhor. Nossas embalagens são:
              </p>
              <ul className={styles.benefitList}>
                <li>100% recicláveis</li>
                <li>Feitas com materiais biodegradáveis</li>
                <li>Produzidas com energia renovável</li>
              </ul>
              <p className={styles.callout}>
                <strong>Juntos, já evitamos que mais de 12 toneladas de plástico 
                chegassem aos oceanos.</strong>
              </p>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Pronta para Experimentar a Diferença?</h2>
            <p>
              Transforme sua rotina de beleza com produtos que realmente respeitam 
              sua pele e o meio ambiente.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/produtos" className={styles.primaryButton}>
                Ver Produtos
              </Link>
              <Link href="#contato" className={styles.secondaryButton}>
                Fale Conosco
              </Link>
            </div>
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
            <Link href="/">Home</Link>
            <Link href="/produtos">Produtos</Link>
            <Link href="/beneficios">Benefícios</Link>
          </div>
          <div className={styles.footerSection}>
            <h3>Contato</h3>
            <p>contato@belezanatural.com</p>
            <p>(11) 98765-4321</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2023 Beleza Natural. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}