/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import {
	BlogDropdownMenus,
	ContactDropdownMenus,
	DemoDropdownMenus,
	ElementsMegaMenu,
	PagesDropdownMenus,
} from "../navbar/menu-data";
import NavItem from "../navbar/nav-item";
import Navbar from "../navbar/navbar";
import useScroll from "./../../../hooks/useScroll";

export default function HeaderHomeTwo() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleCloseMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	const scroll = useScroll();
	return (
    <header
      className={`site-header fugu--header-two fugu-header-section ${
        scroll ? 'sticky-menu' : ''
      }`}
      id="sticky-menu"
    >
      <div className="container-fluid" style={{ maxHeight: '100px' }}>
        <nav className="navbar site-navbar">
          <div className="brand-logo">
            <Link href={'/'}>
              <img
                src="/images/logo/logo-black.svg"
                alt=""
                className="light-version-logo"
                style={{ maxWidth: '40%' }}
              />
            </Link>
          </div>
          <div className="menu-block-wrapper">
            <div
              className={`menu-overlay ${isMobileMenuOpen ? 'active' : null}`}
              onClick={handleCloseMobileMenu}
            ></div>
            <nav
              className={`menu-block ${isMobileMenuOpen ? 'active' : null}`}
              id="append-menu-header"
            >
              <div className="mobile-menu-head">
                <div
                  className="mobile-menu-close"
                  onClick={handleCloseMobileMenu}
                >
                  &times;
                </div>
              </div>

              {/* <Navbar>
								<NavItem navItemText="Demo" menuItems={DemoDropdownMenus} />
								<NavItem navItemText="Pages" menuItems={PagesDropdownMenus} />
								<NavItem navItemText="Elements" menuItems={ElementsMegaMenu} megaMenu />
								<NavItem navItemText="Blog" menuItems={BlogDropdownMenus} />
								<NavItem navItemText="Contact Us" menuItems={ContactDropdownMenus} />
							</Navbar> */}
            </nav>
          </div>
          <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
            <Link
              href="/SmartSavings"
              className="fugu-btn fugu-header-btn fugu-header-btn2"
            >
              Your Wallet
            </Link>
          </div>

          <div
            className="mobile-menu-trigger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  )
}
