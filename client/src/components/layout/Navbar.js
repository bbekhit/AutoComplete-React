import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <Link className="navbar-brand" to="/">
            AutoComplete
          </Link>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/cities">
                City
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/books">
                Book
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;