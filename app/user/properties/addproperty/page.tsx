import Button from '@/components/button'
import styles from './page.module.css'
import { CaretLeft } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export default function AddProperty() {

    return (
        <div className={styles.container}>
            <h1>Adicionar imóvel</h1>

            <form>
                <p>
                    <label htmlFor="property-name">Nome do imóvel:</label>
                    <input type="text" id="property-name" />
                </p>

                <p>
                    <label htmlFor="property-description">Descrição:</label>
                    <textarea name="property-description" id="property-description" cols="30" rows="3"></textarea>
                </p>

                <p>
                    <label htmlFor="property-address">Endereço:</label>
                    <input type="text" id="property-address" />
                </p>

                <p>
                    <label htmlFor="property-image">Foto do imóvel:</label>
                    <input type="file" />
                </p>

                <p>
                    <label htmlFor="property-observations">Observações:</label>
                    <textarea name="property-observations" id="property-observations" cols="30" rows="3"></textarea>
                </p>

                <Button>Adicionar</Button>
            </form>

            <Link href="/user">
                <CaretLeft size={28} weight="bold" />Voltar
            </Link>
        </div>
    )
}