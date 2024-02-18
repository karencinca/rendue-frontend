import Link from 'next/link'
import styles from './styles.module.css'

export default function CreateAccount() {
    return (
            <div className={styles.container}>
                <div className={styles.form_container}>
                    <h1>Criar conta</h1>
                    <form>
                        <div className={styles.wrapper}>
                            <label htmlFor="name">Nome:</label>
                            <input type="text" id="name" />
                        </div>

                        <div className={styles.wrapper}>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" />
                        </div>

                        <div className={styles.wrapper}>
                            <label htmlFor="password">Senha:</label>
                            <input type="password" id="password" />
                        </div>

                        <button type='submit'>Criar conta</button>
                    </form>
                    <button>
                        <Link href='/auth/login'>
                        Já tenho cadastro
                        </Link>
                    </button>
                </div>
            </div>
    )
}