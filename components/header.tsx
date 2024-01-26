import styles from './header.module.css'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <input type="text" placeholder='Pesquise por imóveis ou inquilinos...' />
                <MagnifyingGlass size={20} weight="light" />
            </div>


            <img src="https://jagsystem.com/img/sites/img_mulher2_ia.jpg" alt="imagem do usuário" />
        </header>
    )
}