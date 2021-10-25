import React from "react";
import { NavLink } from "react-router-dom";

export default function LatestItem(props) {
  return (
    <div
      key={props.movie.maPhim}
      className="latest-item col-lg-4 col-md-6 col-sm-12"
    >
      <div className="latest-content">
        <div className="latest-img">
          <img src={props.movie.hinhAnh} alt={props.movie.hinhAnh} />
        </div>
        <div className="latest-info">
          <strong className="latest-title">{props.movie.tenPhim}</strong>
          <p className="latest-desc">{props.movie.moTa}</p>
          <div className="btn-detail">
            <NavLink to={`detail/${props.movie.maPhim}`} className="btn">
              Detail
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
