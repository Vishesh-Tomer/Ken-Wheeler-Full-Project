import React from "react";
import Navbar from "./Layouts/Navbar";
import InstagramFeed from "./Layouts/InstagramFeed";
import Footer from "./Layouts/Footer";
import CanvasMenu from "./Layouts/CanvasMenu";
import SearchPopupArea from "./Layouts/SearchPopupArea";
import { Link } from "react-router-dom";

const BlogSingleAlt = () => {
  return (
    <>
      <div className="site-wrapper">
        <div className="main-overlay"></div>

        <Navbar />

        <section
          className="single-cover data-bg-image"
          data-bg-image="assests/images/posts/single-cover.jpg"
        >
          <div className="container-xl">
            <div className="cover-content post">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#profile">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#profile">Inspiration</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    3 Easy Ways To Make Your iPhone Faster
                  </li>
                </ol>
              </nav>

              <div className="post-header">
                <h1 className="title mt-0 mb-3">
                  3 Easy Ways To Make Your iPhone Faster
                </h1>
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
                  <li className="list-inline-item">
                    <a href="#profile">Trending</a>
                  </li>
                  <li className="list-inline-item">29 March 2021</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="main-content">
          <div className="container-xl">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="post post-single">
                  <div className="post-content clearfix">
                    <p>
                      The European languages are members of the same family.
                      Their separate existence is a myth. For science, music,
                      sport, etc, Europe uses the same{" "}
                      <a href="#profile">vocabulary</a>. The languages only
                      differ in their grammar, their pronunciation and their
                      most common words.
                    </p>

                    <p>
                      Everyone realizes why a new common language would be
                      desirable: one could refuse to pay expensive translators.
                      To achieve this, it <mark>would be</mark> necessary to
                      have uniform grammar, pronunciation and more common words.
                    </p>

                    <figure className="figure">
                      <img
                        src="assests/images/posts/post-lg-2.jpg"
                        className="figure-img img-fluid rounded"
                        alt="..."
                      />
                      <figcaption className="figure-caption text-center">
                        A caption for the above image.
                      </figcaption>
                    </figure>

                    <p>
                      The languages only differ in their grammar, their
                      pronunciation and their most common words. Everyone
                      realizes why a new common language would be desirable.
                    </p>

                    <img
                      src="assests/images/posts/single-sm-1.jpg"
                      className="rounded alignleft"
                      alt="..."
                    />
                    <p>
                      One could refuse to pay expensive translators. To achieve
                      this, it would be necessary to have uniform grammar,
                      pronunciation and more common words.
                    </p>

                    <p>
                      If several languages coalesce, the grammar of the
                      resulting language is more simple and regular than that of
                      the individual languages. The new common language will be
                      more simple and regular than the existing{" "}
                      <a href="#profile">European languages</a>. It will be as
                      simple as Occidental; in fact, it will be Occidental.
                    </p>

                    <p>
                      A collection of textile samples lay spread out on the
                      table - Samsa was a travelling salesman - and above it
                      there hung a picture that he had recently cut out of an
                      illustrated magazine and housed in a nice, gilded frame.
                    </p>

                    <h4>I should be incapable of drawing a single stroke</h4>

                    <ul>
                      <li>How about if I sleep a little bit</li>
                      <li>A collection of textile samples lay spread out</li>
                      <li>His many legs, pitifully thin compared with</li>
                      <li>He lay on his armour-like back</li>
                      <li> Gregor Samsa woke from troubled dreams</li>
                    </ul>

                    <p>
                      To an English person, it will seem like simplified{" "}
                      <a href="#profile">English</a>, as a skeptical Cambridge
                      friend of mine told me what Occidental is. The European
                      languages are members of the same family. Their separate
                      existence is a myth. For science, music, sport, etc,
                      Europe uses the same vocabulary.
                    </p>
                  </div>

                  <div className="post-bottom">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-6 col-12 text-center text-md-start">
                        <a href="#profile" className="tag">
                          #Trending
                        </a>
                        <a href="#profile" className="tag">
                          #Video
                        </a>
                        <a href="#profile" className="tag">
                          #Featured
                        </a>
                      </div>
                      <div className="col-md-6 col-12">
                        <ul className="social-icons list-unstyled list-inline mb-0 float-md-end">
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
                    </div>
                  </div>
                </div>

                <div className="spacer" data-height="50"></div>

                <div className="about-author padding-30 rounded">
                  <div className="thumb">
                    <img
                      src="assests/images/other/avatar-about.png"
                      alt="Katen Doe"
                    />
                  </div>
                  <div className="details">
                    <h4 className="name">
                      <a href="#profile">Katen Doe</a>
                    </h4>
                    <p>
                      Hello, I’m a content writer who is fascinated by content
                      fashion, celebrity and lifestyle. She helps clients bring
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

                <div className="spacer" data-height="50"></div>

                <div className="section-header">
                  <h3 className="section-title">Comments (3)</h3>
                  <img
                    src="assests/images/wave.svg"
                    className="wave"
                    alt="wave"
                  />
                </div>

                <div className="comments bordered padding-30 rounded">
                  <ul className="comments">
                    <li className="comment rounded">
                      <div className="thumb">
                        <img
                          src="assests/images/other/comment-1.png"
                          alt="John Doe"
                        />
                      </div>
                      <div className="details">
                        <h4 className="name">
                          <a href="#profile">John Doe</a>
                        </h4>
                        <span className="date">Jan 08, 2021 14:41 pm</span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Etiam vitae odio ut tortor fringilla cursus sed
                          quis odio.
                        </p>
                        <a href="#profile" className="btn btn-default btn-sm">
                          Reply
                        </a>
                      </div>
                    </li>

                    <li className="comment child rounded">
                      <div className="thumb">
                        <img
                          src="assests/images/other/comment-2.png"
                          alt="John Doe"
                        />
                      </div>
                      <div className="details">
                        <h4 className="name">
                          <a href="#profile">Helen Doe</a>
                        </h4>
                        <span className="date">Jan 08, 2021 14:41 pm</span>
                        <p>
                          Maecenas tempus, tellus eget condimentum rhoncus, sem
                          quam semper libero, sit amet adipiscing sem neque sed
                          ipsum.
                        </p>
                        <a href="#profile" className="btn btn-default btn-sm">
                          Reply
                        </a>
                      </div>
                    </li>

                    <li className="comment rounded">
                      <div className="thumb">
                        <img
                          src="assests/images/other/comment-3.png"
                          alt="John Doe"
                        />
                      </div>
                      <div className="details">
                        <h4 className="name">
                          <a href="#profile">Anna Doe</a>
                        </h4>
                        <span className="date">Jan 08, 2021 14:41 pm</span>
                        <p>
                          Cras ultricies mi eu turpis hendrerit fringilla.
                          Vestibulum ante ipsum primis in faucibus orci luctus
                          et ultrices posuere cubilia.
                        </p>
                        <a href="#profile" className="btn btn-default btn-sm">
                          Reply
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="spacer" data-height="50"></div>

                <div className="section-header">
                  <h3 className="section-title">Leave Comment</h3>
                  <img
                    src="assests/images/wave.svg"
                    className="wave"
                    alt="wave"
                  />
                </div>

                <div className="comment-form rounded bordered padding-30">
                  <form
                    id="comment-form"
                    className="comment-form"
                    method="post"
                  >
                    <div className="messages"></div>

                    <div className="row">
                      <div className="column col-md-12">
                        <div className="form-group">
                          <textarea
                            name="InputComment"
                            id="InputComment"
                            className="form-control"
                            rows="4"
                            placeholder="Your comment here..."
                            required="required"
                          ></textarea>
                        </div>
                      </div>

                      <div className="column col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="InputEmail"
                            name="InputEmail"
                            placeholder="Email address"
                            required="required"
                          />
                        </div>
                      </div>

                      <div className="column col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="InputWeb"
                            id="InputWeb"
                            placeholder="Website"
                            required="required"
                          />
                        </div>
                      </div>

                      <div className="column col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="InputName"
                            name="InputName"
                            placeholder="Your name"
                            required="required"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      name="submit"
                      id="submit"
                      value="Submit"
                      className="btn btn-default"
                    >
                      Submit
                    </button>
                  </form>
                </div>
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

export default BlogSingleAlt;
