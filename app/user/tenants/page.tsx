import { CaretLeft, DotsThreeOutline } from '@phosphor-icons/react/dist/ssr'
import styles from './page.module.css'
import Link from 'next/link'

export default function Tenants() {
    return (
        <div className={styles.container}>
            <h1>Lista de clientes</h1>

            <table>
                <tr>
                    <th className={styles.item1}>Nome</th>
                    <th className={styles.item2}>Telefone</th>
                    <th className={styles.item3}>E-mail</th>
                    <th className={styles.item4}></th>
                </tr>

                <tr>
                    <td>Fulano de Tal da Silva</td>
                    <td>51 91234567</td>
                    <td>fulanodasilva@email.com</td>
                    <td><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr> 
                <tr>
                    <td>Fulano de Tal da Silva</td>
                    <td>51 91234567</td>
                    <td>fulanodasilva@email.com</td>
                    <td><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr> 
                <tr>
                    <td>Fulano de Tal da Silva</td>
                    <td>51 91234567</td>
                    <td>fulanodasilva@email.com</td>
                    <td><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr> 
                <tr>
                    <td>Fulano de Tal da Silva</td>
                    <td>51 91234567</td>
                    <td>fulanodasilva@email.com</td>
                    <td><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr> 
                <tr>
                    <td>Fulano de Tal da Silva</td>
                    <td>51 91234567</td>
                    <td>fulanodasilva@email.com</td>
                    <td><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr> 
                <tr>
                    <td>Fulano de Tal da Silva</td>
                    <td>51 91234567</td>
                    <td>fulanodasilva@email.com</td>
                    <td><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr> 
            </table>

            <Link href="/user">
                <CaretLeft size={28} weight="bold" />Voltar
            </Link>
        </div>
    )
}