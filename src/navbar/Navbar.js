import React from "react";
import "./navbar.scss";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <p className="navbar-brand" href="#">
          Weather App
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <p className="nav-link">
                Home <span className="sr-only">(current)</span>
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link">Country</p>
            </li>
            <li className="nav-item dropdown">
              <p
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Features
              </p>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <p className="dropdown-item" href="#">
                  .
                </p>
                <div className="dropdown-divider" />
                <p className="dropdown-item" href="#">
                  .
                </p>
              </div>
            </li>
          </ul>
          <form
            className="form-inline my-2 my-lg-0"
            onSubmit={(e) => props.changeWeather(e)}
          >
            <input
              className="form-control mr-sm-2"
              placeholder="Type Your City"
              onChange={(e) => props.changeRegion(e.target.value)}
            />
            <button className="btn btn-primary my-2 my-sm-0" type="submit">
              Enter
            </button>
          </form>
        </div>
      </nav>
      <br />
    </div>
  );
}

export default Navbar;
