import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function ChooseServiceSection() {
	return (
		<div className="section fugu-section-padding3">
			<div className="container">
				<div className="fugu-section-title">
					<h2>Choose the Basket you need</h2>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap fugu-iconbox-wrap5 wow fadeInUpX" data-wow-delay="0s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon1.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4>Risk-free(Approximately 8% Return)</h4>
								<p>
									This is a risk-free basket that is guaranteed to return 8% of the initial investment.
								</p>

								<Link href="risk-free" legacyBehavior>
									<a className="fugu-icon-btn">
										Risk-free <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap fugu-iconbox-wrap5 wow fadeInUpX" data-wow-delay=".10s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon2.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4>Risky(Approximately 12% Return)</h4>
								<p>
									This is a risky basket that is guaranteed to return 12% of the initial investment.
								</p>
								<Link href="risky" legacyBehavior>
									<a className="fugu-icon-btn">
										Risky <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap fugu-iconbox-wrap5 wow fadeInUpX" data-wow-delay=".20s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon3.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4>Hybrid(Approximately 10% Return)</h4>
								<p>
									This is a hybrid basket that is guaranteed to return 10% of the initial investment.
								</p>
								<Link href="hybrid" legacyBehavior>
									<a className="fugu-icon-btn">
										Hybrid <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap fugu-iconbox-wrap5 wow fadeInUpX" data-wow-delay=".30s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon4.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4>High Risk(Approximately 15% Return)</h4>
								<p>
									This is a high risk basket that is guaranteed to return 15% of the initial investment.
								</p>
								<Link href="high-risk" legacyBehavior>
									<a className="fugu-icon-btn">
										High Risk <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap fugu-iconbox-wrap5 wow fadeInUpX" data-wow-delay=".40s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon5.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4>Low Risk(Approximately 6% Return)</h4>
								<p>
									This is a low risk basket that is guaranteed to return 6% of the initial investment.
								</p>
								<Link href="low-risk" legacyBehavior>
									<a className="fugu-icon-btn">
										Low Risk <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
					{/* <div className="col-lg-6">
						<div className="fugu-iconbox-wrap fugu-iconbox-wrap5 wow fadeInUpX" data-wow-delay=".50s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon6.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4>Invest More(Approximately 10% Return)</h4>
								<p>
									Invest more in the basket to get a higher return.
								</p>
								<Link href="invest-more" legacyBehavior>
									<a className="fugu-icon-btn">
										Invest More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}
