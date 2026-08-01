import Header from "@/app/_components/header/page"
import Footer from "@/app/_components/footer/page"
import { LayoutSection } from "./styles"

export default function HomeLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <LayoutSection>
        <Header />
        {children}
        <Footer />
      </LayoutSection>
    )
  }