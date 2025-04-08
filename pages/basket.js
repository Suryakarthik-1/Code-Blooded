import FaqSection from '../components/common/faq/faq-section'
import BreadcrumbSection from '../components/basket/breadcrumb-section'
import ChooseServiceSection from '../components/basket/choose-service-section'
// import InovativeServiceSection from '../components/basket/inovative-service-section'
import PricingSectionOne from './../components/common/pricing/pricing-section-one'

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
