import type { JSX } from "react";
import { Link, Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    // login ছাড়া redirect
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {/* <div>
        <nav className="p-4 bg-gray-200 d-flex gap-4">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>

          <Link to="/about" className="text-blue-600 hover:underline">
            About
          </Link>

          <Link to="/contact" className="text-blue-600 hover:underline">
            Contact
          </Link>
        </nav>
      </div> */}
      {children}
    </>
  );
};

export default ProtectedRoute;
