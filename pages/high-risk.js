import ClientSliderTwo from '../components/common/sliders/client/client-slider-two'
import BreadcrumbSection from '../components/high-risk/risk-free'
import ChartSection from '../components/high-risk/chart-section'
import FeatureSection from '../components/high-risk/features-section'
import TeamSection from '../components/high-risk/team-section'
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
