import React from "react";
import { NavLink } from "react-router-dom";

export default function ShowcaseItem(props) {
  return (
    <NavLink className="showcase-item" to={`/detail/${props.movie.maPhim}`}>
      <div className="showcase-img">
        <img src={props.movie.hinhAnh} alt={props.movie.hinhAnh} />
      </div>

      <div className="showcase-content">
        <div className="showcase-item-title text-center">
          {props.movie.tenPhim}
        </div>
        <div className="movie-infos">
          <div className="movie-info">
            <i className="bx bxs-star" />
            <span>9.5</span>
          </div>
          <div className="movie-info">
            <i className="bx bxs-time" />
            <span>120 mins</span>
          </div>
          <div className="movie-info">
            <span>HD</span>
          </div>
          <div className="movie-info">
            <span>16+</span>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
