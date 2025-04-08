import ClientSliderTwo from '../components/common/sliders/client/client-slider-two'
import BreadcrumbSection from '../components/invest-more/risk-free'
import ChartSection from '../components/invest-more/chart-section'
import FeatureSection from '../components/invest-more/features-section'
import TeamSection from '../components/invest-more/team-section'
import VideoSectionSix from '../components/common/video/video-section-six'

export default function SingleService() {
  return (
    <>
      <BreadcrumbSection />
      {/* <VideoSectionSix /> */}
      <FeatureSection />
      <ChartSection />
      {/* <TeamSection /> */}
      <ClientSliderTwo />
    </>
  )
}
