import styles from './header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <input type="text" placeholder='Pesquise por imóveis ou inquilinos...' />

            <img src="https://jagsystem.com/img/sites/img_mulher2_ia.jpg" alt="imagem do usuário" />
        </header>
    )
}