import React from "react";
// import Navbar from "./Layouts/Navbar";
import InstagramFeed from "./Layouts/InstagramFeed";
import Footer from "./Layouts/Footer";
import CanvasMenu from "./Layouts/CanvasMenu";
import SearchPopupArea from "./Layouts/SearchPopupArea";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <div className="site-wrapper">
        <div className="main-overlay"></div>

        <header className="header-personal">
          <div className="container-xl header-top">
            <div className="row align-items-center">
              <div className="col-4 d-none d-md-block d-lg-block">
                <ul className="social-icons list-unstyled list-inline mb-0">
                  <li className="list-inline-item">
                    <a href="#profile">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#profile">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#profile">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#profile">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#profile">
                      <i className="fab fa-medium"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#profile">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 col-sm-12 col-xs-12 text-center">
                <div className="navbar-brand">
                  <Link to="/personal">
                    Personal
                    <img src="assests/images/other/avatar-lg.png" alt="logo" />
                  </Link>
                </div>
                <div className="d-block text-logo">
                  <Link to="/personal">
                    Katen<span className="dot">.</span>
                  </Link>
                </div>
                <span className="slogan d-block">
                  Professional Writer & Personal Blogger
                </span>
              </div>

              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="header-buttons float-md-end mt-4 mt-md-0">
                  <button className="search icon-button">
                    <i className="icon-magnifier"></i>
                  </button>
                  <button className="burger-menu icon-button ms-2 float-end float-md-none">
                    <span className="burger-icon"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <nav className="navbar navbar-expand-lg">
            <div className="container-xl">
              <div className="collapse navbar-collapse justify-content-center centered-nav">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown active">
                    <div className="nav-link dropdown-toggle">
                      <Link to="/"> Home</Link>
                    </div>
                    <ul className="dropdown-menu">
                      <li>
                        <div className="dropdown-item">
                          <Link to="/"> Magazine </Link>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item">
                          <Link to="/personal">Personal</Link>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item">
                          <Link to="/personalalt">Personal Alt</Link>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item">
                          <Link to="/minimal">Minimal</Link>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item">
                          <Link to="/classes">Classic</Link>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link">
                      <Link to="/category">Lifestyle</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link">
                      <Link to="/category">Inspiration</Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle" href="#profile">
                      Pages
                    </div>
                    <ul className="dropdown-menu">
                      <li>
                        <div className="dropdown-item">
                          <Link to="/category">Category</Link>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item">
                          <Link to="/blogsingle">Blog Single</Link>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item">
                          <Link to="/blog-single-alt">Blog Single Alt</Link>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item">
                          <Link to="/about">About</Link>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item">
                          <Link to="/contact">Contact</Link>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link">
                      <Link to="/contact">Contact</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <section className="page-header">
          <div className="container-xl">
            <div className="text-center">
              <h1 className="mt-0 mb-2">Lifestyle</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0">
                  <li className="breadcrumb-item">
                    <a href="#profile">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Lifestyle
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        <section className="main-content">
          <div className="container-xl">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="row gy-4">
                  <div className="col-sm-6">
                    <div className="post post-grid rounded bordered">
                      <div className="thumb top-rounded">
                        <div className="category-badge position-absolute">
                          <Link to="/category">Lifestyle</Link>
                        </div>
                        <span className="post-format">
                          <i className="icon-picture"></i>
                        </span>
                        <div>
                          <Link to="/blogsingle">
                            <div className="inner">
                              <img
                                src="assests/images/posts/post-md-1.jpg"
                                alt="post-title"
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="details">
                        <ul className="meta list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="#profile">
                              <img
                                src="assests/images/other/author-sm.png"
                                className="author"
                                alt="author"
                              />
                              Katen Doe
                            </a>
                          </li>
                          <li className="list-inline-item">29 March 2021</li>
                        </ul>
                        <h5 className="post-title mb-3 mt-3">
                          <div>
                            <Link to="/blogsingle">
                              How To Become Better With Building In 1 Month
                            </Link>
                          </div>
                        </h5>
                        <p className="excerpt mb-0">
                          I am so happy, my dear friend, so absorbed in the
                          exquisite sense of mere tranquil existence.
                        </p>
                      </div>
                      <div className="post-bottom clearfix d-flex align-items-center">
                        <div className="social-share me-auto">
                          <button className="toggle-button icon-share"></button>
                          <ul className="icons list-unstyled list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-pinterest"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-telegram-plane"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="far fa-envelope"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="more-button float-end">
                          <div>
                            <Link to="/blogsingle">
                              <span className="icon-options"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="post post-grid rounded bordered">
                      <div className="thumb top-rounded">
                        <div className="category-badge position-absolute">
                          <Link to="/category">Inspiration</Link>
                        </div>
                        <div>
                          <Link to="/blogsingle">
                            <div className="inner">
                              <img
                                src="assests/images/posts/post-md-2.jpg"
                                alt="post-title"
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="details">
                        <ul className="meta list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="#profile">
                              <img
                                src="assests/images/other/author-sm.png"
                                className="author"
                                alt="author"
                              />
                              Katen Doe
                            </a>
                          </li>
                          <li className="list-inline-item">29 March 2021</li>
                        </ul>
                        <h5 className="post-title mb-3 mt-3">
                          <div>
                            <Link to="/blogsingle">
                              Most Important Thing You Need To Know About Swim
                            </Link>
                          </div>
                        </h5>
                        <p className="excerpt mb-0">
                          I am so happy, my dear friend, so absorbed in the
                          exquisite sense of mere tranquil existence.
                        </p>
                      </div>
                      <div className="post-bottom clearfix d-flex align-items-center">
                        <div className="social-share me-auto">
                          <button className="toggle-button icon-share"></button>
                          <ul className="icons list-unstyled list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-pinterest"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-telegram-plane"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="far fa-envelope"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="more-button float-end">
                          <div>
                            <Link to="/blogsingle">
                              <span className="icon-options"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="post post-grid rounded bordered">
                      <div className="thumb top-rounded">
                        <div className="category-badge position-absolute">
                          <Link to="/category">Fashion</Link>
                        </div>
                        <div>
                          <Link to="/blogsingle">
                            <div className="inner">
                              <img
                                src="assests/images/posts/post-md-3.jpg"
                                alt="post-title"
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="details">
                        <ul className="meta list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="#profile">
                              <img
                                src="assests/images/other/author-sm.png"
                                className="author"
                                alt="author"
                              />
                              Katen Doe
                            </a>
                          </li>
                          <li className="list-inline-item">29 March 2021</li>
                        </ul>
                        <h5 className="post-title mb-3 mt-3">
                          <div>
                            <Link to="/blogsingle">
                              The Secrets To Finding Class Tools For Your Dress
                            </Link>
                          </div>
                        </h5>
                        <p className="excerpt mb-0">
                          I am so happy, my dear friend, so absorbed in the
                          exquisite sense of mere tranquil existence.
                        </p>
                      </div>
                      <div className="post-bottom clearfix d-flex align-items-center">
                        <div className="social-share me-auto">
                          <button className="toggle-button icon-share"></button>
                          <ul className="icons list-unstyled list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-pinterest"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-telegram-plane"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="far fa-envelope"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="more-button float-end">
                          <div>
                            <Link to="/blogsingle">
                              <span className="icon-options"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="post post-grid rounded bordered">
                      <div className="thumb top-rounded">
                        <div className="category-badge position-absolute">
                          <Link to="/category">Lifestyle</Link>
                        </div>
                        <span className="post-format">
                          <i className="icon-camrecorder"></i>
                        </span>
                        <div>
                          <Link to="/blogsingle">
                            <div className="inner">
                              <img
                                src="assests/images/posts/post-md-4.jpg"
                                alt="post-title"
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="details">
                        <ul className="meta list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="#profile">
                              <img
                                src="assests/images/other/author-sm.png"
                                className="author"
                                alt="author"
                              />
                              Katen Doe
                            </a>
                          </li>
                          <li className="list-inline-item">29 March 2021</li>
                        </ul>
                        <h5 className="post-title mb-3 mt-3">
                          <div>
                            <Link to="/blogsingle">
                              How I Improved My Fashion Style In One Day
                            </Link>
                          </div>
                        </h5>
                        <p className="excerpt mb-0">
                          I am so happy, my dear friend, so absorbed in the
                          exquisite sense of mere tranquil existence.
                        </p>
                      </div>
                      <div className="post-bottom clearfix d-flex align-items-center">
                        <div className="social-share me-auto">
                          <button className="toggle-button icon-share"></button>
                          <ul className="icons list-unstyled list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-pinterest"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-telegram-plane"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="far fa-envelope"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="more-button float-end">
                          <div>
                            <Link to="/blogsingle">
                              <span className="icon-options"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="post post-grid rounded bordered">
                      <div className="thumb top-rounded">
                        <div className="category-badge position-absolute">
                          <Link to="/category">Trending</Link>
                        </div>
                        <div>
                          <Link to="/blogsingle">
                            <div className="inner">
                              <img
                                src="assests/images/posts/post-md-5.jpg"
                                alt="post-title"
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="details">
                        <ul className="meta list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="#profile">
                              <img
                                src="assests/images/other/author-sm.png"
                                className="author"
                                alt="author"
                              />
                              Katen Doe
                            </a>
                          </li>
                          <li className="list-inline-item">29 March 2021</li>
                        </ul>
                        <h5 className="post-title mb-3 mt-3">
                          <div>
                            <Link to="/blogsingle">
                              3 Easy Ways To Make Your iPhone Faster
                            </Link>
                          </div>
                        </h5>
                        <p className="excerpt mb-0">
                          I am so happy, my dear friend, so absorbed in the
                          exquisite sense of mere tranquil existence.
                        </p>
                      </div>
                      <div className="post-bottom clearfix d-flex align-items-center">
                        <div className="social-share me-auto">
                          <button className="toggle-button icon-share"></button>
                          <ul className="icons list-unstyled list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-pinterest"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-telegram-plane"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="far fa-envelope"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="more-button float-end">
                          <div>
                            <Link to="/blogsingle">
                              <span className="icon-options"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="post post-grid rounded bordered">
                      <div className="thumb top-rounded">
                        <div className="category-badge position-absolute">
                          <Link to="/category">Fashion</Link>
                        </div>
                        <div>
                          <Link to="/blogsingle">
                            <div className="inner">
                              <img
                                src="assests/images/posts/post-md-6.jpg"
                                alt="post-title"
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="details">
                        <ul className="meta list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="#profile">
                              <img
                                src="assests/images/other/author-sm.png"
                                className="author"
                                alt="author"
                              />
                              Katen Doe
                            </a>
                          </li>
                          <li className="list-inline-item">29 March 2021</li>
                        </ul>
                        <h5 className="post-title mb-3 mt-3">
                          <div>
                            <Link to="/blogsingle">
                              Wondering How To Make Your Hair Style Rock?
                            </Link>
                          </div>
                        </h5>
                        <p className="excerpt mb-0">
                          I am so happy, my dear friend, so absorbed in the
                          exquisite sense of mere tranquil existence.
                        </p>
                      </div>
                      <div className="post-bottom clearfix d-flex align-items-center">
                        <div className="social-share me-auto">
                          <button className="toggle-button icon-share"></button>
                          <ul className="icons list-unstyled list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-pinterest"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-telegram-plane"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="far fa-envelope"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="more-button float-end">
                          <div>
                            <Link to="/blogsingle">
                              <span className="icon-options"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="post post-grid rounded bordered">
                      <div className="thumb top-rounded">
                        <div className="category-badge position-absolute">
                          <Link to="/category">How To</Link>
                        </div>
                        <span className="post-format">
                          <i className="icon-picture"></i>
                        </span>
                        <div>
                          <Link to="/blogsingle">
                            <div className="inner">
                              <img
                                src="assests/images/posts/post-md-7.jpg"
                                alt="post-title"
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="details">
                        <ul className="meta list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="#profile">
                              <img
                                src="assests/images/other/author-sm.png"
                                className="author"
                                alt="author"
                              />
                              Katen Doe
                            </a>
                          </li>
                          <li className="list-inline-item">29 March 2021</li>
                        </ul>
                        <h5 className="post-title mb-3 mt-3">
                          <div>
                            <Link to="/blogsingle">
                              How To Make More Construction By Doing Less
                            </Link>
                          </div>
                        </h5>
                        <p className="excerpt mb-0">
                          I am so happy, my dear friend, so absorbed in the
                          exquisite sense of mere tranquil existence.
                        </p>
                      </div>
                      <div className="post-bottom clearfix d-flex align-items-center">
                        <div className="social-share me-auto">
                          <button className="toggle-button icon-share"></button>
                          <ul className="icons list-unstyled list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-pinterest"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-telegram-plane"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="far fa-envelope"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="more-button float-end">
                          <div>
                            <Link to="/blogsingle">
                              <span className="icon-options"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="post post-grid rounded bordered">
                      <div className="thumb top-rounded">
                        <div className="category-badge position-absolute">
                          <Link to="/category">Culture</Link>
                        </div>
                        <div>
                          <Link to="/blogsingle">
                            <div className="inner">
                              <img
                                src="assests/images/posts/post-md-8.jpg"
                                alt="post-title"
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="details">
                        <ul className="meta list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="#profile">
                              <img
                                src="assests/images/other/author-sm.png"
                                className="author"
                                alt="author"
                              />
                              Katen Doe
                            </a>
                          </li>
                          <li className="list-inline-item">29 March 2021</li>
                        </ul>
                        <h5 className="post-title mb-3 mt-3">
                          <div>
                            <Link to="/blogsingle">
                              An Incredibly Easy Method That Works For All
                            </Link>
                          </div>
                        </h5>
                        <p className="excerpt mb-0">
                          I am so happy, my dear friend, so absorbed in the
                          exquisite sense of mere tranquil existence.
                        </p>
                      </div>
                      <div className="post-bottom clearfix d-flex align-items-center">
                        <div className="social-share me-auto">
                          <button className="toggle-button icon-share"></button>
                          <ul className="icons list-unstyled list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-pinterest"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-telegram-plane"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="far fa-envelope"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="more-button float-end">
                          <div>
                            <Link to="/blogsingle">
                              <span className="icon-options"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="post post-grid rounded bordered">
                      <div className="thumb top-rounded">
                        <div className="category-badge position-absolute">
                          <Link to="/category">Inspiration</Link>
                        </div>
                        <div>
                          <Link to="/blogsingle">
                            <div className="inner">
                              <img
                                src="assests/images/posts/post-md-9.jpg"
                                alt="post-title"
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="details">
                        <ul className="meta list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="#profile">
                              <img
                                src="assests/images/other/author-sm.png"
                                className="author"
                                alt="author"
                              />
                              Katen Doe
                            </a>
                          </li>
                          <li className="list-inline-item">29 March 2021</li>
                        </ul>
                        <h5 className="post-title mb-3 mt-3">
                          <div>
                            <Link to="/blogsingle">
                              10 Ways To Immediately Start Selling Furniture
                            </Link>
                          </div>
                        </h5>
                        <p className="excerpt mb-0">
                          I am so happy, my dear friend, so absorbed in the
                          exquisite sense of mere tranquil existence.
                        </p>
                      </div>
                      <div className="post-bottom clearfix d-flex align-items-center">
                        <div className="social-share me-auto">
                          <button className="toggle-button icon-share"></button>
                          <ul className="icons list-unstyled list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-pinterest"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-telegram-plane"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="far fa-envelope"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="more-button float-end">
                          <div>
                            <Link to="/blogsingle">
                              <span className="icon-options"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="post post-grid rounded bordered">
                      <div className="thumb top-rounded">
                        <div className="category-badge position-absolute">
                          <Link to="/category">Lifestyle</Link>
                        </div>
                        <span className="post-format">
                          <i className="icon-earphones"></i>
                        </span>
                        <div>
                          <Link to="/blogsingle">
                            <div className="inner">
                              <img
                                src="assests/images/posts/post-md-10.jpg"
                                alt="post-title"
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="details">
                        <ul className="meta list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="#profile">
                              <img
                                src="assests/images/other/author-sm.png"
                                className="author"
                                alt="author"
                              />
                              Katen Doe
                            </a>
                          </li>
                          <li className="list-inline-item">29 March 2021</li>
                        </ul>
                        <h5 className="post-title mb-3 mt-3">
                          <div>
                            <Link to="/blogsingle">
                              Now You Can Have Your Thoughts Done Safely
                            </Link>
                          </div>
                        </h5>
                        <p className="excerpt mb-0">
                          I am so happy, my dear friend, so absorbed in the
                          exquisite sense of mere tranquil existence.
                        </p>
                      </div>
                      <div className="post-bottom clearfix d-flex align-items-center">
                        <div className="social-share me-auto">
                          <button className="toggle-button icon-share"></button>
                          <ul className="icons list-unstyled list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-pinterest"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="fab fa-telegram-plane"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#profile">
                                <i className="far fa-envelope"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="more-button float-end">
                          <div>
                            <Link to="/blogsingle">
                              <span className="icon-options"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <nav>
                  <ul className="pagination justify-content-center">
                    <li className="page-item active" aria-current="page">
                      <span className="page-link">1</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#profile">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#profile">
                        3
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-4">
                <div className="sidebar">
                  <div className="widget rounded">
                    <div
                      className="widget-about data-bg-image text-center"
                      data-bg-image="images/map-bg.png"
                    >
                      <img
                        src="assests/images/logo.svg"
                        alt="logo"
                        className="mb-4"
                      />
                      <p className="mb-4">
                        Hello, We’re content writer who is fascinated by content
                        fashion, celebrity and lifestyle. We helps clients bring
                        the right content to the right people.
                      </p>
                      <ul className="social-icons list-unstyled list-inline mb-0">
                        <li className="list-inline-item">
                          <a href="#profile">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#profile">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#profile">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#profile">
                            <i className="fab fa-pinterest"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#profile">
                            <i className="fab fa-medium"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#profile">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="widget rounded">
                    <div className="widget-header text-center">
                      <h3 className="widget-title">Popular Posts</h3>
                      <img
                        src="assests/images/wave.svg"
                        className="wave"
                        alt="wave"
                      />
                    </div>
                    <div className="widget-content">
                      <div className="post post-list-sm circle">
                        <div className="thumb circle">
                          <span className="number">1</span>
                          <div>
                            <Link to="/blogsingle">
                              <div className="inner">
                                <img
                                  src="assests/images/posts/tabs-1.jpg"
                                  alt="post-title"
                                />
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="details clearfix">
                          <h6 className="post-title my-0">
                            <div>
                              <Link to="/blogsingle">
                                3 Easy Ways To Make Your iPhone Faster
                              </Link>
                            </div>
                          </h6>
                          <ul className="meta list-inline mt-1 mb-0">
                            <li className="list-inline-item">29 March 2021</li>
                          </ul>
                        </div>
                      </div>

                      <div className="post post-list-sm circle">
                        <div className="thumb circle">
                          <span className="number">2</span>
                          <div>
                            <Link to="/blogsingle">
                              <div className="inner">
                                <img
                                  src="assests/images/posts/tabs-2.jpg"
                                  alt="post-title"
                                />
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="details clearfix">
                          <h6 className="post-title my-0">
                            <div>
                              <Link to="/blogsingle">
                                An Incredibly Easy Method That Works For All
                              </Link>
                            </div>
                          </h6>
                          <ul className="meta list-inline mt-1 mb-0">
                            <li className="list-inline-item">29 March 2021</li>
                          </ul>
                        </div>
                      </div>

                      <div className="post post-list-sm circle">
                        <div className="thumb circle">
                          <span className="number">3</span>
                          <div>
                            <Link to="/blogsingle">
                              <div className="inner">
                                <img
                                  src="assests/images/posts/tabs-3.jpg"
                                  alt="post-title"
                                />
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="details clearfix">
                          <h6 className="post-title my-0">
                            <div>
                              <Link to="/blogsingle">
                                10 Ways To Immediately Start Selling Furniture
                              </Link>
                            </div>
                          </h6>
                          <ul className="meta list-inline mt-1 mb-0">
                            <li className="list-inline-item">29 March 2021</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="widget rounded">
                    <div className="widget-header text-center">
                      <h3 className="widget-title">Explore Topics</h3>
                      <img
                        src="assests/images/wave.svg"
                        className="wave"
                        alt="wave"
                      />
                    </div>
                    <div className="widget-content">
                      <ul className="list">
                        <li>
                          <a href="#profile">Lifestyle</a>
                          <span>(5)</span>
                        </li>
                        <li>
                          <a href="#profile">Inspiration</a>
                          <span>(2)</span>
                        </li>
                        <li>
                          <a href="#profile">Fashion</a>
                          <span>(4)</span>
                        </li>
                        <li>
                          <a href="#profile">Politic</a>
                          <span>(1)</span>
                        </li>
                        <li>
                          <a href="#profile">Trending</a>
                          <span>(7)</span>
                        </li>
                        <li>
                          <a href="#profile">Culture</a>
                          <span>(3)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="widget rounded">
                    <div className="widget-header text-center">
                      <h3 className="widget-title">Newsletter</h3>
                      <img
                        src="assests/images/wave.svg"
                        className="wave"
                        alt="wave"
                      />
                    </div>
                    <div className="widget-content">
                      <span className="newsletter-headline text-center mb-3">
                        Join 70,000 subscribers!
                      </span>
                      <form>
                        <div className="mb-2">
                          <input
                            className="form-control w-100 text-center"
                            placeholder="Email address…"
                            type="email"
                          />
                        </div>
                        <button
                          className="btn btn-default btn-full"
                          type="submit"
                        >
                          Sign Up
                        </button>
                      </form>
                      <span className="newsletter-privacy text-center mt-3">
                        By signing up, you agree to our{" "}
                        <a href="#profile">Privacy Policy</a>
                      </span>
                    </div>
                  </div>

                  <div className="widget rounded">
                    <div className="widget-header text-center">
                      <h3 className="widget-title">Celebration</h3>
                      <img
                        src="assests/images/wave.svg"
                        className="wave"
                        alt="wave"
                      />
                    </div>
                    <div className="widget-content">
                      <div className="post-carousel-widget">
                        <div className="post post-carousel">
                          <div className="thumb rounded">
                            <div className="category-badge position-absolute">
                              <Link to="/category">How to</Link>
                            </div>
                            <div>
                              <Link to="/blogsingle">
                                <div className="inner">
                                  <img
                                    src="assests/images/widgets/widget-carousel-1.jpg"
                                    alt="post-title"
                                  />
                                </div>
                              </Link>
                            </div>
                          </div>
                          <h5 className="post-title mb-0 mt-4">
                            <div>
                              <Link to="/blogsingle">
                                5 Easy Ways You Can Turn Future Into Success
                              </Link>
                            </div>
                          </h5>
                          <ul className="meta list-inline mt-2 mb-0">
                            <li className="list-inline-item">
                              <a href="#profile">Katen Doe</a>
                            </li>
                            <li className="list-inline-item">29 March 2021</li>
                          </ul>
                        </div>

                        <div className="post post-carousel">
                          <div className="thumb rounded">
                            <div className="category-badge position-absolute">
                              <Link to="/category">Trending</Link>
                            </div>
                            <div>
                              <Link to="/blogsingle">
                                <div className="inner">
                                  <img
                                    src="assests/images/widgets/widget-carousel-2.jpg"
                                    alt="post-title"
                                  />
                                </div>
                              </Link>
                            </div>
                          </div>
                          <h5 className="post-title mb-0 mt-4">
                            <div>
                              <Link to="/blogsingle">
                                Master The Art Of Nature With These 7 Tips
                              </Link>
                            </div>
                          </h5>
                          <ul className="meta list-inline mt-2 mb-0">
                            <li className="list-inline-item">
                              <a href="#profile">Katen Doe</a>
                            </li>
                            <li className="list-inline-item">29 March 2021</li>
                          </ul>
                        </div>

                        <div className="post post-carousel">
                          <div className="thumb rounded">
                            <div className="category-badge position-absolute">
                              <Link to="/category">How to</Link>
                            </div>
                            <div>
                              <Link to="/blogsingle">
                                <div className="inner">
                                  <img
                                    src="assests/images/widgets/widget-carousel-1.jpg"
                                    alt="post-title"
                                  />
                                </div>
                              </Link>
                            </div>
                          </div>
                          <h5 className="post-title mb-0 mt-4">
                            <div>
                              <Link to="/blogsingle">
                                5 Easy Ways You Can Turn Future Into Success
                              </Link>
                            </div>
                          </h5>
                          <ul className="meta list-inline mt-2 mb-0">
                            <li className="list-inline-item">
                              <a href="#profile">Katen Doe</a>
                            </li>
                            <li className="list-inline-item">29 March 2021</li>
                          </ul>
                        </div>
                      </div>

                      <div className="slick-arrows-bot">
                        <button
                          type="button"
                          data-role="none"
                          className="carousel-botNav-prev slick-custom-buttons"
                          aria-label="Previous"
                        >
                          <i className="icon-arrow-left"></i>
                        </button>
                        <button
                          type="button"
                          data-role="none"
                          className="carousel-botNav-next slick-custom-buttons"
                          aria-label="Next"
                        >
                          <i className="icon-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="widget no-container rounded text-md-center">
                    <span className="ads-title">- Sponsored Ad -</span>
                    <a href="#profile" className="widget-ads">
                      <img
                        src="assests/images/ads/ad-360.png"
                        alt="Advertisement"
                      />
                    </a>
                  </div>

                  <div className="widget rounded">
                    <div className="widget-header text-center">
                      <h3 className="widget-title">Tag Clouds</h3>
                      <img
                        src="assests/images/wave.svg"
                        className="wave"
                        alt="wave"
                      />
                    </div>
                    <div className="widget-content">
                      <a href="#profile" className="tag">
                        #Trending
                      </a>
                      <a href="#profile" className="tag">
                        #Video
                      </a>
                      <a href="#profile" className="tag">
                        #Featured
                      </a>
                      <a href="#profile" className="tag">
                        #Gallery
                      </a>
                      <a href="#profile" className="tag">
                        #Celebrities
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <InstagramFeed />

        <Footer />
      </div>
      <SearchPopupArea />

      <CanvasMenu />
    </>
  );
};

export default Category;
