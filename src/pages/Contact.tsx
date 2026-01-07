import { useNavigate } from "react-router-dom";
import viteLogo from "/vite.svg";

function Contact() {
   const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
       <p> 01738126875</p>
    </>
  );
}

export default Contact;
