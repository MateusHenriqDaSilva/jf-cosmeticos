"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '../styles/cabecalho.module.css';
import Image from 'next/image';

export default function Cabecalho() {
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/logo.png"
          alt="Beleza Natural"
          width={100}
          height={60}
          priority
        />
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={isActive('/') ? styles.active : ''}>
          Destaques
        </Link>
        <Link href="/produtos" className={isActive('/produtos') ? styles.active : ''}>
          Produtos
        </Link>
        <Link href="/beneficios" className={isActive('/beneficios') ? styles.active : ''}>
          Benefícios
        </Link>
        <Link href="/contato" className={isActive('#contato') ? styles.active : ''}>
          Contato
        </Link>
      </nav>
      <div className={styles.cart}>
        <Image
          src="/carrinho.png"
          alt="Carrinho"
          width={24}
          height={24}
        />
        <span className={styles.cartCount}>0</span>
      </div>
    </header>
  );
}