import React from 'react';
import styles from "./Navbar.module.css";
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div>
                <Link href="/">
                    <Image width={40} height={80} src="/mario-logo.webp" alt="logo" />
                </Link>
            </div>
            <ul>
                <li>
                    <Link href="/nosotros">
                        Nosotros
                    </Link>
                </li>
                <li>
                    <Link href="/carrito">
                        Carrito
                    </Link>
                </li>
                <li>
                    <Link href="/contacto">
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
