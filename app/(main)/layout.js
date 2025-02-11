import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="pt-[88px] min-h-[calc(100vh-88px)]">
        {children}
      </div>
      <Footer />
    </div>
  )
}