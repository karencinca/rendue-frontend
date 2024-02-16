import styles from './page.module.css'
import Image from 'next/image'
import Logo from '@/public/rendue-nobg.svg'

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <Image src={Logo} alt="logo Rendue" width={100} />
        <ul>
          <li>
            <div>Criar conta</div>
          </li>
          <li>Entrar</li>
        </ul>
      </header>
    </main>
  )
}
