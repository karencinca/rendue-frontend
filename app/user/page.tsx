import styles from './styles.module.css'

export default function User() {
    return (
        <div className={styles.container}>
            <h1>Página inicial</h1>

            <div>
                <h2>Imóveis</h2>
                <div>lista de imóveis</div>
            </div>

            <div>
                <h2>Reservas</h2>
                <div>lista de reservas</div>
            </div>

            <div>
                <h2>Inquilinos</h2>
                <div>lista de inquilinos</div>
            </div>
        </div>
    )
}