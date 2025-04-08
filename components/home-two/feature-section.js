/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function FeatureSection() {
  return (
    <div className="section bg-warning-200 fugu-section-padding3">
      <div className="container">
        <div className="fugu-section-title">
          <h2>Secure solutions for your digital and money</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div
              className="fugu-iconbox-wrap2 wow fadeInUpX"
              data-wow-delay="0s"
            >
              <div className="fugu-iconbox-icon2">
                <img src="/images/all-img/v2/icon1.png" alt="" />
              </div>
              <div className="fugu-iconbox-data2">
                <h4>Buy Baskets</h4>
                <p>
                  This is a combinations of top performing stocks currently.
                  Which you can select as per your needs.
                </p>
                <div
                  className="fugu-hero-btn-wrap wow fadeInUpX"
                  data-wow-delay="0.40s"
                >
                  <a className="fugu-btn fugu-round-btn" href="/">
                    Buy Baskets
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="fugu-iconbox-wrap2 wow fadeInUpX"
              data-wow-delay="0.20s"
            >
              <div className="fugu-iconbox-icon2">
                <img src="/images/all-img/v2/icon2.png" alt="" />
              </div>
              <div className="fugu-iconbox-data2">
                <h4>Buy Stocks</h4>
                <p>
                  You can buy stocks directly from the platform. We have a wide
                  range of stocks to choose from.
                </p>
                <div
                  className="fugu-hero-btn-wrap wow fadeInUpX"
                  data-wow-delay="0.40s"
                >
                  <a className="fugu-btn fugu-round-btn" href="/">
                    Buy Stocks
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
            <div
              className="fugu-iconbox-wrap2 wow fadeInUpX"
              data-wow-delay="0.30s"
            >
              <div className="fugu-iconbox-icon2">
                <img src="/images/all-img/v2/icon3.png" alt="" />
              </div>
              <div className="fugu-iconbox-data2">
                <h4>Buy Government Bonds</h4>
                <p>
                  You can buy government bonds directly from the platform. We
                  have a wide range of government bonds to choose from.
                </p>
                <div
                  className="fugu-hero-btn-wrap wow fadeInUpX"
                  data-wow-delay="0.40s"
                >
                  <a className="fugu-btn fugu-round-btn" href="/">
                    Buy Gold ETF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
