/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function VideoSectionFour() {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className="fugu--video-section">
			<div className="container">
				<div className="row">
					<div className="col-xl-6">
						<div className="fugu--video-thumb wow fadeInUpX" data-wow-delay="0.10s">
							<img src="/images/all-img/v5/video-thumb.png" alt="" />
							<div className="fugu--popup" onClick={() => setOpen(true)}>
								<img src="/images/all-img/v5/play-button.png" alt="" />
								<div className="waves wave-1"></div>
								<div className="waves wave-2"></div>
								<div className="waves wave-3"></div>
							</div>
							<div className="fugu--video-shape1">
								<img src="/images/shape2/shape-video.png" alt="" />
							</div>
							<div className="fugu--video-shape2">
								<img src="/images/shape2/shape-video.png" alt="" />
							</div>
						</div>
					</div>
					<div className="col-xl-6 d-flex align-items-center">
						<div className="fugu--default-content">
							<h2>PaisaMate is one of the most trusted digital finance platforms.</h2>
							<p>
							Our platform helps bridge the gap between traditional finance and modern digital tools, empowering users to make smarter financial decisions every day.


							</p>
							<p>
							Our platform simplifies financial transactions by allowing users to send, receive, and manage funds digitally, with a strong focus on privacy, convenience, and control
							</p>
							<div className="fugu--btn-wrap">
								<Link href={"#"} legacyBehavior>
									<a className="fugu--btn bg-blue">Discover More</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalVideo
				channel="youtube"
				autoplay
				isOpen={isOpen}
				videoId="E1xkXZs0cAQ"
				onClose={() => setOpen(false)}
			/>
		</div>
	);
}
