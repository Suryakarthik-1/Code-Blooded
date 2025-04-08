import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function FaqSection() {
	return (
		<div className="section bg-warning-300 fugu-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 position-relative">
						<div className="fugu-default-content">
							<h2>Ask if you have any questions about us.</h2>
							<p>We are ready to answer all your questions. Ask us any questions you may have.</p>
							<Link href={"/contact"} legacyBehavior>
								<a className="fugu-faq-btn">Don't find the answer? Contact us here</a>
							</Link>
						</div>
					</div>
					<div className="col-lg-6 offset-lg-1">
						<div className="fugu-accordion-wrap">
							<div className="fugu-accordion-item">
								<h4>Is it safe to use Paisa Mate app?</h4>
								<p>
									Yes, it is safe to use Paisa Mate app. We are a registered company and we are
									regulated by the Securities and Exchange Board of India (SEBI).
								</p>
							</div>
							<div className="fugu-accordion-item">
								<h4>Do you provide any moneyback guarantee?</h4>
								<p>
									Yes, we provide a moneyback guarantee. If you are not satisfied with the service, you can
									contact us and we will refund your money.
								</p>
							</div>
							<div className="fugu-accordion-item">
								<h4>How long do you provide supports?</h4>
								<p>
									We provide support for 24 hours a day, 7 days a week. You can contact us anytime.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
