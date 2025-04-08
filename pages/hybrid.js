import ClientSliderTwo from '../components/common/sliders/client/client-slider-two'
import BreadcrumbSection from '../components/hybrid/risk-free'
import ChartSection from '../components/hybrid/chart-section'
import FeatureSection from '../components/hybrid/features-section'
import TeamSection from '../components/hybrid/team-section'
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
