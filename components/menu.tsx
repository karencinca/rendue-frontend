import styles from './menu.module.css'
import Image from "next/image";

import logoImg from '@/public/rendue-nobg.svg'
import NavLink from "./nav-link";
import Link from 'next/link';

export default function Menu() {

    return (
        <div className={styles.menu}>
            <Link href='/'>
                <Image src={logoImg} alt="logo do aplicativo" priority/>
            </Link>

            <nav className={styles.nav}>
                <ul>
                    <li><NavLink href='/properties'>Imóveis</NavLink></li>
                    <li><NavLink href='/bookings'>Reservas</NavLink></li>
                    <li><NavLink href='/tenants'>Inquilinos</NavLink></li>
                    <li><NavLink href='/profile'>Perfil</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}