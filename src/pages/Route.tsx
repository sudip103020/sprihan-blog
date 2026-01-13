import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Header from "../Header";
import AddPostPage from "./AddPostPage";
import ViewPostsPage from "./ViewPostsPage";
import AddGamePage from "./AddGamePage";
import ViewGamesPage from "./ViewGamePage";

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
         <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
          
        />

        <Route
          path="/post"
          element={
            <ProtectedRoute>
              <AddPostPage />
            </ProtectedRoute>
          }
          
        />

        <Route
          path="/view"
          element={
            <ProtectedRoute>
              <ViewPostsPage />
            </ProtectedRoute>
          }
          
        />

        <Route
          path="/addgame"
          element={
            <ProtectedRoute>
              <AddGamePage />
            </ProtectedRoute>
          }
          
        />

         <Route
          path="/viewgame"
          element={
            <ProtectedRoute>
              <ViewGamesPage />
            </ProtectedRoute>
          }
          
        />

    
        <Route
          path="/Header"
          element={
            <ProtectedRoute>
              <Header />
            </ProtectedRoute>
          }
          
        />
        
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
  );
}
