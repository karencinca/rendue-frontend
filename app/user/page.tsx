import styles from './page.module.css'

export default function User() {
    return (
        <div className={styles.container}>
            <h1>Página inicial</h1>

            <div className={styles.dashboard_container}>
                <div className={styles.schedule}>
                    <h2>Próximos check in</h2>

                    <div className={styles.cards}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className={styles.schedule}>
                    <h2>Próximos check out</h2>
                    <div className={styles.cards}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}