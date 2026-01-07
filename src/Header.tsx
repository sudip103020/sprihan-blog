import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow">
      {/* Logo / Brand */}
      <Link className="navbar-brand fw-bold text-warning" to="/about">
        Welcome to Sprihan Blog
      </Link>

      {/* Mobile Toggle Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menu */}
      <div className="collapse navbar-collapse" id="mainNavbar">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">

          {/* Normal Menu */}
        

          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>

          {/* Dropdown Menu */}
          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
            >
              Event
            </span>

            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <Link className="dropdown-item" to="/web">
                  Birthday
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/app">
                  First Month
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/design">
                  Second Month
                </Link>
              </li>
            </ul>
          </li>

          {/* Another Menu */}
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>

          {/* Logout Button */}
          <li className="nav-item">
            <button
              className="btn btn-danger btn-sm ms-lg-3"
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                window.location.href = "/";
              }}
            >
              Logout
            </button>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Header;
