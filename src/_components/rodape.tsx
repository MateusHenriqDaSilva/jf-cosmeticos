import styles from '../styles/rodape.module.css'

export default function Rodape() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h3>Jf Cosmeticos - Beleza Natural</h3>
                    <p>Sua beleza em harmonia com a natureza</p>
                </div>
                <div className={styles.footerSection}>
                    <h3>Links Úteis</h3>
                    {/* <a href="#">Sobre nós</a>
                    <a href="#">Política de entrega</a> */}
                    <a href="/contato">Trocas e devoluções</a>
                </div>
                <div className={styles.footerSection}>
                    <h3>Contato</h3>
                    <p>chicocosmeticos2025@gmail.com</p>
                    <p>(14) 99111-4764 </p>
                    <p>(14) 99673-4179</p>
                    <p>(14) 98116-8152</p>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>&copy; 2023 Jf Cosmeticos Beleza Natural. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}