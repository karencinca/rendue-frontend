import Link from 'next/link'
import styles from './page.module.css'

export default function Login() {
    return (
            <div className={styles.container}>
                <div className={styles.form_container}>
                    <h1>Acessar conta</h1>
                    <form>
                        <div className={styles.wrapper}>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" />
                        </div>

                        <div className={styles.wrapper}>
                            <label htmlFor="password">Senha:</label>
                            <input type="password" id="password" />
                        </div>

                        <button type='submit'>Entrar</button>
                    </form>
                    <button>
                        <Link href='/auth/createaccount'>
                        Ainda não tenho uma conta
                        </Link>
                    </button>
                </div>
            </div>
    )
}