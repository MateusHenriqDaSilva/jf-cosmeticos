"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '../styles/cabecalho.module.css';
import Image from 'next/image';

export default function Cabecalho() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const isActive = (path: string) => pathname === path;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/logo.png"
          alt="Beleza Natural"
          width={160}
          height={60}
          priority
          className={styles.logoImage}
        />
      </div>

      {/* Menu Hamburger para mobile */}
      <button 
        className={styles.menuButton} 
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span className={styles.menuBar}></span>
        <span className={styles.menuBar}></span>
        <span className={styles.menuBar}></span>
      </button>

      {/* Nav principal */}
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        <div className={styles.navLinks}>
          <Link href="/" className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}>
            Destaques
          </Link>
          <Link href="/produtos" className={`${styles.navLink} ${isActive('/produtos') ? styles.active : ''}`}>
            Produtos
          </Link>
          <Link href="/beneficios" className={`${styles.navLink} ${isActive('/beneficios') ? styles.active : ''}`}>
            Benefícios
          </Link>
          <Link href="/contato" className={`${styles.navLink} ${isActive('/contato') ? styles.active : ''}`}>
            Contato
          </Link>
        </div>
      </nav>

      <div className={styles.cart}>
        <Image
          src="/carrinho.png"
          alt="Carrinho"
          width={34}
          height={34}
        />
        <span className={styles.cartCount}>0</span>
      </div>
    </header>
  );
}