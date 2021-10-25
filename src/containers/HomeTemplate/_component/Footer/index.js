import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Footer() {
  const renderFooterRightContent = () => {
    return (
      <div className="col-lg-3 col-md-6 col-sm-12 text-center mt-3">
        <div className="footer-title">Movies</div>

        <ul className="footer-list">
          <li className="footer-item">
            <NavLink to="/list-movie">List Movies</NavLink>
          </li>

          <li className="footer-item">
            <NavLink to="#">About US</NavLink>
          </li>

          <li className="footer-item">
            <NavLink to="#">Contact</NavLink>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <footer>
      <div className="footer-content row">
        <div className="footer-left col-lg-4 col-md-6 col-sm-12">
          <NavLink to="/" className="logo text-white">
            <i className="bx bx-movie-play bx-tada main-color" />
            Mov<span className="main-color">i</span>es
          </NavLink>

          <div className="footer-desc text-center mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            voluptate impedit rerum autem tempore, quasi, quibusdam architecto
            nulla totam fugiat odit, consequuntur officiis ad magni facilis
            veritatis temporibus odio. Quam?
          </div>

          <div className="social-list">
            <div className="social-item">
              <NavLink to="#">
                <i className="bx bxl-facebook" />
              </NavLink>
            </div>

            <div className="social-item">
              <NavLink to="#">
                <i className="bx bxl-instagram" />
              </NavLink>
            </div>

            <div className="social-item">
              <NavLink to="#">
                <i className="bx bxl-twitter" />
              </NavLink>
            </div>
          </div>
        </div>

        <div className="footer-right col-lg-8 col-md-6 col-sm-12">
          {renderFooterRightContent()}
          {renderFooterRightContent()}
          {renderFooterRightContent()}

          <div className="col-lg-3 col-md-6 col-sm-12 text-center mt-3 mb-3">
            <div className="app-store">
              <img
                src="https://icon-library.com/images/app-store-icon-png/app-store-icon-png-29.jpg"
                alt="https://icon-library.com/images/app-store-icon-png/app-store-icon-png-29.jpg"
              />
            </div>

            <div className="google-play mt-3">
              <img
                src="https://e7.pngegg.com/pngimages/961/859/png-clipart-google-play-android-app-store-apple-android-text-rectangle.png"
                alt="https://e7.pngegg.com/pngimages/961/859/png-clipart-google-play-android-app-store-apple-android-text-rectangle.png"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
