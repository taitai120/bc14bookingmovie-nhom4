import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actAuthApi } from "./modules/actions";
import Loader from "../../../components/Loader";
import "./style.css";

export default function AuthPage(props) {
  let checkUser = JSON.parse(localStorage.getItem("UserCustomer"));
  if (checkUser) {
    props.history.push("/");
  }

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  // thao tác với state trên redux
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const error = useSelector((state) => state.authReducer.error);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(actAuthApi(state, props.history));
  };

  const renderNoti = () => {
    return (
      error && (
        <div className="show-error">{error?.response?.data?.content}</div>
      )
    );
  };

  if (loading) return <Loader />;

  return (
    <div className="bg-login">
      <div className="wrapper">
        <div className="container login-container">
          <div className="login-form row">
            <div className="login-title col-12 mb-2">Login</div>

            <form onSubmit={handleOnSubmit} className="col-12 mt-2">
              {renderNoti()}

              <div className="col-12 form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                  name="taiKhoan"
                  onChange={handleOnChange}
                />
              </div>

              <div className="col-12 form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  name="matKhau"
                  onChange={handleOnChange}
                />
              </div>

              <div className="col-12">
                <button type="submit" className="btn-login">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
