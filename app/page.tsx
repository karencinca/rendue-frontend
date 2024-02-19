import styles from './page.module.css'
import HeaderInitial from '@/components/header-initial'

export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderInitial />

      <h1>landing page</h1>
    </main>
  )
}
