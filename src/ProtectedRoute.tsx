import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

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
      <Header />
      <Footer />

      <main className="d-flex justify-content-center align-items-center w-100 my-5 pt-5">
        {children} {/* About page will fill this */}
      </main>
    </>
  );
};

export default ProtectedRoute;
