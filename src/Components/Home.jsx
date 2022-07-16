import React, { useState, useEffect } from "react";
import axios from "axios";
import Axios from "axios";
import Loader from "./Layouts/Loader";
import Navbar from "./Layouts/Navbar";
import SearchPopupArea from "./Layouts/SearchPopupArea";
import CanvasMenu from "./Layouts/CanvasMenu";
import InstagramFeed from "./Layouts/InstagramFeed";
import Footer from "./Layouts/Footer";
import { Link } from "react-router-dom";

const useScript = (src) => {
  useEffect(() => {
    const tag = document.createElement("script");
    tag.async = true;
    tag.src = src;
    document.body.appendChild(tag);

    return () => {
      document.body.removeChild(tag);
    };
  }, [src]);
};

const Home = () => {
  useScript("./assests/js/jquery.min.js");
  useScript("./assests/js/popper.min.js");
  useScript("./assests/js/bootstrap.min.js");
  useScript("./assests/js/slick.min.js");
  useScript("./assests/js/jquery.sticky-sidebar.min.js");
  useScript("./assests/js/custom.js");

  // const [Heroheader, setHeroheader] = useState([]);
  const [Post, setPost] = useState([]);
  const [Loading, setIsLoading] = useState(false);
  const [Contact, setContact] = useState({
    email: "",
  });

  useEffect(() => {
    // loadUsers();
    loadUsers1();
  }, []);



  const loadUsers1 = async () => {
    setIsLoading(true);
    const result = await axios.get(
      `http://localhost:1337/api/posts/?populate=*`
    );
    setIsLoading(false);
    setPost(result.data.data);
  };

  const url = "http://localhost:1337/api/contacts";

  const submit = (e) => {
    e.preventDefault();

    const data = {
      email: Contact.email,
    };

    // console.log(data);
    Axios.post(url, {
      data,
    }).then((res) => {
      // console.log(res.data);
    });
  };

  function handle(e) {
    const newdata = { ...Contact };
    newdata[e.target.id] = e.target.value;
    setContact(newdata);
    //  console.log(newdata);
  }

  return (
    <>
      {Loading && <Loader />}

      <div className="site-wrapper">
        <div className="main-overlay"></div>
        <Navbar />

        <section id="hero">
          <div className="container-xl">
            <div className="row gy-4">
              {Post.slice(4, 5).map((Post1) => (
                <div className="col-lg-8">
                  <div className="post featured-post-lg">
                    <div className="details clearfix">
                      <div className="category-badge">
                        <Link to="/category">
                          {Post1.attributes?.categories?.data[0].attributes.title}
                        </Link>
                      </div>
                      <h2 className="post-title">
                        <div>
                          <Link to="/blogsingle">
                            {Post1.attributes?.title}
                          </Link>
                        </div>
                      </h2>
                      <ul className="meta list-inline mb-0">
                        <li className="list-inline-item">
                          <a href="#profile">{Post1.attributes?.author}</a>
                        </li>
                        <li className="list-inline-item">
                          {Post1.attributes?.date}
                        </li>
                      </ul>
                    </div>
                    <div>
                      <Link to="/blogsingle">
                        <div className="thumb rounded">
                          <div
                            className="inner data-bg-image"
                            data-bg-image={
                              "http://localhost:1337" +
                              Post1.attributes?.image?.data[1]?.attributes?.url
                            }
                          ></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-lg-4">
                <div className="post-tabs rounded bordered">
                  <ul
                    className="nav nav-tabs nav-pills nav-fill"
                    id="postsTab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        aria-controls="popular"
                        aria-selected="true"
                        className="nav-link active"
                        data-bs-target="#popular"
                        data-bs-toggle="tab"
                        id="popular-tab"
                        role="tab"
                        type="button"
                      >
                        Popular
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        aria-controls="recent"
                        aria-selected="false"
                        className="nav-link"
                        data-bs-target="#recent"
                        data-bs-toggle="tab"
                        id="recent-tab"
                        role="tab"
                        type="button"
                      >
                        Recent
                      </button>
                    </li>
                  </ul>

                  <div className="tab-content" id="postsTabContent">
                    <div className="lds-dual-ring"></div>

                    <div
                      aria-labelledby="popular-tab"
                      className="tab-pane fade show active"
                      id="popular"
                      role="tabpanel"
                    >
                      {Post.slice(0, 4).map((Post1) => (
                        <div className="post post-list-sm circle">
                          <div className="thumb circle">
                            <div>
                              <Link to="/blogsingle">
                                <div className="inner">
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      Post1.attributes?.image?.data[0]
                                        ?.attributes?.url
                                    }
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
                                  {Post1.attributes?.title}
                                </Link>
                              </div>
                            </h6>
                            <ul className="meta list-inline mt-1 mb-0">
                              <li className="list-inline-item">
                                {Post1.attributes?.date}
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div
                      aria-labelledby="recent-tab"
                      className="tab-pane fade"
                      id="recent"
                      role="tabpanel"
                    >
                      {Post.slice(1, 2).map((Post1) => (
                        <div className="post post-list-sm circle">
                          <div className="thumb circle">
                            <div>
                              <Link to="/blogsingle">
                                <div className="inner">
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      Post1.attributes?.image?.data[0]
                                        ?.attributes?.url
                                    }
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
                                  {Post1.attributes?.title}
                                </Link>
                              </div>
                            </h6>
                            <ul className="meta list-inline mt-1 mb-0">
                              <li className="list-inline-item">
                                {Post1.attributes?.date}
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                      {Post.slice(0, 1).map((Post1) => (
                        <div className="post post-list-sm circle">
                          <div className="thumb circle">
                            <div>
                              <Link to="/blogsingle">
                                <div className="inner">
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      Post1.attributes?.image?.data[0]
                                        ?.attributes?.url
                                    }
                                    alt="post-title"
                                  />
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="details clearfix">
                            <h6 className="post-title my-0">
                              <div>
                                <Link to="/blogsingle"></Link>{" "}
                                {Post1.attributes?.title}
                              </div>
                            </h6>
                            <ul className="meta list-inline mt-1 mb-0">
                              <li className="list-inline-item">
                                {Post1.attributes?.date}
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                      {Post.slice(3, 4).map((Post1) => (
                        <div className="post post-list-sm circle">
                          <div className="thumb circle">
                            <div>
                              <Link to="/blogsingle"></Link>
                              <div className="inner">
                                <img
                                  src={
                                    "http://localhost:1337" +
                                    Post1.attributes?.image?.data[0]?.attributes
                                      ?.url
                                  }
                                  alt="post-title"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="details clearfix">
                            <h6 className="post-title my-0">
                              <div>
                                <Link to="/blogsingle"></Link>
                                {Post1.attributes?.title}
                              </div>
                            </h6>
                            <ul className="meta list-inline mt-1 mb-0">
                              <li className="list-inline-item">
                                {Post1.attributes?.date}
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                      {Post.slice(2, 3).map((Post1) => (
                        <div className="post post-list-sm circle">
                          <div className="thumb circle">
                            <div>
                              <Link to="/blogsingle"></Link>
                              <div className="inner">
                                <img
                                  src={
                                    "http://localhost:1337" +
                                    Post1.attributes?.image?.data[0]?.attributes
                                      ?.url
                                  }
                                  alt="post-title"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="details clearfix">
                            <h6 className="post-title my-0">
                              <div>
                                <Link to="/blogsingle"></Link>
                                {Post1.attributes?.title}
                              </div>
                            </h6>
                            <ul className="meta list-inline mt-1 mb-0">
                              <li className="list-inline-item">
                                {Post1.attributes?.date}
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="main-content">
          <div className="container-xl">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="section-header">
                  <h3 className="section-title">Editor’s Pick</h3>
                  <img
                    src="assests/images/wave.svg"
                    className="wave"
                    alt="wave"
                  />
                </div>

                <div className="padding-30 rounded bordered">
                  <div className="row gy-5">
                    <div className="col-sm-6">
                      {Post.slice(3, 4).map((Post1) => (
                        <div className="post">
                          <div className="thumb rounded">
                            <div className="category-badge position-absolute">
                              <Link to="/category">
                                {
                                  Post1.attributes?.categories?.attributes
                                    ?.title
                                }
                              </Link>
                            </div>
                            <span className="post-format">
                              <i className="icon-picture"></i>
                            </span>
                            <div>
                              <Link to="/blogsingle">
                                <div className="inner">
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      Post1.attributes?.image?.data[2]
                                        ?.attributes?.url
                                    }
                                    alt="post-title"
                                  />
                                </div>
                              </Link>
                            </div>
                          </div>
                          <ul className="meta list-inline mt-4 mb-0">
                            <li className="list-inline-item">
                              <a href="#profile">
                                <img
                                  src={
                                    "http://localhost:1337" +
                                    Post1.attributes?.authorimage?.data[0]
                                      ?.attributes?.url
                                  }
                                  className="author"
                                  alt="author"
                                />
                                {Post1.attributes?.author}
                              </a>
                            </li>
                            <li className="list-inline-item">
                              {Post1.attributes?.date}
                            </li>
                          </ul>
                          <h5 className="post-title mb-3 mt-3">
                            <div>
                              <Link to="/blogsingle"></Link>
                              {Post1.attributes?.title}
                            </div>
                          </h5>
                          <p className="excerpt mb-0">
                            {Post1.attributes?.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="col-sm-6">
                      {Post.slice(0, 1).map((Post1) => (
                        <div className="post post-list-sm square">
                          <div className="thumb rounded">
                            <div>
                              <Link to="/blogsingle"></Link>
                              <div className="inner">
                                <img
                                  src={
                                    "http://localhost:1337" +
                                    Post1.attributes?.image?.data[0]?.attributes
                                      ?.url
                                  }
                                  alt="post-title"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="details clearfix">
                            <h6 className="post-title my-0">
                              <div>
                                <Link to="/blogsingle"></Link>
                                {Post1.attributes?.title}
                              </div>
                            </h6>
                            <ul className="meta list-inline mt-1 mb-0">
                              <li className="list-inline-item">
                                {Post1.attributes?.date}
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                      {Post.slice(1, 2).map((Post1) => (
                        <div className="post post-list-sm square">
                          <div className="thumb rounded">
                            <div>
                              <Link to="/blogsingle"></Link>
                              <div className="inner">
                                <img
                                  src={
                                    "http://localhost:1337" +
                                    Post1.attributes?.image?.data[1]?.attributes
                                      ?.url
                                  }
                                  alt="post-title"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="details clearfix">
                            <h6 className="post-title my-0">
                              <div>
                                <Link to="/blogsingle"></Link>
                                {Post1.attributes?.title}
                              </div>
                            </h6>
                            <ul className="meta list-inline mt-1 mb-0">
                              <li className="list-inline-item">
                                {Post1.attributes?.date}
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                      {Post.slice(2, 3).map((Post1) => (
                        <div className="post post-list-sm square">
                          <div className="thumb rounded">
                            <div>
                              <Link to="/blogsingle"></Link>
                              <div className="inner">
                                <img
                                  src={
                                    "http://localhost:1337" +
                                    Post1.attributes?.image?.data[0]?.attributes
                                      ?.url
                                  }
                                  alt="post-title"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="details clearfix">
                            <h6 className="post-title my-0">
                              <div>
                                <Link to="/blogsingle"></Link>
                                {Post1.attributes?.title}
                              </div>
                            </h6>
                            <ul className="meta list-inline mt-1 mb-0">
                              <li className="list-inline-item">
                                {Post1.attributes?.date}
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                      {Post.slice(3, 4).map((Post1) => (
                        <div className="post post-list-sm square">
                          <div className="thumb rounded">
                            <div>
                              <Link to="/blogsingle"></Link>
                              <div className="inner">
                                <img
                                  src={
                                    "http://localhost:1337" +
                                    Post1.attributes?.image?.data[1]?.attributes
                                      ?.url
                                  }
                                  alt="post-title"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="details clearfix">
                            <h6 className="post-title my-0">
                              <div>
                                <Link to="/blogsingle"></Link>
                                {Post1.attributes?.title}
                              </div>
                            </h6>
                            <ul className="meta list-inline mt-1 mb-0">
                              <li className="list-inline-item">
                                {Post1.attributes?.date}
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="spacer" data-height="50"></div>

                <div className="ads-horizontal text-md-center">
                  <span className="ads-title">- Sponsored Ad -</span>
                  <a href="#profile">
                    <img
                      src="assests/images/ads/ad-750.png"
                      alt="Advertisement"
                    />
                  </a>
                </div>

                <div className="spacer" data-height="50"></div>

                <div className="section-header">
                  <h3 className="section-title">Trending</h3>
                  <img
                    src="assests/images/wave.svg"
                    className="wave"
                    alt="wave"
                  />
                </div>

                <div className="padding-30 rounded bordered">
                  <div className="row gy-5">
                    <div className="col-sm-6">
                      {Post.slice(5, 6).map((Post1) => (
                        <div className="post">
                          <div className="thumb rounded">
                            <div className="category-badge position-absolute">
                              <Link to="/category">Culture</Link>
                            </div>
                            <span className="post-format">
                              <i className="icon-picture"></i>
                            </span>
                            <div>
                              <Link to="/blogsingle">
                                <div className="inner">
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      Post1.attributes?.image?.data[0]
                                        ?.attributes?.url
                                    }
                                    alt="post-title"
                                  />
                                </div>
                              </Link>
                            </div>
                          </div>
                          <ul className="meta list-inline mt-4 mb-0">
                            <li className="list-inline-item">
                              <a href="#profile">
                                <img
                                  src={
                                    "http://localhost:1337" +
                                    Post1.attributes?.authorimage?.data[0]
                                      ?.attributes?.url
                                  }
                                  className="author"
                                  alt="author"
                                />
                                {Post1.attributes?.author}
                              </a>
                            </li>
                            <li className="list-inline-item">
                              {Post1.attributes?.date}
                            </li>
                          </ul>
                          <h5 className="post-title mb-3 mt-3">
                            <div>
                              <Link to="/blogsingle">
                                {Post1.attributes?.title}
                              </Link>
                            </div>
                          </h5>
                          <p className="excerpt mb-0">
                            {Post1.attributes?.description}
                          </p>
                        </div>
                      ))}

                      {Post.slice(0, 1).map((Post1) => (
                        <div className="post post-list-sm square before-seperator">
                          <div className="thumb rounded">
                            <div>
                              <Link to="/blogsingle">
                                <div className="inner">
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      Post1.attributes?.image?.data[0]
                                        ?.attributes?.url
                                    }
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
                                  {Post1.attributes?.title}
                                </Link>
                              </div>
                            </h6>
                            <ul className="meta list-inline mt-1 mb-0">
                              <li className="list-inline-item">
                                {Post1.attributes?.date}
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                      {Post.slice(1, 2).map((Post1) => (
                        <div className="post post-list-sm square before-seperator">
                          <div className="thumb rounded">
                            <div>
                              <Link to="/blogsingle">
                                <div className="inner">
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      Post1.attributes?.image?.data[0]
                                        ?.attributes?.url
                                    }
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
                                  {Post1.attributes?.title}
                                </Link>
                              </div>
                            </h6>
                            <ul className="meta list-inline mt-1 mb-0">
                              <li className="list-inline-item">
                                {Post1.attributes?.date}
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="col-sm-6">
                      {Post.slice(4, 5).map((Post1) => (
                        <div className="post">
                          <div className="thumb rounded">
                            <div className="category-badge position-absolute">
                              <Link to="/category">Inspiration</Link>
                            </div>
                            <span className="post-format">
                              <i className="icon-earphones"></i>
                            </span>
                            <div>
                              <Link to="/blogsingle">
                                <div className="inner">
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      Post1.attributes?.image?.data[2]
                                        ?.attributes?.url
                                    }
                                    alt="post-title"
                                  />
                                </div>
                              </Link>
                            </div>
                          </div>
                          <ul className="meta list-inline mt-4 mb-0">
                            <li className="list-inline-item">
                              <a href="#profile">
                                <img
                                  src={
                                    "http://localhost:1337" +
                                    Post1.attributes?.authorimage?.data[0]
                                      ?.attributes?.url
                                  }
                                  className="author"
                                  alt="author"
                                />
                                {Post1.attributes?.author}
                              </a>
                            </li>
                            <li className="list-inline-item">
                              {Post1.attributes?.date}
                            </li>
                          </ul>
                          <h5 className="post-title mb-3 mt-3">
                            <div>
                              <Link to="/blogsingle">
                                {Post1.attributes?.title}
                              </Link>
                            </div>
                          </h5>
                          <p className="excerpt mb-0">
                            {Post1.attributes?.description}
                          </p>
                        </div>
                      ))}
                      {Post.slice(6, 7).map((Post1) => (
                        <div className="post post-list-sm square before-seperator">
                          <div className="thumb rounded">
                            <div>
                              <Link to="/blogsingle">
                                <div className="inner">
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      Post1.attributes?.image?.data[0]
                                        ?.attributes?.url
                                    }
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
                                  {Post1.attributes?.title}
                                </Link>
                              </div>
                            </h6>
                            <ul className="meta list-inline mt-1 mb-0">
                              <li className="list-inline-item">
                                {Post1.attributes?.date}
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                      {Post.slice(7, 8).map((Post1) => (
                        <div className="post post-list-sm square before-seperator">
                          <div className="thumb rounded">
                            <div>
                              <Link to="/blogsingle">
                                <div className="inner">
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      Post1.attributes?.image?.data[0]
                                        ?.attributes?.url
                                    }
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
                                  {Post1.attributes?.title}
                                </Link>
                              </div>
                            </h6>
                            <ul className="meta list-inline mt-1 mb-0">
                              <li className="list-inline-item">
                                {Post1.attributes?.date}
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="spacer" data-height="50"></div>

                <div className="section-header">
                  <h3 className="section-title">Inspiration</h3>
                  <img
                    src="assests/images/wave.svg"
                    className="wave"
                    alt="wave"
                  />
                  <div className="slick-arrows-top">
                    <button
                      type="button"
                      data-role="none"
                      className="carousel-topNav-prev slick-custom-buttons"
                      aria-label="Previous"
                    >
                      <i className="icon-arrow-left"></i>
                    </button>
                    <button
                      type="button"
                      data-role="none"
                      className="carousel-topNav-next slick-custom-buttons"
                      aria-label="Next"
                    >
                      <i className="icon-arrow-right"></i>
                    </button>
                  </div>
                </div>

                <div className="row post-carousel-twoCol post-carousel">
                  {Post.slice(8, 9).map((Post1) => (
                    <div className="post post-over-content col-md-6">
                      <div className="details clearfix">
                        <div className="category-badge">
                          <Link to="/category">Inspiration</Link>
                        </div>
                        <h4 className="post-title">
                          <div>
                            <Link to="/blogsingle">
                              {Post1.attributes?.title}
                            </Link>
                          </div>
                        </h4>
                        <ul className="meta list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="#profile">{Post1.attributes?.author}</a>
                          </li>
                          <li className="list-inline-item">
                            {Post1.attributes?.date}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <Link to="/blogsingle">
                          <div className="thumb rounded">
                            <div className="inner">
                              <img
                                src={
                                  "http://localhost:1337" +
                                  Post1.attributes?.image?.data[0]?.attributes
                                    ?.url
                                }
                                alt="thumb"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}

                  {Post.slice(9, 10).map((Post1) => (
                    <div className="post post-over-content col-md-6">
                      <div className="details clearfix">
                        <div className="category-badge">
                          <Link to="/category">Inspiration</Link>
                        </div>
                        <h4 className="post-title">
                          <div>
                            <Link to="/blogsingle">
                              {Post1.attributes?.title}
                            </Link>
                          </div>
                        </h4>
                        <ul className="meta list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="#profile">{Post1.attributes?.author}</a>
                          </li>
                          <li className="list-inline-item">
                            2{Post1.attributes?.date}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <Link to="/blogsingle">
                          <div className="thumb rounded">
                            <div className="inner">
                              <img
                                src={
                                  "http://localhost:1337" +
                                  Post1.attributes?.image?.data[0]?.attributes
                                    ?.url
                                }
                                alt="thumb"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}

                  {Post.slice(10, 11).map((Post1) => (
                    <div className="post post-over-content col-md-6">
                      <div className="details clearfix">
                        <div className="category-badge">
                          <Link to="/category">Inspiration</Link>
                        </div>
                        <h4 className="post-title">
                          <div>
                            <Link to="/blogsingle">
                              {Post1.attributes?.title}
                            </Link>
                          </div>
                        </h4>
                        <ul className="meta list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="#profile">{Post1.attributes?.author}</a>
                          </li>
                          <li className="list-inline-item">
                            {Post1.attributes?.date}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <Link to="/blogsingle">
                          <div className="thumb rounded">
                            <div className="inner">
                              <img
                                src={
                                  "http://localhost:1337" +
                                  Post1.attributes?.image?.data[0]?.attributes
                                    ?.url
                                }
                                alt="thumb"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="spacer" data-height="50"></div>

                <div className="section-header">
                  <h3 className="section-title">Latest Posts</h3>
                  <img
                    src="assests/images/wave.svg"
                    className="wave"
                    alt="wave"
                  />
                </div>

                <div className="padding-30 rounded bordered">
                  <div className="row">
                    {Post.slice(11, 12).map((Post1) => (
                      <div className="col-md-12 col-sm-6">
                        <div className="post post-list clearfix">
                          <div className="thumb rounded">
                            <span className="post-format-sm">
                              <i className="icon-picture"></i>
                            </span>
                            <div>
                              <Link to="/blogsingle">
                                <div className="inner">
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      Post1.attributes?.image?.data[0]
                                        ?.attributes?.url
                                    }
                                    alt="post-title"
                                  />
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <ul className="meta list-inline mb-3">
                              <li className="list-inline-item">
                                <a href="#profile">
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      Post1.attributes?.authorimage?.data[0]
                                        ?.attributes?.url
                                    }
                                    className="author"
                                    alt="author"
                                  />
                                  {Post1.attributes?.author}
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#profile">Trending</a>
                              </li>
                              <li className="list-inline-item">
                                {Post1.attributes?.date}
                              </li>
                            </ul>
                            <h5 className="post-title">
                              <div>
                                <Link to="/blogsingle">
                                  {Post1.attributes?.title}
                                </Link>
                              </div>
                            </h5>
                            <p className="excerpt mb-0">
                              {Post1.attributes?.description}
                            </p>
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
                    ))}
                    {Post.slice(12, 13).map((Post1) => (
                      <div className="col-md-12 col-sm-6">
                        <div className="post post-list clearfix">
                          <div className="thumb rounded">
                            <div>
                              <Link to="/blogsingle">
                                <div className="inner">
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      Post1.attributes?.image?.data[0]
                                        ?.attributes?.url
                                    }
                                    alt="post-title"
                                  />
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <ul className="meta list-inline mb-3">
                              <li className="list-inline-item">
                                <a href="#profile">
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      Post1.attributes?.authorimage?.data[0]
                                        ?.attributes?.url
                                    }
                                    className="author"
                                    alt="author"
                                  />
                                  {Post1.attributes?.author}
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#profile">Lifestyle</a>
                              </li>
                              <li className="list-inline-item">
                                {Post1.attributes?.date}
                              </li>
                            </ul>
                            <h5 className="post-title">
                              <div>
                                <Link to="/blogsingle">
                                  {Post1.attributes?.title}
                                </Link>
                              </div>
                            </h5>
                            <p className="excerpt mb-0">
                              {Post1.attributes?.description}
                            </p>
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
                    ))}
                    {Post.slice(13, 14).map((Post1) => (
                      <div className="col-md-12 col-sm-6">
                        <div className="post post-list clearfix">
                          <div className="thumb rounded">
                            <span className="post-format-sm">
                              <i className="icon-camrecorder"></i>
                            </span>
                            <div>
                              <Link to="/blogsingle">
                                <div className="inner">
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      Post1.attributes?.image?.data[0]
                                        ?.attributes?.url
                                    }
                                    alt="post-title"
                                  />
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <ul className="meta list-inline mb-3">
                              <li className="list-inline-item">
                                <a href="#profile">
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      Post1.attributes?.authorimage?.data[0]
                                        ?.attributes?.url
                                    }
                                    className="author"
                                    alt="author"
                                  />
                                  {Post1.attributes?.author}
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#profile">Fashion</a>
                              </li>
                              <li className="list-inline-item">
                                {Post1.attributes?.date}
                              </li>
                            </ul>
                            <h5 className="post-title">
                              <div>
                                <Link to="/blogsingle">
                                  {Post1.attributes?.title}
                                </Link>
                              </div>
                            </h5>
                            <p className="excerpt mb-0">
                              {Post1.attributes?.description}
                            </p>
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
                    ))}
                    {Post.slice(14, 15).map((Post1) => (
                      <div className="col-md-12 col-sm-6">
                        <div className="post post-list clearfix">
                          <div className="thumb rounded">
                            <div>
                              <Link to="/blogsingle">
                                <div className="inner">
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      Post1.attributes?.image?.data[0]
                                        ?.attributes?.url
                                    }
                                    alt="post-title"
                                  />
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <ul className="meta list-inline mb-3">
                              <li className="list-inline-item">
                                <a href="#profile">
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      Post1.attributes?.authorimage?.data[0]
                                        ?.attributes?.url
                                    }
                                    className="author"
                                    alt="author"
                                  />
                                  {Post1.attributes?.author}
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#profile">Politic</a>
                              </li>
                              <li className="list-inline-item">
                                {Post1.attributes?.date}
                              </li>
                            </ul>
                            <h5 className="post-title">
                              <div>
                                <Link to="/blogsingle">
                                  {Post1.attributes?.title}
                                </Link>
                              </div>
                            </h5>
                            <p className="excerpt mb-0">
                              {Post1.attributes?.description}
                            </p>
                            <div className="post-bottom clearfix d-flex align-items-center">
                              <div className="social-share me-auto">
                                <button className="toggle-button icon-share">
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
                                </button>
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
                    ))}
                  </div>

                  <div className="text-center">
                    <button className="btn btn-simple">Load More</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sidebar">
                  {Post.slice(21,22).map((Post1) => (
                    <div className="widget rounded">
                      <div
                        className="widget-about data-bg-image text-center"
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL +
                            "http://localhost:1337" +
                            Post1.attributes?.image?.data[0]?.attributes?.url
                          })`,
                        }}
                      >
                        <img
                          src={
                            "http://localhost:1337" +
                            Post1.attributes?.authorimage?.data[0]?.attributes
                              ?.url
                          }
                          alt="logo"
                          className="mb-4"
                        />
                        <p className="mb-4">{Post1.attributes?.description}</p>
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
                  ))}

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
                      {Post.slice(0, 1).map((Post1) => (
                        <div className="post post-list-sm circle">
                          <div className="thumb circle">
                            <span className="number">1</span>
                            <div>
                              <Link to="/blogsingle">
                                <div className="inner">
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      Post1.attributes?.image?.data[0]
                                        ?.attributes?.url
                                    }
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
                                  {Post1.attributes?.title}
                                </Link>
                              </div>
                            </h6>
                            <ul className="meta list-inline mt-1 mb-0">
                              <li className="list-inline-item">
                                {Post1.attributes?.date}
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                      {Post.slice(1, 2).map((Post1) => (
                        <div className="post post-list-sm circle">
                          <div className="thumb circle">
                            <span className="number">2</span>
                            <div>
                              <Link to="/blogsingle">
                                <div className="inner">
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      Post1.attributes?.image?.data[1]
                                        ?.attributes?.url
                                    }
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
                                  {Post1.attributes?.title}
                                </Link>
                              </div>
                            </h6>
                            <ul className="meta list-inline mt-1 mb-0">
                              <li className="list-inline-item">
                                {Post1.attributes?.date}
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                      {Post.slice(2, 3).map((Post1) => (
                        <div className="post post-list-sm circle">
                          <div className="thumb circle">
                            <span className="number">3</span>
                            <div>
                              <Link to="/blogsingle">
                                <div className="inner">
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      Post1.attributes?.image?.data[0]
                                        ?.attributes?.url
                                    }
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
                                  {Post1.attributes?.title}
                                </Link>
                              </div>
                            </h6>
                            <ul className="meta list-inline mt-1 mb-0">
                              <li className="list-inline-item">
                                {Post1.attributes?.date}
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
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
                          <Link to="/category">Lifestyle</Link>
                          <span>(5)</span>
                        </li>
                        <li>
                          <Link to="/category">Inspiration</Link>
                          <span>(2)</span>
                        </li>
                        <li>
                          <Link to="/personal">Fashion</Link>
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
                            onChange={(e) => handle(e)}
                            value={Contact.email}
                            required="required"
                            id="email"
                            type="email"
                            placeholder="Email address…"
                          />
                        </div>
                        <button
                          className="btn btn-default btn-full"
                          type="submit"
                          onClick={(e) => submit(e)}
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
                        {Post.slice(4, 5).map((Post1) => (
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
                                      src={
                                        "http://localhost:1337" +
                                        Post1.attributes?.image?.data[0]
                                          ?.attributes?.url
                                      }
                                      alt="post-title"
                                    />
                                  </div>
                                </Link>
                              </div>
                            </div>
                            <h5 className="post-title mb-0 mt-4">
                              <div>
                                <Link to="/blogsingle">
                                  {Post1.attributes?.title}
                                </Link>
                              </div>
                            </h5>
                            <ul className="meta list-inline mt-2 mb-0">
                              <li className="list-inline-item">
                                <a href="#profile">
                                  {" "}
                                  {Post1.attributes?.author}
                                </a>
                              </li>
                              <li className="list-inline-item">
                                {Post1.attributes?.date}
                              </li>
                            </ul>
                          </div>
                        ))}

                        {Post.slice(7, 8).map((Post1) => (
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
                                      src={
                                        "http://localhost:1337" +
                                        Post1.attributes?.image?.data[0]
                                          ?.attributes?.url
                                      }
                                      alt="post-title"
                                    />
                                  </div>
                                </Link>
                              </div>
                            </div>
                            <h5 className="post-title mb-0 mt-4">
                              <div>
                                <Link to="/blogsingle">
                                  {Post1.attributes?.title}
                                </Link>
                              </div>
                            </h5>
                            <ul className="meta list-inline mt-2 mb-0">
                              <li className="list-inline-item">
                                <a href="#profile">
                                  {" "}
                                  {Post1.attributes?.author}
                                </a>
                              </li>
                              <li className="list-inline-item">
                                {Post1.attributes?.date}
                              </li>
                            </ul>
                          </div>
                        ))}

                        {Post.slice(4, 5).map((Post1) => (
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
                                      src={
                                        "http://localhost:1337" +
                                        Post1.attributes?.image?.data[0]
                                          ?.attributes?.url
                                      }
                                      alt="post-title"
                                    />
                                  </div>
                                </Link>
                              </div>
                            </div>
                            <h5 className="post-title mb-0 mt-4">
                              <div>
                                <Link to="/blogsingle">
                                  {Post1.attributes?.title}
                                </Link>
                              </div>
                            </h5>
                            <ul className="meta list-inline mt-2 mb-0">
                              <li className="list-inline-item">
                                <a href="#profile">
                                  {" "}
                                  {Post1.attributes?.author}
                                </a>
                              </li>
                              <li className="list-inline-item">
                                {Post1.attributes?.date}
                              </li>
                            </ul>
                          </div>
                        ))}
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

export default Home;
