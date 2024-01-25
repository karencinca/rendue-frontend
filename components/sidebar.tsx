import styles from './sidebar.module.css'
import Image from "next/image";

import logoImg from '@/public/rendue-nobg.svg'
import NavLink from "./nav-link";
import Link from 'next/link';
import SidebarItem from './sidebar-item';

export default function Sidebar() {

    return (
        <div className={styles.sidebar}>
            <Link href='/'>
                <Image src={logoImg} alt="logo do aplicativo" priority/>
            </Link>

            <nav className={styles.nav}>
            <SidebarItem title="Imóveis"> 
                <NavLink href="/properties">Meus imóveis</NavLink>
                <NavLink href="/properties/addproperty">Adicionar imóvel</NavLink>
            </SidebarItem>

            <SidebarItem title="Reservas"> 
                <NavLink href="/bookings">Reservas cadastradas</NavLink>
                <NavLink href="/bookings/addbooking">Adicionar reserva</NavLink>
            </SidebarItem>

            <SidebarItem title="Inquilinos"> 
                <NavLink href="/tenants">Reservas cadastradas</NavLink>
                <NavLink href="/bookings/addtenant">Adicionar inquilino</NavLink>
            </SidebarItem>
                {/* <ul>
                    <li><NavLink href='/properties'>Imóveis</NavLink></li>
                    <li><NavLink href='/bookings'>Reservas</NavLink></li>
                    <li><NavLink href='/tenants'>Inquilinos</NavLink></li>
                    <li><NavLink href='/profile'>Perfil</NavLink></li>
                </ul> */}
            </nav>
        </div>
    )
}