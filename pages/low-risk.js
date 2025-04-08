import ClientSliderTwo from '../components/common/sliders/client/client-slider-two'
import BreadcrumbSection from '../components/low-risk/risk-free'
import ChartSection from '../components/low-risk/chart-section'
import FeatureSection from '../components/low-risk/features-section'
import TeamSection from '../components/low-risk/team-section'
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
