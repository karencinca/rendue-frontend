import styles from './page.module.css'

export default function AddProperty() {
    return (
        <div className={styles.container}>
            <h1>Adicionar imóvel</h1>
            <form>
                <label htmlFor="property-name">Nome do imóvel:</label>
                <input type="text" id="property-name" />

                <label htmlFor="property-description">Descrição:</label>
                <textarea name="property-description" id="property-description" cols="30" rows="3"></textarea>

                <label htmlFor="property-address">Endereço:</label>
                <input type="text" id="property-address" />

                <label htmlFor="property-image">Foto do imóvel:</label>
                <input type="file" />

                <button type="submit">Adicionar</button>
            </form>
        </div>
    )
}