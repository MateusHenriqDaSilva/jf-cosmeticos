import Image from "next/image";
import styles from "../styles/page.module.css";
import Link from "next/link";
import Cabecalho from "@/_components/cabecalho";
import Rodape from "@/_components/rodape";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Cabeçalho */}
      <Cabecalho />
      {/* Banner Principal */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Cosméticos Premium para sua Beleza</h1>
          <p>Descubra nossa linha de produtos naturais e orgânicos</p>
          <Link href={'/produtos'}>
            <button className={styles.ctaButton}>VER COLEÇÃO</button>
          </Link>
        </div>
      </section>

      {/* Seção de Destaques */}
      <section id="destaques" className={styles.featured}>
        <h2 className={styles.sectionTitle}>Destaques</h2>
        <div className={styles.featuredGrid}>
          {/* Gloss Labial Bebelo */}
          <div className={styles.featuredItem}>
            <Image
              src="/gloss.jpg"
              alt="Gloss Labial Bebelo"
              width={300}
              height={300}
              className={styles.productImage}
            />
            <h3>Gloss Labial Bebelo</h3>
            <div className={styles.variationOptions}>
              <label className={styles.variationLabel}>Sabores:</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input type="radio" name="gloss-sabor" value="morango" defaultChecked />
                  <span>Morango</span>
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="gloss-sabor" value="uva" />
                  <span>Uva</span>
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="gloss-sabor" value="tutti-frutti" />
                  <span>Tutti Frutti</span>
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="gloss-sabor" value="melancia" />
                  <span>Melancia</span>
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="gloss-sabor" value="menta" />
                  <span>Menta</span>
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="gloss-sabor" value="banana" />
                  <span>Banana</span>
                </label>
              </div>
            </div>
            <p className={styles.price}>R$ 29,90</p>
            <button className={styles.buyButton}>COMPRAR</button>
          </div>

          {/* Body Splash */}
          <div className={styles.featuredItem}>
            <Image
              src="/body.jpg"
              alt="Body Splash"
              width={300}
              height={300}
              className={styles.productImage}
            />
            <h3>Body Splash</h3>
            <div className={styles.variationOptions}>
              <label className={styles.variationLabel}>Fragrâncias:</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input type="radio" name="body-fragrancia" value="ameixa" defaultChecked />
                  <span>Ameixa</span>
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="body-fragrancia" value="vanilla" />
                  <span>Banho de Vanilla</span>
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="body-fragrancia" value="morango-champagne" />
                  <span>Morango com Champagne</span>
                </label>
              </div>
            </div>
            <p className={styles.price}>R$ 49,90</p>
            <button className={styles.buyButton}>COMPRAR</button>
          </div>

          {/* Babasoul - Sabonete Líquido */}
          <div className={styles.featuredItem}>
            <Image
              src="/babasoul.jpg"
              alt="Babasoul Sabonete Líquido"
              width={300}
              height={300}
              className={styles.productImage}
            />
            <h3>Babasoul Sabonete Líquido</h3>
            <p className={styles.noVariation}>Única versão</p>
            <p className={styles.price}>R$ 39,90</p>
            <button className={styles.buyButton}>COMPRAR</button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <h2>Receba nossas ofertas</h2>
          <p>Cadastre-se para receber promoções exclusivas</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Seu melhor e-mail" />
            <button type="submit">ASSINAR</button>
          </form>
        </div>
      </section>

      {/* Rodapé */}
      <Rodape />
    </div>
  );
}