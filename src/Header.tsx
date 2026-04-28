import { Link } from "react-router-dom";

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  };

  const user = {
    imageUr: "/babay1.jpeg",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top">
      <div className="container-fluid px-3">
        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          ✍️ SprihanBlog
        </Link>

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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-semibold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Memory
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/memoryalbum">
                    First Year(2025-26)
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/video">
                Video
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/prescription">
                Prescription
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/prize">
                Gifts
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/contact">
                Contact
              </Link>
            </li>

            {/* Event Dropdown */}
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-semibold"
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
                <li>
                  <Link className="dropdown-item" to="/tictoe">
                    Edit Event
                  </Link>
                </li>
              </ul>
            </li> */}

            {/* Game Dropdown */}
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-semibold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Game
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/addgame">Add Game</Link></li>
                <li><Link className="dropdown-item" to="/viewgame">View Match</Link></li>
              </ul>
            </li> */}
          </ul>

          <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">
            <div
              style={{ width: "40px", height: "40px", overflow: "hidden" }}
              className="rounded-circle border"
            >
              <img
                src={user.imageUr} // 'imageUr' ke 'imageUrl' kora hoyeche
                alt="profile"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
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
