import React from "react";
// import Loader from "./Layouts/Loader";
import Navbar from "./Layouts/Navbar";
import InstagramFeed from "./Layouts/InstagramFeed";
import Footer from "./Layouts/Footer";
import CanvasMenu from "./Layouts/CanvasMenu";
import SearchPopupArea from "./Layouts/SearchPopupArea";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="site-wrapper">
        <div className="main-overlay"></div>

        <Navbar />

        <section className="page-header">
          <div className="container-xl">
            <div className="text-center">
              <h1 className="mt-0 mb-2">About</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0">
                  <li className="breadcrumb-item">
                    <a href="#profile">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About
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
                <div className="page-content bordered rounded padding-30">
                  <img
                    src="assests/images/other/about.jpg"
                    alt="Katen Doe"
                    className="rounded mb-4"
                  />

                  <p>
                    Hello, I’m a content writer who is fascinated by content
                    fashion, celebrity and lifestyle. She helps clients bring
                    the right content to the right people.
                  </p>

                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>

                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar.
                  </p>

                  <p>
                    The Big Oxmox advised her not to do so, because there were
                    thousands of bad Commas, wild Question Marks and devious
                    Semikoli, but the Little Blind Text didn’t listen. She
                    packed her seven versalia, put her initial into the belt and
                    made herself on the way.
                  </p>

                  <hr className="my-4" />
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
              <div className="col-lg-4">
                <div className="sidebar">
                  <div className="widget rounded">
                    <div
                      className="widget-about data-bg-image text-center"
                      data-bg-image="assests/images/map-bg.png"
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
                            <a
                              href="category.html"
                              className="category-badge position-absolute"
                            >
                              Trending
                            </a>
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
                            <a
                              href="category.html"
                              className="category-badge position-absolute"
                            >
                              How to
                            </a>
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

export default About;
