import styles from './page.module.css'

import Button from "@/components/button";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function AddBooking() {
    return (
        <div className={styles.container}>
            <h1>Cadastrar reserva</h1>

            <form>
                <p>
                    <label htmlFor="tenant-name">Nome do inquilino:</label>
                    <div>
                        <input type="text" id="tenant-name" />
                        <button className={styles.select_tenant}>Selecionar inquilino existente</button>
                    </div>
                </p>

                <p>
                    <label htmlFor="tenant-phonenumber">Telefone:</label>
                    <input type="number" id="tenant-phonenumber" />
                </p>

                <p>
                    <label htmlFor="tenant-email">Email:</label>
                    <input type="email" id="tenant-email" />
                </p>

                <p>
                    <label htmlFor="property-selected">Imóvel alugado:</label>
                    <select name="property-selected" id="property-selected">
                        <option value="property-1">Casa 1</option>
                        <option value="property-2">Casa 2</option>
                        <option value="property-3">Casa 3</option>
                        <option value="property-4">Casa 4</option>
                        <option value="property-5">Casa 5</option>
                        <option value="property-6">Casa 6</option>
                    </select>
                </p>
                <div className={styles.date_wrapper}>
                    <p>
                        <label htmlFor="checkin">Data de entrada:</label>
                        <input type="date" name="checkin" id="checkin" />
                    </p>
                    <p>
                        <label htmlFor="checkout">Data de saída:</label>
                        <input type="date" name="checkout" id="checkout" />
                    </p>
                </div>

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