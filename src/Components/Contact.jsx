import React from "react";
import Navbar from "./Layouts/Navbar";
import InstagramFeed from "./Layouts/InstagramFeed";
import Footer from "./Layouts/Footer";
import CanvasMenu from "./Layouts/CanvasMenu";
import SearchPopupArea from "./Layouts/SearchPopupArea";


const Contact = () => {
  return (
    <>
      <div className="site-wrapper">
        <div className="main-overlay"></div>

        <Navbar />

        <section className="page-header">
          <div className="container-xl">
            <div className="text-center">
              <h1 className="mt-0 mb-2">Contact</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0">
                  <li className="breadcrumb-item">
                    <a href="#profile">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        <section className="main-content">
          <div className="container-xl">
            <div className="row">
              <div className="col-md-4">
                <div className="contact-item bordered rounded d-flex align-items-center">
                  <span className="icon icon-phone"></span>
                  <div className="details">
                    <h3 className="mb-0 mt-0">Phone</h3>
                    <p className="mb-0">+1-202-555-0135</p>
                  </div>
                </div>
                <div
                  className="spacer d-md-none d-lg-none"
                  data-height="30"
                ></div>
              </div>

              <div className="col-md-4">
                <div className="contact-item bordered rounded d-flex align-items-center">
                  <span className="icon icon-envelope-open"></span>
                  <div className="details">
                    <h3 className="mb-0 mt-0">E-Mail</h3>
                    <p className="mb-0">hello@example.com</p>
                  </div>
                </div>
                <div
                  className="spacer d-md-none d-lg-none"
                  data-height="30"
                ></div>
              </div>

              <div className="col-md-4">
                <div className="contact-item bordered rounded d-flex align-items-center">
                  <span className="icon icon-map"></span>
                  <div className="details">
                    <h3 className="mb-0 mt-0">Location</h3>
                    <p className="mb-0">California, USA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="spacer" data-height="50"></div>

            <div className="section-header">
              <h3 className="section-title">Send Message</h3>
              <img src="assests/images/wave.svg" className="wave" alt="wave" />
            </div>

            <form id="contact-form" className="contact-form" method="post">
              <div className="messages"></div>

              <div className="row">
                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="InputName"
                      id="InputName"
                      placeholder="Your name"
                      required="required"
                      data-error="Name is required."
                    />
                    <div className="help-block with-errors"></div>
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
                      data-error="Email is required."
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="column col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="InputSubject"
                      name="InputSubject"
                      placeholder="Subject"
                      required="required"
                      data-error="Subject is required."
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="column col-md-12">
                  <div className="form-group">
                    <textarea
                      name="InputMessage"
                      id="InputMessage"
                      className="form-control"
                      rows="4"
                      placeholder="Your message here..."
                      required="required"
                      data-error="Message is required."
                    ></textarea>
                    <div className="help-block with-errors"></div>
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
                Submit Message
              </button>
            </form>
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

export default Contact;
