"use client";
import { nextUtility } from "@/utility";
import Link from "next/link";
import Logo from "@assets/img/logo/adsparrow-logo.png";
import { Fragment, useEffect, useState } from "react";
import { useScrollDirection } from "@/utility/useScrollDirection";
import Image from "next/image";

const Header = ({ header, single }) => {
  useEffect(() => {
    nextUtility.stickyNav();
  }, []);

  return <Header1 single={single} />;
};
export default Header;

const Menu = ({ single, menu }) => {
  const singleMenu = menu
    ? menu
    : [
        { id: 1, href: "/about", title: "Who We Are" },
        { id: 2, href: "services", title: "Services" },
        { id: 3, href: "team", title: "Team" },
        { id: 4, href: "blog", title: "Blog" },
      ];
  return (
    <Fragment>
      {single ? (
        <nav id="mobile-menu" className="d-none d-xl-block">
          <ul>
            <li className="has-dropdown active menu-thumb">
              <Link href="/">Home</Link>
            </li>
            {singleMenu.map((menu) => (
              <li key={menu.id}>
                <a href={`#${menu.href}`}>{menu.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <nav id="mobile-menu" className="d-none d-xl-block">
          <ul>
            <li className="has-dropdown active menu-thumb">
              <Link href="/">
                Home
              </Link>
            </li>
            <li className="has-dropdown active d-xl-none">
              <Link href="/" className="border-none">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">Who We Are</Link>
            </li>
            <li>
              <Link href="">
                Services
                <i className="fas fa-angle-down" />
              </Link>
              <ul className="submenu">
                <li>
                  <Link href="/services/website-design-and-development">
                    Website Design <br /> &amp; Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/search-engine-optimization">
                    Serach Engine Optimization (SEO)
                  </Link>
                </li>
                <li>
                  <Link href="/services/video-editing-and-animation">
                    Vide Editing <br /> &amp; Animation
                  </Link>
                </li>
                <li>
                  <Link href="/services/social-media-marketing">
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/services/pay-per-click">
                    Pay Per Click (PPC)
                  </Link>
                </li>
                <li>
                  <Link href="/services/ecommerce-store">Ecommerse Stores</Link>
                </li>
              </ul>
            </li>
            {/* <li className="has-dropdown">
              <Link href="news">
                Pages
                <i className="fas fa-angle-down" />
              </Link>
              <ul className="submenu">
                <li className="has-dropdown">
                  <Link href="project-details">
                    Projects
                    <i className="fas fa-angle-down" />
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link href="project">Projects</Link>
                    </li>
                    <li>
                      <Link href="project-details">Project Details</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <Link href="team-details">
                    Team
                    <i className="fas fa-angle-down" />
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link href="team">Team</Link>
                    </li>
                    <li>
                      <Link href="team-details">Team Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="pricing">Pricing Table</Link>
                </li>
                <li>
                  <Link href="404">404 Page</Link>
                </li>
              </ul>
            </li> */}
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </Fragment>
  );
};

const MobileMenu = ({ single, menu }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  const singleMenu = menu
    ? menu
    : [
        { id: 1, href: "/about", title: "Who We Are" },
        { id: 2, href: "services", title: "Services" },
        { id: 3, href: "team", title: "Team" },
        { id: 4, href: "blog", title: "Blog" },
      ];
  return (
    <div className="mobile-menu fix mb-3 mean-container d-block d-xl-none">
      <div className="mean-bar">
        <a href="#nav" className="meanmenu-reveal">
          <span>
            <span>
              <span />
            </span>
          </span>
        </a>
        <nav className="mean-nav">
          <ul>
            <li className="has-dropdown active d-xl-none">
              <a
                href="/"
                className="border-none"
                onClick={() => activeMenuSet("home")}
              >
                Home
              </a>
            </li>
            {single ? (
              <Fragment>
                {singleMenu.map((menu) => (
                  <li key={menu.id}>
                    <a href={`#${menu.href}`}>{menu.title}</a>
                  </li>
                ))}
              </Fragment>
            ) : (
              <Fragment>
                <li>
                  <Link href="/about">Who We Are</Link>
                </li>
                <li>
                  <a href="" onClick={() => activeMenuSet("Services")}>
                    Services
                    <i className="fas fa-angle-down" />
                  </a>
                  <ul className="submenu" style={activeLi("Services")}>
                    <li>
                      <Link href="/services/website-design-and-development">
                        Website Design <br /> &amp; Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/search-engine-optimization">
                        Serach Engine Optimization (SEO)
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/video-editing-and-animation">
                        Vide Editing <br /> &amp; Animation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/social-media-marketing">
                        Social Media Marketing
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/pay-per-click">
                        Pay Per Click (PPC)
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/ecommerce-store">
                        Ecommerse Stores
                      </Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={() => activeMenuSet("Services")}
                  >
                    <i className="far fa-plus" />
                  </a>
                </li>
                {/* <li>
                  <a href="#" onClick={() => activeMenuSet("Blog")}>
                    Blogs
                    <i className="fas fa-angle-down" />
                  </a>
                  <ul className="submenu" style={activeLi("Blog")}>
                    <li>
                      <Link href="news">Blog </Link>
                    </li>
                    <li>
                      <Link href="news-details">Blog Details</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={() => activeMenuSet("Blog")}
                  >
                    <i className="far fa-plus" />
                  </a>
                </li> */}
                <li className="mean-last">
                  <Link href="/contact">Contact</Link>
                </li>
              </Fragment>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

const Sidebar = ({ sidebarToggle, close, menu, single }) => {
  return (
    <Fragment>
      <div className="fix-area">
        <div className={`offcanvas__info ${sidebarToggle ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <Image
                      src={Logo}
                      alt="Digital marketing agency"
                      height={60}
                      width={184}
                    />
                  </Link>
                </div>
                <div className="offcanvas__close" onClick={() => close()}>
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="mobile-menu fix mb-3">
                <MobileMenu single={single} menu={menu} />
              </div>
              <p className="text d-none d-xl-block mb-5">
                Nullam dignissim, ante scelerisque the is euismod fermentum odio
                sem semper the is erat, a feugiat leo urna eget eros. Duis
                Aenean a imperdiet risus.
              </p>
              <div className="offcanvas__contact">
                {/* <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Main Street, Melbourne, Australia
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@example.com">info@example.com</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Mod-friday, 09am -05pm
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+11002345909">+11002345909</a>
                    </div>
                  </li>
                </ul> */}
                <div className="header-button mt-4">
                  <Link href="/contact" className="theme-btn text-center">
                    Free Audit
                  </Link>
                </div>
                {/* <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${sidebarToggle ? "overlay-open" : ""}`}
        onClick={() => close()}
      />
    </Fragment>
  );
};

const Header1 = ({ single }) => {
  const scrollDirection = useScrollDirection();
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Fragment>
      <header
        id="header-sticky"
        className={`header-1 sticky ${
          scrollDirection === "down" ? "top-24" : "top-0"
        } h-24 bg-blue-200 transition-all duration-500`}
      >
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/">
                  <Image
                    src={Logo}
                    alt="logo-img"
                    className="logo-1"
                    height={64}
                    width={192}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src={Logo}
                    alt="logo-img"
                    className="logo-2"
                    height={64}
                    width={192}
                  />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu single={single} />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                {/* <div className="icon-items">
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="content">
                    <p>Make A Call</p>
                    <h4>
                      <a href="tel:+00012345688">+000 (123) 456 88</a>
                    </h4>
                  </div>
                </div> */}
                <Link
                  href="/"
                  className="theme-btn hover-white audit-btn aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  style={{ backgroundColor: "#202369" }}
                >
                  Free Audit
                </Link>
                <div className="header__hamburger d-md-block d-lg-none my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
        single={single}
      />
    </Fragment>
  );
};
