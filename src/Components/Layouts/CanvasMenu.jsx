import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const CanvasMenu = () => {
  return (
    <>
      <div className="canvas-menu d-flex align-items-end flex-column">
        <button type="button" className="btn-close" aria-label="Close"></button>

        <div className="logo">
          <img src="assests/images/logo.svg" alt="Katen" />
        </div>

        <nav>
          <ul className="vertical-menu">
            <li className="active">
              <div>
                <Link to="/"> Home</Link>
              </div>
              <ul className="submenu">
                <li>
                  <div>
                    <Link to="/">Magazine</Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link to="/personal">Personal</Link>{" "}
                  </div>
                </li>
                <li>
                  <div>
                    <Link to="/personalalt">Personal Alt</Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link to="/minimal">Minimal</Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link to="/classes">Classic</Link>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <div>
                <Link to="/category">Lifestyle</Link>
              </div>
            </li>
            <li>
              <div>
                <Link to="/category">Inspiration</Link>
              </div>
            </li>
            <li>
              <div href="#profile">Pages</div>
              <ul className="submenu">
                <li>
                  <div>
                    <Link to="/category">Category</Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link to="/blogsingle">Blog Single</Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link to="/blog-single-alt">Blog Single Alt</Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link to="/about">About</Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link to="/contact">Contact</Link>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <div>
                <Link to="/contact">Contact</Link>
              </div>
            </li>
          </ul>
        </nav>

        <ul className="social-icons list-unstyled list-inline mb-0 mt-auto w-100">
          <li className="list-inline-item">
            <div href="#profile">
              <i className="fab fa-facebook-f"></i>
            </div>
          </li>
          <li className="list-inline-item">
            <div href="#profile">
              <i className="fab fa-twitter"></i>
            </div>
          </li>
          <li className="list-inline-item">
            <div href="#profile">
              <i className="fab fa-instagram"></i>
            </div>
          </li>
          <li className="list-inline-item">
            <div href="#profile">
              <i className="fab fa-pinterest"></i>
            </div>
          </li>
          <li className="list-inline-item">
            <div href="#profile">
              <i className="fab fa-medium"></i>
            </div>
          </li>
          <li className="list-inline-item">
            <div href="#profile">
              <i className="fab fa-youtube"></i>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CanvasMenu;




