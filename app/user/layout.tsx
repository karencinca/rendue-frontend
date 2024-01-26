import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import './globals.css'

export default function Layout ({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
      <main>
        <Header />
        <Sidebar />
        {children}
      </main>
  )
}