"use client";

import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross, ImInsertTemplate } from "react-icons/im";
import Link from "next/link";

const Header: React.FC<{ data: any }> = ({ data }) => {
  console.log("it's menu data: ", data);

  const [MenuCss, updateMenuState] = useState({
    transform: "translateX(100%)",
  });

  const [tab, setTab] = useState("tab1"); // State to manage active tab

  const openTab = (event: any, tabId: any) => {
    event.preventDefault();
    setTab(tabId);
  };

  return (
    <>
      <header className="home-header">
        <div className="container-fluid">
          <div className="header-row ">
            <a href="index.php" className="logo">
              <img
                src={`${process.env.PUBLIC_URL}/assets_frontend/img/logo.webp`}
              />
            </a>
            <div className="relative">
              <button
                type="button"
                className="menubtn fixed  right-8 top-7"
                onClick={() => updateMenuState({ transform: "translateX(0)" })}
              >
                <GiHamburgerMenu className="text-gray-100" size={40} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="newMenuDiv" style={MenuCss}>
        <div className="nfull-nav">
          <p className="btn-menu-cancels ">
            <button
              type="button"
              className="no-btn-css"
              onClick={() => updateMenuState({ transform: "translateX(100%)" })}
            >
              <ImCross size={30} />
            </button>
          </p>
          <div className="fll-nav-container">
            <div className="fll-left">
              <ul className="fll-nav-main-menu">
                {data.map((page: any) => {
                  if (page.childrens.length >= 1) {
                    return (
                      <>
                        <li
                          onClick={
                            page.id == 550
                              ? (e) => openTab(e, "tab1")
                              : (e) => openTab(e, "tab2")
                          }
                        >
                          <Link
                            href={page.slug}
                            data-show={`${
                              page.id == 550
                                ? "services-child-nav129"
                                : ".work-child-nav130"
                            }  `}
                            className={`${
                              page.id == 550 && tab == "tab1"
                                ? "has-inner-menu parent_links active "
                                : page.id == 563 && tab == "tab2"
                                ? "has-inner-menu parent_links active"
                                : ""
                            }`}
                            style={{ cursor: "pointer" }}
                          >
                            {page.title}
                            <span />
                          </Link>
                        </li>
                      </>
                    );
                  } else if (page.childrens.length == 0) {
                    return (
                      <>
                        <li
                          className={`${
                            page.slug === "ecommerce" ||
                            page.slug === "cms_software"
                              ? "vip-menu "
                              : "parent_links"
                          }  `}
                        >
                          <a href={page.slug}>
                            <i className="" /> {page.title}
                          </a>
                        </li>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <li>
                          <Link
                            className="parent_links"
                            href={"/"}
                            onClick={() =>
                              updateMenuState({ transform: "translateX(100%)" })
                            }
                          >
                            {page.title}{" "}
                          </Link>
                        </li>
                      </>
                    );
                  }
                })}

                {/* {data.map((page: any) => {
                      return (
                        <li
                          className={`${
                            page.slug === "ecommerce" ||
                            page.slug === "cms_software"
                              ? "vip-menu "
                              : ""
                          }`}
                        >
                          <Link
                            className={` ${
                              page.childrens.length >=1
                                ? `has-inner-menu parent_links  active  `
                                : "parent_links"
                            } `}
                            data-show={`${
                              page.slug === "services"
                            }.work-child-nav130`}
                            href={page.slug}
                            onClick={() =>
                              updateMenuState({ transform: "translateX(100%)" })
                            }
                          >
                            {page.title}{" "}
                          </Link>
                        </li>
                      );
                    })} */}

                {/* <li>
                  <Link
                    className="parent_links"
                    href={"/"}
                    onClick={() =>
                      updateMenuState({ transform: "translateX(100%)" })
                    }
                  >
                    Home{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="parent_links"
                    href={data?.[1].slug}
                    onClick={() =>
                      updateMenuState({ transform: "translateX(100%)" })
                    }
                  >
                    About Us{" "}
                  </Link>
                </li>
                <li
                  // onClick={"openTab(event, 'tab1')"}
                  onClick={(e) => openTab(e, "tab1")}
                >
                  <Link
                    // onClick={() =>
                    //   updateMenuState({ transform: "translateX(100%)" })
                    // }
                    href={"services"}
                    data-show="services-child-nav129"
                    className="has-inner-menu parent_links  active  "
                    style={{ cursor: "pointer" }}
                  >
                    Services
                    <span />
                  </Link>
                </li>
                <li
                  //onClick="openTab(event, 'tab2')"
                  onClick={(e) => openTab(e, "tab2")}
                >
                  <a
                    data-show=".work-child-nav130"
                    className="has-inner-menu parent_links "
                    style={{ cursor: "pointer" }}
                    href="#"
                  >
                    Our work <span />
                  </a>
                </li>
                <li>
                  <a className="parent_links" href="contact">
                    Contact us{" "}
                  </a>
                </li>
                <li>
                  <a className="parent_links" href="blog">
                    Blog{" "}
                  </a>
                </li>
                <li
                  className="vip-menu"
                  style={{ marginBottom: "15px !important" }}
                >
                  <a href="ecommerce">
                    <i className="" /> Ecommerce Software
                  </a>
                </li>
                <li
                  className="vip-menu"
                  style={{ marginBottom: "15px !important" }}
                >
                  <a href="cms_software">
                    <i className="" /> CMS Software
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="fll-right work-child-nav work-child-nav127">
              <div className="fll-box">
                <p className="btn-back">back</p>
              </div>
              <div className="fll-nav-right-inner">
                <div className="fll-nav-child"></div>
              </div>
            </div>
            <div className="fll-right work-child-nav work-child-nav128">
              <div className="fll-box">
                <p className="btn-back">back</p>
              </div>
              <div className="fll-nav-right-inner">
                <div className="fll-nav-child"></div>
              </div>
            </div>
            {tab === "tab1" && (
              <div
                id="tab1"
                className="tab-content active fll-right tb-active services-child-nav services-child-nav129"
              >
                <div className="fll-box">
                  <p className="btn-back">back</p>
                </div>
                <div className="fll-nav-right-inner">
                  <div className="fll-nav-child">
                    <div className="fll-nav-child-box-1">
                      <ul className="fll-nav-child-ul">
                        {/* {data.map((page: any) => {
                              if (page.slug === "services") {
                                return page.childrens.map((children: any) => {
                                  if (children.slug === "web_design_solu")
                                    return (
                                      <>
                                        <li className="head-li">
                                          <a
                                            href="web_design_solu"
                                            className="fll-nav-child-h"
                                          >
                                            {children.title}
                                          </a>
                                        </li>
                                        {children.childrens.map((item: any) => (
                                          <li>
                                            <a href="simple_web">{item.title}</a>
                                          </li>
                                        ))}
                                      </>
                                    );
                                });
                              }
                            })} */}

                        <li className="head-li">
                          <a href="web_design_solu" className="fll-nav-child-h">
                            Website Design Solution
                          </a>
                        </li>
                        <li>
                          <a href="simple_web">Simple website design</a>
                        </li>
                        <li>
                          <a href="website_redesign">Website redesign</a>
                        </li>
                        <li>
                          <a href="website_maintenance">
                            Website maintenance services
                          </a>
                        </li>
                        <li>
                          <a href="ecom_web_development">
                            Ecommerce website development
                          </a>
                        </li>
                        <li>
                          <a href="hack_proof_web">Hack proof website</a>
                        </li>
                      </ul>
                    </div>
                    <div className="fll-nav-child-box-2">
                      <ul className="fll-nav-child-ul">
                        <li className="head-li">
                          <a
                            href="digital_marketing"
                            className="fll-nav-child-h"
                          >
                            Digital Marketing
                          </a>
                        </li>
                        <li>
                          <a href="social_media">Social media marketing</a>
                        </li>
                        <li>
                          <a href="seo_services">Seo services</a>
                        </li>
                        <li>
                          <a href="seo_ecom">Seo for ecommerce</a>
                        </li>
                        <li>
                          <a href="ppc_advertising">Ppc advertising</a>
                        </li>
                        <li>
                          <a href="facebook_marketing">Facebook marketing</a>
                        </li>
                      </ul>
                    </div>
                    <div className="fll-nav-child-box-3">
                      <ul className="fll-nav-child-ul">
                        <li className="head-li">
                          <a
                            href="graphic_designing"
                            className="fll-nav-child-h"
                          >
                            Graphic Designing
                          </a>
                        </li>
                        <li>
                          <a href="corporate_identity">Corporate identity</a>
                        </li>
                        <li>
                          <a href="custom_logo">Custom logo design</a>
                        </li>
                        <li>
                          <a href="animation">Animation &amp; interaction</a>
                        </li>
                        <li>
                          <a href="printing">Printing services</a>
                        </li>
                        <li>
                          <a href="mascots">Mascots design</a>
                        </li>
                      </ul>
                    </div>
                    <div className="fll-nav-child-box-4">
                      <ul className="fll-nav-child-ul">
                        <li>
                          <a
                            style={{ cursor: "pointer" }}
                            className="fll-nav-child-h"
                          >
                            App Development
                          </a>
                        </li>
                        <li>
                          <a href="application-development">
                            Web application development
                          </a>
                        </li>
                        <li>
                          <a href="mobile-application">Mobile application</a>
                        </li>
                        <li>
                          <a href="android-applications">
                            Android applications
                          </a>
                        </li>
                        <li>
                          <a href="iphone-applications">Iphone applications</a>
                        </li>
                      </ul>
                    </div>
                    <div className="fll-nav-child-box-5">
                      <ul className="fll-nav-child-ul">
                        <li>
                          <a
                            style={{ cursor: "pointer" }}
                            className="fll-nav-child-h"
                          >
                            Web App Solutions
                          </a>
                        </li>
                        <li>
                          <a href="cinema-management-software">
                            Cinema ticketing software
                          </a>
                        </li>
                        <li>
                          <a href="point-of-sale-web-application-solution">
                            Point of sale web application solution
                          </a>
                        </li>
                        <li>
                          <a href="hr-management-solution">
                            Hr management solution
                          </a>
                        </li>
                        <li>
                          <a href="cargo-management-solution">
                            Cargo management solution
                          </a>
                        </li>
                        <li>
                          <a href="webbased-accounting-management-solution">
                            Web-based accounting software
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {tab === "tab2" && (
              <div
                id="tab2"
                className="h-[100%] w-[77%] flex flex-col justify-center cursor-pointer"
              >
                <div className="fll-box">
                  <p className="btn-back">back</p>
                </div>
                <div className="fll-nav-right-inner">
                  <div className="fll-nav-child">
                    <div className="fll-nav-child-box-1">
                      <ul className="fll-nav-child-ul flex h-[77%] items-center justify-center">
                        <li className="head-li">
                          <a className="fll-nav-child-h">Portfolio</a>
                        </li>
                      </ul>
                    </div>
                    <div className="fll-nav-child-box-2">
                      <ul className="fll-nav-child-ul flex h-[77%] items-center justify-center">
                        <li className="head-li">
                          <a href="clients" className="fll-nav-child-h">
                            Clientele
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="fll-right work-child-nav work-child-nav131">
              <div className="fll-box">
                <p className="btn-back">back</p>
              </div>
              <div className="fll-nav-right-inner">
                <div className="fll-nav-child"></div>
              </div>
            </div>
            <div className="fll-right work-child-nav work-child-nav223">
              <div className="fll-box">
                <p className="btn-back">back</p>
              </div>
              <div className="fll-nav-right-inner">
                <div className="fll-nav-child"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
