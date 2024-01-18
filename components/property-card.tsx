import styles from './property-card.module.css'

export default function PropertyCard({ data }) {
    return (
        <div className={styles.card}>
            {data.map(property => (
                <li key={property.id}>
                    <img src={`/${property.image}`} alt="" />
                    <h2>{property.title}</h2>
                    <h3>{property.description}</h3>
                </li>
            ))}
        </div>
    )
}