import styles from './page.module.css'

export default function PropertyDetails({ params }) {
    return (
        <div className={styles.page}>
            <h1>Detalhes do imóvel</h1>
            <h2>Casa {params.propertydetails}</h2>

        </div>
    )
}