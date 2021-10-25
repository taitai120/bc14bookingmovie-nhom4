import React from "react";
import "./css/style.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actRegisterUser } from "./modules/actions";
import { NavLink } from "react-router-dom";

export default function RegisterPage() {
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    hoTen: "",
  });

  const dispatch = useDispatch();
  const error = useSelector((state) => state.registerUserReducer.error);

  const handleOnChane = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(actRegisterUser(state));
  };

  const renderNoti = () => {
    return (
      error && (
        <div className="show-error">{error?.response?.data?.content}</div>
      )
    );
  };

  return (
    <div className="bg-register">
      <div className="wrapper">
        <div className="register-container">
          <div className="register-form row">
            <div className="register-title col-12 mb-2">Đăng Ký</div>

            <form onSubmit={handleOnSubmit} className="col-12 mt-2">
              {renderNoti()}
              <div className="col-12 form-group mt-2">
                <label htmlFor="username">Tài Khoản:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                  name="taiKhoan"
                  onChange={handleOnChane}
                />
              </div>

              <div className="col-12 form-group mt-2">
                <label htmlFor="password">Mật Khẩu:</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  name="matKhau"
                  onChange={handleOnChane}
                />
              </div>

              <div className="col-12 form-group mt-2">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  onChange={handleOnChane}
                />
              </div>

              <div className="col-12 form-group mt-2">
                <label htmlFor="soDt">SDT:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your phone number"
                  name="soDt"
                  onChange={handleOnChane}
                />
              </div>

              <div className="col-12 form-group mt-2">
                <label htmlFor="hoTen">Họ Tên:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  name="hoTen"
                  onChange={handleOnChane}
                />
              </div>

              <div className="col-12 mt-2">
                <button type="submit" className="btn-register">
                  Đăng ký
                </button>
              </div>

              <div className="col-12 mt-2 text-center">
                <NavLink to="/login">Quay về Trang Đăng Nhập</NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
