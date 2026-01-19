import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const user = {
  name: 'Welcome to ',
  name1: 'Sprihan Haldar’s Blog',
  imageUr2: '/babu1.png',
  imageSize: 230,
  imageSize1: 230,
};

const About = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div>
      <div className="card shadow-lg p-4 text-center rounded-4" style={{ maxWidth: 1000, width: "100%" }}>
        <h2 className="text-danger-emphasis">{user.name}</h2>
        <h3 className="text-success-emphasis mb-4">
          {user.name1}   {user.name1}   {user.name1}   {user.name1}
        </h3>

        {/* IMAGE CENTER */}
        <div className="d-flex justify-content-center align-items-center mb-3">
          <img
            className="rounded-circle border"
            src={user.imageUr2}
            alt={"Photo of " + user.name}
            style={{
              width: user.imageSize,
              height: user.imageSize1,
              objectFit: "cover"
            }}
          />
        </div>

        {/* Logout button */}
        {/* <button className="btn btn-danger mt-3" onClick={handleLogout}>
          Logout
        </button> */}
      </div>
    </div>
  );
};

export default About;
