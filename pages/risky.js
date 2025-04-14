import ClientSliderTwo from '../components/common/sliders/client/client-slider-two'
import BreadcrumbSection from '../components/risky/risk-free'
import ChartSection from '../components/risky/chart-section'
import FeatureSection from '../components/risky/features-section'
import TeamSection from '../components/risky/team-section'
import VideoSectionSix from './../components/common/video/video-section-six'

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
