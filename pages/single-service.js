import ClientSliderTwo from "../components/common/sliders/client/client-slider-two";
import BreadcrumbSection from "../components/risk-free/risk-free";
import ChartSection from "../components/risk-free/chart-section";
import FeatureSection from "../components/risk-free/features-section";
import TeamSection from "../components/risk-free/team-section";
import VideoSectionSix from "./../components/common/video/video-section-six";

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
	);
}
