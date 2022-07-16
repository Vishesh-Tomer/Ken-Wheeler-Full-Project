import React from "react";
import InstagramFeed from "./Layouts/InstagramFeed";
import Footer from "./Layouts/Footer";
import CanvasMenu from "./Layouts/CanvasMenu";
import SearchPopupArea from "./Layouts/SearchPopupArea";
import { Link } from "react-router-dom";

const Minimal = () => {
  return (
    <>
      <div className="site-wrapper">
        <div className="main-overlay"></div>

        <div className="container-xl">
          <header className="header-minimal">
            <div className="row align-items-center">
              <div className="col-4">
                <button className="burger-menu icon-button">
                  <span className="burger-icon"></span>
                </button>
              </div>

              <div className="col-4 text-center">
                <div className="navbar-brand">
                  <Link to="/minimal">
                    Minimal
                    <img src="assests/images/logo.svg" alt="logo" />
                  </Link>
                </div>
              </div>

              <div className="col-4">
                <button className="search icon-button float-end">
                  <i className="icon-magnifier"></i>
                </button>
              </div>
            </div>
          </header>
        </div>

        <section className="main-content-lg">
          <div className="container-minimal">
            <div className="post post-xl">
              <div className="post-top">
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
                  <li className="list-inline-item">
                    <i className="icon-bubble"></i> (0)
                  </li>
                </ul>
                <h5 className="post-title mb-0 mt-4">
                  <div>
                    <Link to="/blogsingle">
                      How To Become Better With Building In 1 Month
                    </Link>
                  </div>
                </h5>
              </div>

              <div className="thumb rounded">
                <div className="category-badge lg position-absolute">
                  <Link to="/category">Lifestyle</Link>
                </div>
                <span className="post-format">
                  <i className="icon-picture"></i>
                </span>
                <div>
                  <Link to="/blogsingle">
                    <div className="inner">
                      <img
                        src="assests/images/posts/post-xl-1.jpg"
                        alt="post-title"
                      />
                    </div>
                  </Link>
                </div>
              </div>

              <div className="details">
                <p className="excerpt mb-0">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
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
                <div className="float-end d-none d-md-block">
                  <a href="blog-single.html" className="more-link">
                    Continue reading<i className="icon-arrow-right"></i>
                  </a>
                </div>
                <div className="more-button d-block d-md-none float-end">
                  <div>
                    <Link to="/blogsingle">
                      <span className="icon-options"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="post post-xl">
              <div className="post-top">
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
                  <li className="list-inline-item">
                    <i className="icon-bubble"></i> (0)
                  </li>
                </ul>
                <h5 className="post-title mb-0 mt-4">
                  <div>
                    <Link to="/blogsingle">
                      Most Important Thing You Need To Know About Light Lamp
                    </Link>
                  </div>
                </h5>
              </div>

              <div className="thumb rounded">
                <div className="category-badge lg position-absolute">
                  <Link to="/category">Inspiration</Link>
                </div>
                <div>
                  <Link to="/blogsingle">
                    <div className="inner">
                      <img
                        src="assests/images/posts/post-xl-2.jpg"
                        alt="post-title"
                      />
                    </div>
                  </Link>
                </div>
              </div>

              <div className="details">
                <p className="excerpt mb-0">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
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
                <div className="float-end d-none d-md-block">
                  <a href="blog-single.html" className="more-link">
                    Continue reading<i className="icon-arrow-right"></i>
                  </a>
                </div>
                <div className="more-button d-block d-md-none float-end">
                  <div>
                    <Link to="/blogsingle">
                      <span className="icon-options"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="post post-xl">
              <div className="post-top">
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
                  <li className="list-inline-item">
                    <i className="icon-bubble"></i> (0)
                  </li>
                </ul>
                <h5 className="post-title mb-0 mt-4">
                  <div>
                    <Link to="/blogsingle">
                      The Secrets To Finding Class Tools For Your Dress
                    </Link>
                  </div>
                </h5>
              </div>

              <div className="thumb rounded">
                <div className="category-badge lg position-absolute">
                  <Link to="/category">Culture</Link>
                </div>
                <span className="post-format">
                  <i className="icon-camrecorder"></i>
                </span>
                <div>
                  <Link to="/blogsingle">
                    <div className="inner">
                      <img
                        src="assests/images/posts/post-xl-3.jpg"
                        alt="post-title"
                      />
                    </div>
                  </Link>
                </div>
              </div>

              <div className="details">
                <p className="excerpt mb-0">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
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
                <div className="float-end d-none d-md-block">
                  <a href="blog-single.html" className="more-link">
                    Continue reading<i className="icon-arrow-right"></i>
                  </a>
                </div>
                <div className="more-button d-block d-md-none float-end">
                  <div>
                    <Link to="/blogsingle">
                      <span className="icon-options"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="post post-xl">
              <div className="post-top">
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
                  <li className="list-inline-item">
                    <i className="icon-bubble"></i> (0)
                  </li>
                </ul>
                <h5 className="post-title mb-0 mt-4">
                  <div>
                    <Link to="/blogsingle">
                      Wondering How To Make Your Hair Style Rock?
                    </Link>
                  </div>
                </h5>
              </div>

              <div className="thumb rounded">
                <div className="category-badge lg position-absolute">
                  <Link to="/category">Trending</Link>
                </div>
                <div>
                  <Link to="/blogsingle">
                    <div className="inner">
                      <img
                        src="assests/images/posts/post-xl-4.jpg"
                        alt="post-title"
                      />
                    </div>
                  </Link>
                </div>
              </div>

              <div className="details">
                <p className="excerpt mb-0">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
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
                <div className="float-end d-none d-md-block">
                  <a href="blog-single.html" className="more-link">
                    Continue reading<i className="icon-arrow-right"></i>
                  </a>
                </div>
                <div className="more-button d-block d-md-none float-end">
                  <div>
                    <Link to="/blogsingle">
                      <span className="icon-options"></span>
                    </Link>
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
        </section>

        <InstagramFeed />

        <Footer />
      </div>

      <SearchPopupArea />

      <CanvasMenu />
    </>
  );
};

export default Minimal;
