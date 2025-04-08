/* eslint-disable @next/next/no-img-element */

import { Accordion } from "react-bootstrap";
export default function FaqAccordionTwo() {
	return (
		<div className="fugu--faq-section2 fugu--section-padding-bottom">
			<div className="container">
				<div className="fugu--section-title">
					<div className="fugu--default-content">
						<h2>Do you have any questions about Fintech? Ask us</h2>
						<p>
						Fintech uses advanced digital tools to ensure secure, seamless, and trusted financial transactions — from payments to personal finance.
						</p>
					</div>
				</div>
				<div className="fugu--accordion-one accordion-three" id="accordionExample2">
					<div className="row">
						<div className="col-lg-6">
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0">
									<Accordion.Header>Q. What is fintech?</Accordion.Header>
									<Accordion.Body>
									Fintech, short for financial technology, refers to the use of innovative digital tools and software to improve, automate, and simplify financial services — including banking, saving, investing, and payments.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>
										Q. What other types of cryptocurrency are out there?
									</Accordion.Header>
									<Accordion.Body>
										A cryptocurrency is a digital currency, which is an alternative form of payment
										created using encryption algorithms.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>Q. How are different fintech services connected?</Accordion.Header>
									<Accordion.Body>
									Fintech services like digital wallets, budgeting apps, online banking, and investment platforms are all connected through the goal of making financial tasks easier, faster, and more accessible.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
						<div className="col-lg-6">
							<Accordion>
								<Accordion.Item eventKey="0">
									<Accordion.Header>Q. How safe is cryptocurrency?</Accordion.Header>
									<Accordion.Body>
										A cryptocurrency is a digital currency, which is an alternative form of payment
										created using encryption algorithms.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>
										Q. What regulation and requirements govern bitcoin?
									</Accordion.Header>
									<Accordion.Body>
										A cryptocurrency is a digital currency, which is an alternative form of payment
										created using encryption algorithms.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>What are the PaisaMate services?</Accordion.Header>
									<Accordion.Body>
									They often integrate with each other to create a seamless money management experience — from tracking spending to saving automatically and investing wisely.


									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
					</div>
				</div>
			</div>
			<div className="fugu--circle-shape circle-five">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
			<div className="fugu--circle-shape circle-six">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
			<div className="fugu--circle-shape circle-seven">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
		</div>
	);
}
