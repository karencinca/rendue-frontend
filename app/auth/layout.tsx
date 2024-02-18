import HeaderInitial from '@/components/header-initial'
import './globals.css'

export default function Layout ({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
      <main>
        <HeaderInitial />
        {children}
      </main>
  )
}