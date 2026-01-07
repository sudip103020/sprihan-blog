import "bootstrap/dist/css/bootstrap.min.css"; // <-- Bootstrap CSS import
import { useNavigate } from "react-router-dom";

const user = {
  name: "Welcome to ",
  name1: "Sprihan Haldar’s  Blog",
  imageUr2: "/babu1.png",
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
    <>
      <div
        className="card shadow-lg p-4 position-absolute top-50 start-50 translate-middle"
        style={{ width: "380px", height: "500px" }}
      >
        <h2 className="text-center text-danger-emphasis">{user.name}</h2>
        <h3 className="text-center text-success-emphasis mb-4">{user.name1}</h3>

        {/* IMAGE CENTER WRAPPER */}
        <div className="d-flex justify-content-center align-items-center flex-grow-1">
          <img
            className="object-fit-cover object-position-center rounded-circle border"
            src={user.imageUr2}
            alt={"Photo of " + user.name}
            style={{
              width: user.imageSize,
              height: user.imageSize1,
            }}
          />
        </div>
        <button className="btn btn-danger mt-3" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* <div className= "p-4 text-warning-emphasis bg-secondary-subtle border border-success-subtle rounded-4 mb-4">  */}
      {/* Login Panel </div> */}

      {/* <div className= "p-4 text-dark-emphasis bg-primary-subtle border border-success-subtle rounded-4"> */}
      {/* Example element with utilities</div> */}
    </>
  );
};

export default About;
