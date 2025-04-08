import FaqSection from '../components/common/faq/faq-section'
import BreadcrumbSection from '../components/stock/breadcrumb-section'
import ChooseServiceSection from '../components/stock/choose-service-section'
// import InovativeServiceSection from '../components/basket/inovative-service-section'
import PricingSectionOne from '../components/common/pricing/pricing-section-one'
  
export default function Service() {
  return (
    <>
      <BreadcrumbSection />
      {/* <InovativeServiceSection /> */}
      <ChooseServiceSection />
      {/* <PricingSectionOne /> */}
      <FaqSection />
    </>
  )
}
