import styles from './page.module.css'
import propertiesList from '../../api'
import Button from '@/components/button'
import PropertyCard from '@/components/property-card'
import Link from 'next/link'

export default function Properties() {
    return (
        <div className={styles.container}>
            <div>
                <h1>Imóveis</h1>
                <Link href="/properties/addproperty">
                    <Button>
                        Adicionar imóvel
                    </Button>
                </Link>
            </div>
            <ul>
                <PropertyCard 
                    data={propertiesList}
                />
            </ul>
        </div>
    )
}