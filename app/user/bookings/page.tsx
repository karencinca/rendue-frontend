import Link from 'next/link';
import styles from './page.module.css'
import { CaretLeft, Dot, DotsThreeOutline } from "@phosphor-icons/react/dist/ssr";

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
                    <th className={styles.item5}>Status</th>
                    <th className={styles.item6}></th>
                </tr>

                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td title="Check-in"><Dot size={28} color="#23f207" weight="fill" /></td>
                    <td title="Mostrar detalhes"><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td title="Check-in"><Dot size={28} color="#23f207" weight="fill" /></td>
                    <td title="Mostrar detalhes"><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td title="Check-in"><Dot size={28} color="#23f207" weight="fill" /></td>
                    <td title="Mostrar detalhes"><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td title="Check-in"><Dot size={28} color="#23f207" weight="fill" /></td>
                    <td title="Mostrar detalhes"><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td title="Check-in"><Dot size={28} color="#23f207" weight="fill" /></td>
                    <td title="Mostrar detalhes"><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td title="Check-in"><Dot size={28} color="#23f207" weight="fill" /></td>
                    <td title="Mostrar detalhes"><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td title="Check-out"><Dot size={28} color="#ff0101" weight="fill" /></td>
                    <td title="Mostrar detalhes"><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td title="Check-out"><Dot size={28} color="#ff0101" weight="fill" /></td>
                    <td title="Mostrar detalhes"><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td title="Finalizado"><Dot size={28} color="#535353" weight="fill" /></td>
                    <td title="Mostrar detalhes"><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
                <tr>
                    <td>12/01/2024</td>
                    <td>20/01/2024</td>
                    <td>Casa 5</td>
                    <td>Fulano de Tal</td>
                    <td title="Finalizado"><Dot size={28} color="#535353" weight="fill" /></td>
                    <td title="Mostrar detalhes"><button><DotsThreeOutline size={20} weight="light" /></button></td>
                </tr>
            </table>

            <Link href="/user">
                <CaretLeft size={28} weight="bold" />Voltar
            </Link>
        </div>
    )
}