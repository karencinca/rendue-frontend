'use client'
import styles from './nav-link.module.css'
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    href: string,
    children: string
}

export default function NavLink({ href, children }: Props) {
    const path = usePathname()

    return (
        <Link 
            href={href} 
            className={path.startsWith(href) 
                ? `${styles.link} ${styles.active}` 
                : styles.link}
            >
                {children}
        </Link>
    )
}