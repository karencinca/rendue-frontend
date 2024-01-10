import Link from "next/link";
import styles from './menu.module.css'
import Image from "next/image";

import logoImg from '@/public/logo-3.png'

export default function Menu() {
    return (
        <div className={styles.menu}>
            <Image src={logoImg} alt="logo do aplicativo" priority/>

            <nav className={styles.nav}>
                <Link href='/'>Home</Link>
                <Link href='/properties'>Imóveis</Link>
                <Link href='/bookings'>Reservas</Link>
                <Link href='/tenants'>Inquilinos</Link>
                <Link href='/profile'>Perfil</Link>
            </nav>
        </div>
    )
}