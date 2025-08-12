import Image from "next/image";
import styles from "../../styles/produtos.module.css";
import Cabecalho from "@/_components/cabecalho";

export default function Produtos() {
  return (
    <div className={styles.container}>
      {/* Cabeçalho */}
      <Cabecalho />

      {/* Seção de Produtos */}
      <section className={styles.products}>
        <div className={styles.productsGrid}>
          {/* Gloss Labial Bebelo */}
          <div className={styles.productCard}>
            <Image
              src="/gloss.jpg"
              alt="Gloss Labial Bebelo"
              width={280}
              height={280}
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
              </div>
            </div>
            <p className={styles.price}>R$ 29,90</p>
            <button className={styles.buyButton}>COMPRAR</button>
          </div>

          {/* Body Splash */}
          <div className={styles.productCard}>
            <Image
              src="/body.jpg"
              alt="Body Splash"
              width={280}
              height={280}
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
                  <span>Vanilla</span>
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="body-fragrancia" value="morango-champagne" />
                  <span>Morango Champagne</span>
                </label>
              </div>
            </div>
            <p className={styles.price}>R$ 49,90</p>
            <button className={styles.buyButton}>COMPRAR</button>
          </div>

          {/* Babasoul - Sabonete Líquido */}
          <div className={styles.productCard}>
            <Image
              src="/babasoul.jpg"
              alt="Babasoul Sabonete Líquido"
              width={280}
              height={280}
              className={styles.productImage}
            />
            <h3>Babasoul Sabonete Líquido</h3>
            <p className={styles.noVariation}>Única versão</p>
            <p className={styles.price}>R$ 39,90</p>
            <button className={styles.buyButton}>COMPRAR</button>
          </div>

          {/* Novo Produto 1 - Máscara Capilar */}
          <div className={styles.productCard}>
            <Image
              src="/mascara-capilar.jpg"
              alt="Máscara Capilar Nutritiva"
              width={280}
              height={280}
              className={styles.productImage}
            />
            <h3>Máscara Capilar Nutritiva</h3>
            <div className={styles.variationOptions}>
              <label className={styles.variationLabel}>Tipos:</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input type="radio" name="mascara-tipo" value="coco" defaultChecked />
                  <span>Coco</span>
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="mascara-tipo" value="karite" />
                  <span>Karité</span>
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="mascara-tipo" value="argan" />
                  <span>Argan</span>
                </label>
              </div>
            </div>
            <p className={styles.price}>R$ 59,90</p>
            <button className={styles.buyButton}>COMPRAR</button>
          </div>

          {/* Novo Produto 2 - Creme Corporal */}
          <div className={styles.productCard}>
            <Image
              src="/creme-corporal.jpg"
              alt="Creme Corporal Hidratante"
              width={280}
              height={280}
              className={styles.productImage}
            />
            <h3>Creme Corporal Hidratante</h3>
            <div className={styles.variationOptions}>
              <label className={styles.variationLabel}>Aromas:</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input type="radio" name="creme-aroma" value="lavanda" defaultChecked />
                  <span>Lavanda</span>
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="creme-aroma" value="maracuja" />
                  <span>Maracujá</span>
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="creme-aroma" value="amendoas" />
                  <span>Amêndoas</span>
                </label>
              </div>
            </div>
            <p className={styles.price}>R$ 69,90</p>
            <button className={styles.buyButton}>COMPRAR</button>
          </div>

          {/* Novo Produto 3 - Kit Presente */}
          <div className={styles.productCard}>
            <Image
              src="/kit-presente.jpg"
              alt="Kit Presente Especial"
              width={280}
              height={280}
              className={styles.productImage}
            />
            <h3>Kit Presente Especial</h3>
            <div className={styles.variationOptions}>
              <label className={styles.variationLabel}>Opções:</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input type="radio" name="kit-opcao" value="basico" defaultChecked />
                  <span>Básico</span>
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="kit-opcao" value="premium" />
                  <span>Premium</span>
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="kit-opcao" value="luxo" />
                  <span>Luxo</span>
                </label>
              </div>
            </div>
            <p className={styles.price}>R$ 99,90</p>
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
            <a href="#">Trocas e devoluções</a>
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