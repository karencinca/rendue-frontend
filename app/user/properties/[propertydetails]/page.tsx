import styles from './page.module.css'
import Image from 'next/image'
import HouseImage from '../../../../public/house-1.jpg'

export default function PropertyDetails() {
    return (
        <div className={styles.page}>

            <div className={styles.description}>
                <h3>Morada dos jacarés</h3>
                <h4>Casa com vasto jardim e próximo à praia.</h4>

                <div className={styles.details}>
                    <p><span>Endereço:</span> Rua das Hortênsias, 1234</p>

                    <p><span>Observações:</span> Não suporta mais do que 12 pessoas.</p>

                    <p><span>Inquilinos que já alugaram este imóvel:</span>
                        <ul>
                            <li>Fulano de Tal da Silva</li>
                            <li>Ciclano de Tal</li>
                            <li>José de Deus</li>
                            <li>Maria do Carmo</li>
                        </ul>
                    </p>
                </div>

            </div>

            <div className={styles.sidebar}>
                <Image src={HouseImage} priority width={410} />

                <div className={styles.calendar_container}>
                    <div>
                        Calendar
                    </div>
                    <div className={styles.summary}>
                        <ul>
                            <li>Dia 23/02/24 entra Ciclano</li>
                            <li>Dia 27/02/24 sai Fulano</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}