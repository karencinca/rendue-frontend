import Link from 'next/link';
import styles from './page.module.css'
import { CaretLeft, DotsThreeOutline } from "@phosphor-icons/react/dist/ssr";
import dynamic from 'next/dynamic'

export default function Bookings() {
    return (
        <div className={styles.container}>
            <h1>Lista de reservas</h1>

            <table>
                <tr>
                    <th className={styles.item1}>Data de entrada</th>
                    <th className={styles.item2}>Data de saída</th>
                    <th className={styles.item3}>Casa</th>
                    <th className={styles.item4}>Inquilino</th>
                    <th className={styles.item5}></th>
                </tr>

                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
            </table>

            <Link href="/user">
                <CaretLeft size={28} weight="bold" />Voltar
            </Link>
        </div>
    )
}