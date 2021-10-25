import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { actLogout } from "./../../AuthPage/modules/actions";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          {/* Brand */}
          {/* <a className="navbar-brand" href="">
                        Navbar
                    </a> */}

          {/* Toggler/collapsibe Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/add-user"
                >
                  Add User
                </NavLink>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link btn btn-info"
                  onClick={() => {
                    this.props.logout(this.props.history);
                  }}
                >
                  Log out
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
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
