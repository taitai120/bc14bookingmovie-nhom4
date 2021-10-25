import React from "react";
import { NavLink } from "react-router-dom";

export default function HeroSlideItem(props) {
  const { maPhim, hinhAnh } = props.data;

  const renderTitleMovie = (maPhim) => {
    let titleMovie = "";
    if (maPhim === 1282) {
      titleMovie = "Bàn Tay Diệt Quỷ";
    } else if (maPhim === 1283) {
      titleMovie = "Lặt Mặt 48H";
    } else if (maPhim === 1284) {
      titleMovie = "Cuộc Chiến Sinh Tử";
    }

    return titleMovie;
  };

  return (
    <div className="hero-slide-item">
      <img src={hinhAnh} alt={hinhAnh} />

      <div className="overlay"></div>

      <div className="hero-slide-item-content">
        <div className="item-content-wrapper">
          <div className="item-content-title top-down">
            {renderTitleMovie(maPhim)}
          </div>

          <div className="movie-infos top-down delay-2">
            <div className="movie-info">
              <i className="bx bxs-star"></i>
              <span>9.5</span>
            </div>

            <div className="movie-info">
              <i className="bx bxs-time"></i>
              <span>120 mins</span>
            </div>

            <div className="movie-info">
              <span>HD</span>
            </div>

            <div className="movie-info">
              <span>16+</span>
            </div>
          </div>

          <div className="item-content-desc top-down delay-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            quas quae! Distinctio ullam optio, eligendi temporibus quam sequi
            odio? Est sequi inventore distinctio officiis quisquam tenetur
            aliquam quae quibusdam perspiciatis.
          </div>

          <div className="item-action top-down delay-6">
            <NavLink to="#" className="btn">
              <i className="bx bxs-right-arrow"></i>
              <span>Detail</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
