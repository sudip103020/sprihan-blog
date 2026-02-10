import { Link } from "react-router-dom";

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  };

  const user = {
    imageUr: "/babu1.png",
  };

  return (
    <nav className=" navbar navbar-expand-lg navbar-dark bg-dark shadow admin-header">
      <div className="container">
        {/* Logo */}
        <view className="navbar-brand fw-bold " >
          ✍️ SprihanBlog
        </view>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#blogNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="blogNavbar">
          <ul className="navbar-nav me-auto mb-1 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link navbar-brand fw-bold" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link navbar-brand fw-bold " to="/memoryalbum">
                Memory
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link className="nav-link navbar-brand fw-bold" to="/tictoe">
                Tic Toe Game
              </Link>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link navbar-brand fw-bold" to="/contact">
                Contact
              </Link>
            </li>
            {/* Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle navbar-brand fw-bold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Event
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/post">
                    Add Event
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/view">
                    View Event
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle navbar-brand fw-bold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Game
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/addgame">
                    Add Game
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/viewgame">
                    View Match
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* Right side */}
          <div className="d-flex align-items-center gap-3">
            {/* Profile Image */}
            <img
              src={user.imageUr}
              alt="profile"
              className="rounded-circle border"
              width="45"
             
            />

            {/* Logout */}
            <button
              className="btn btn-outline-warning btn-sm"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
