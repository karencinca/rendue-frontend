import styles from './sidebar.module.css'
import Image from "next/image";

import logoImg from '@/public/rendue-nobg.svg'
import NavLink from "./nav-link";
import Link from 'next/link';
import SidebarItem from './sidebar-item';

export default function Sidebar() {

    return (
        <div className={styles.sidebar}>
            <Link href='/user'>
                <Image src={logoImg} alt="logo do aplicativo" priority/>
            </Link>

            <nav className={styles.nav}>
            <SidebarItem title="Imóveis"> 
                <NavLink href="/user/properties">Meus imóveis</NavLink>
                <NavLink href="/user/properties/addproperty">Adicionar imóvel</NavLink>
            </SidebarItem>

            <SidebarItem title="Reservas"> 
                <NavLink href="/user/bookings">Reservas cadastradas</NavLink>
                <NavLink href="/user/bookings/addbooking">Adicionar reserva</NavLink>
            </SidebarItem>

            <SidebarItem title="Inquilinos"> 
                <NavLink href="/user/tenants">Reservas cadastradas</NavLink>
                <NavLink href="/user/bookings/addtenant">Adicionar inquilino</NavLink>
            </SidebarItem>
            </nav>
        </div>
    )
}