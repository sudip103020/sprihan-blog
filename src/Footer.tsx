import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaGithub,
  FaEnvelope,
  FaGlobe,
  FaUser,
  FaBirthdayCake,

} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <Container>
        <Row className="gy-4">

          {/* About */}
          <Col lg={4} md={6}>
            <h5 className="fw-bold mb-3">✍️ SprihanBlog</h5>

            <p className="text-secondary">
              A personal blog where memories, technology, projects,
              and experiences are shared beautifully.
            </p>
          </Col>

          {/* Quick Links */}
          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-3">Quick Links</h5>

            <ul className="list-unstyled">

              <li className="mb-2">
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>

              <li className="mb-2">
                <a href="/about" className="footer-link">
                  About
                </a>
              </li>

              <li className="mb-2">
                <a href="/memoryalbum" className="footer-link">
                  Memory Album
                </a>
              </li>

              <li className="mb-2">
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>

            </ul>
          </Col>

          {/* Contact */}
          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-3">Contact</h5>

            <p>
              <FaUser className="me-2 text-success" />
              Sprihan Halder
            </p>

            <p>
              <FaBirthdayCake className="me-2 text-success" />
              30 October 2025
            </p>

            <p>
              <FaEnvelope className="me-2 text-success" />
              sprihanhalder@gmail.com
            </p>
          </Col>

          {/* Follow */}
          <Col lg={2} md={6}>
            <h5 className="fw-bold mb-3">Follow Us</h5>

            <div className="d-flex gap-3">

              <a
                href="https://www.facebook.com/share/14ecEanpppd/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://github.com/sudip103020/sprihan-blog"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FaGithub />
              </a>

              <a
                href="https://sprihan-blog-new.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FaGlobe />
              </a>

            </div>
          </Col>

        </Row>

        <hr className="border-secondary my-4" />

        <div className="text-center text-secondary">
          © {new Date().getFullYear()} <strong>SprihanBlog</strong>. All Rights
          Reserved.
        </div>

      </Container>
    </footer>
  );
};

export default Footer;