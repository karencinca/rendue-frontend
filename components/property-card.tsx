import { Properties } from '@/api'
import styles from './property-card.module.css'
import Link from 'next/link'

interface PropertyCardProps{
    data: Array<Properties>
}

export default function PropertyCard({ data }: PropertyCardProps) {
    return (
        <div className={styles.cards}>
            {data.map(property => (
                <Link href={`properties/${property.id}`}>
                    <li key={property.id}>
                        <img src={`/${property.image}`} alt=""/>
                        <h2>{property.title}</h2>
                        <h3>{property.description}</h3>
                    </li>
                </Link>
            ))}
        </div>
    )
}