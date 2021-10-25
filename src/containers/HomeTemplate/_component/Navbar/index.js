import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./style.css";
import $ from "jquery";
import { actLogout } from "../../LoginPage/modules/actions";
import { connect } from "react-redux";

class Navbar extends Component {
  componentDidMount() {
    this.handleOnClickMenuToggle();
  }

  // Handle Menu Toggle
  handleOnClickMenuToggle = () => {
    $("#hamburger-menu").on("click", () => {
      $("#hamburger-menu").toggleClass("active");
      $("#nav-menu").toggleClass("active");
    });
  };

  handleOnClickLogOut = () => {
    this.props.logout(this.props.history);
  };

  renderLoginLogOut = () => {
    const userLogin = JSON.parse(localStorage.getItem("UserCustomer"));

    if (userLogin) {
      return (
        <>
          <li>
            <button className="btn" onClick={this.handleOnClickLogOut}>
              Sign out
            </button>
          </li>

          <div className="welcome-user">Xin chào {userLogin?.taiKhoan}</div>
        </>
      );
    }

    return (
      <li>
        <NavLink to="/login" className="btn">
          <span>Sign in</span>
        </NavLink>
      </li>
    );
  };

  render() {
    return (
      <nav className="nav-wrapper shadow-nav">
        <div className="nav-content">
          <div className="nav">
            <NavLink to="/" className="logo">
              <i className="bx bx-movie-play bx-tada main-color" />
              Mov<span className="main-color">i</span>es
            </NavLink>

            <ul className="nav-menu" id="nav-menu">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/list-movie">Movies</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="#">About</NavLink>
              </li>

              {this.renderLoginLogOut()}
            </ul>

            <div className="hamburger-menu" id="hamburger-menu">
              <div className="hamburger" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (history) => {
      dispatch(actLogout(history));
    },
  };
};

const ConnectedComponent = connect(null, mapDispatchToProps)(Navbar);

export default withRouter(ConnectedComponent);
