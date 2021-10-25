import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/style.css";

export default class Movie extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div
        key={movie.maPhim}
        className="latest-item col-lg-3 col-md-6 col-sm-12"
      >
        <div className="latest-content">
          <div className="latest-img">
            <img src={movie.hinhAnh} alt={movie.hinhAnh} />
          </div>
          <div className="latest-info">
            <strong className="latest-title">{movie.tenPhim}</strong>
            <p className="latest-desc">{movie.moTa}</p>
            <div className="btn-detail">
              <NavLink to={`detail/${movie.maPhim}`} className="btn">
                Detail
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
