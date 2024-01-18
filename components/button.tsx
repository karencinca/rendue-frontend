import styles from './button.module.css'

type Props = {
    children: string
}

export default function Button({ children }: Props) {
    return (
        <button className={styles.button}>
            {children}
        </button>
    )
}