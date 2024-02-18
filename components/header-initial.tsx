import styles from './header-initial.module.css'
import Image from 'next/image'
import Logo from '@/public/rendue-nobg.svg'
import Link from 'next/link'

export default function HeaderInitial() {
    return (
        <header className={styles.header}>
        <Image src={Logo} alt="logo Rendue" width={100} />
        <ul>
          <li>
            <Link href='/auth/createaccount'>
            Criar conta
            </Link>
          </li>
          <li>
            <Link href='/auth/login'>
              Entrar
            </Link>
          </li>
        </ul>
      </header>
    )
}