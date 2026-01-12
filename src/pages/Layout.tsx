import React, { type JSX } from "react";
import { Link } from "react-router";
import Header from "../Header";


interface LayoutProps {
  children: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
       

      {/* <nav className="p-4 bg-gray-200 d-flex gap-4">
        <Link to="/" className="text-blue-600 hover:underline">
          Home
        </Link>

        <Link to="/about" className="text-blue-600 hover:underline">
          About
        </Link>

        <Link to="/contact" className="text-blue-600 hover:underline">
          Contact
        </Link>
      </nav> */}
      {children}
      
      
    </div>
  );
}
