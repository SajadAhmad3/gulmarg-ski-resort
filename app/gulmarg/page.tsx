import Header from "@/components/common/header"
import Footer from "@/components/common/footer"
import AboutGulmargSection from "./sections/about"
import GulmargInWinterSection from "./sections/winter"

export default function GulmargPage() {
  return (
    <>
      <Header />
      <div className="pt-20">
        <GulmargInWinterSection />
        <AboutGulmargSection />
      </div>
      <Footer />
    </>
  )
}
