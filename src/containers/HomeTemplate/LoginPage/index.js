import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./css/style.css";
import { actLoginApi } from "./modules/actions";

export default function LoginPage(props) {
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const dispatch = useDispatch();
  const error = useSelector((state) => state.loginReducer.error);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(actLoginApi(state, props.history));
  };

  const renderNoti = () => {
    return (
      error && (
        <div className="show-error">{error?.response?.data?.content}</div>
      )
    );
  };

  return (
    <div className="bg-login">
      <div className="wrapper">
        <div className="login-container">
          <div className="login-form row">
            <div className="login-title col-12 mb-2">Đăng Nhập</div>

            <form onSubmit={handleOnSubmit} className="col-12 mt-2">
              {renderNoti()}
              <div className="col-12 form-group mt-2">
                <label htmlFor="username">Tài Khoản:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                  name="taiKhoan"
                  onChange={handleOnChange}
                />
              </div>

              <div className="col-12 form-group mt-2">
                <label htmlFor="password">Mật Khẩu:</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  name="matKhau"
                  onChange={handleOnChange}
                />
              </div>

              <div className="col-12 mt-2">
                <button type="submit" className="btn-login">
                  Login
                </button>

                <p className="mt-2 text-center">
                  Bạn đã có tài khoản? <NavLink to="/register">Đăng ký</NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
