import React from 'react';
import halfmoon from 'halfmoon';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <button className="btn btn-action" type="button">
          <i className="fa fa-bars" aria-hidden="true"></i>
          <span className="sr-only">Toggle sidebar</span>
        </button>
      </div>

      <span className="navbar-brand">QuizDB</span>

      <span className="navbar-text text-monospace">v0.1</span>

      <ul className="navbar-nav d-none d-md-flex">
        <li className="nav-item">
          <a href="#" className="nav-link">
            Documentation
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Contribute
          </a>
        </li>
      </ul>
      <div className="navbar-content ml-auto">
        <button
          className="btn btn-action"
          onClick={() => {
            halfmoon.toggleDarkMode();
          }}
        >
          <i className="fa fa-moon"></i>
        </button>
      </div>

      <div className="navbar-content d-md-none ml-auto">
        <div className="dropdown with-arrow">
          <button className="btn" data-toggle="dropdown" type="button" id="navbar-dropdown-toggle-btn-1">
            Menu
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </button>
          <div className="dropdown-menu dropdown-menu-right w-200" aria-labelledby="navbar-dropdown-toggle-btn-1">
            <a href="#" className="dropdown-item">
              Docs
            </a>
            <a href="#" className="dropdown-item">
              Products
            </a>
            <div className="dropdown-divider"></div>
            <div className="dropdown-content">
              <form action="..." method="...">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Email address" />
                </div>
                <button className="btn btn-primary btn-block" type="submit">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
