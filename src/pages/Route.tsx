import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";

export default function MainRoute() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
      </Routes>
  );
}
