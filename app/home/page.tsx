import Header from "@/components/common/header"
import Footer from "@/components/common/footer"
import Banner from "./sections/banner/page"
import ServicesSection from "./sections/services/page"
import PackagesSection from "./sections/packages"
import DestinationsSection from "./sections/destinations"
import TestimonialsSection from "./sections/testimonials"

const HomePage = () => {
  return (
    <>
      <Header/>
      <div className="pt-20">
        <Banner/>
        <div className="h-24 md:h-15 hidden md:block"></div>
        <ServicesSection/>
        <PackagesSection/>
        <DestinationsSection/>
        <TestimonialsSection/>
      </div>
      <Footer/>
    </>
  )
}

export default HomePage