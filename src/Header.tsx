import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Image,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  };

  const user = {
    imageUrl: "/babay1.png",
  };

  return (
   <Navbar
  expand="lg"
  sticky="top"
  className="shadow"
  style={{
    background: "rgba(187, 211, 200, 0.67)",
    backdropFilter: "blur(12px)",
  }}
>
      <Container>
        {/* Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-4 d-flex align-items-center"
        >
          SprihanBlog
        </Navbar.Brand>

        {/* Mobile Button */}
        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          {/* Left Menu */}
          <Nav className="mx-auto text-center">
            <Nav.Link as={NavLink} to="/about" className="fw-semibold px-3">
              About
            </Nav.Link>

            <NavDropdown
              title="Memory"
              id="memory-dropdown"
              className="fw-semibold"
            >
              <NavDropdown.Item as={NavLink} to="/memoryalbum">
                First Year (2025-26)
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/video" className="fw-semibold px-3">
              Video
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/prescription"
              className="fw-semibold px-3"
            >
              Prescription
            </Nav.Link>

            <NavDropdown title="Gifts" id="gift-dropdown">
              <NavDropdown.Item as={NavLink} to="/prize">
                General Gift
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/prize1">
                Onnoprason Gift
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/contact" className="fw-semibold px-3">
              Contact
            </Nav.Link>
          </Nav>

          {/* Right Side */}
          <div className="d-flex flex-column flex-lg-row align-items-center gap-3 mt-3 mt-lg-0">
            <Image
              src={user.imageUrl}
              roundedCircle
              width={45}
              height={45}
              style={{
                objectFit: "cover",
                border: "2px solid #198754",
              }}
            />

            <Button variant="success" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
