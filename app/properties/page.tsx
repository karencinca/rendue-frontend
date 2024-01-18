import styles from './page.module.css'
import propertiesList from '../../api'
import Button from '@/components/button'
import PropertyCard from '@/components/property-card'

export default function Properties() {
    return (
        <div className={styles.container}>
            <div>
                <h1>Imóveis</h1>
                <Button>Adicionar imóvel</Button>
            </div>

            <ul>
                <PropertyCard 
                    data={propertiesList}
                />
            </ul>

        </div>
    )
}