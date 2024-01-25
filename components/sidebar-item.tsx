'use client'

import styles from './sidebar-item.module.css'

import { useState } from 'react'

export default function SidebarItem({ title, children }) {
    const [open, setOpen] = useState(false)

    return (
        <div className={open ? `${styles.sidebar_item_open}` : `${styles.sidebar_item}`}>
            <div className={styles.sidebar_title} onClick={() => setOpen(!open)}>
                <span>
                    {title}
                </span>
            </div>
            <div className={styles.sidebar_content}>
                {children}
            </div>
        </div>
    )
}