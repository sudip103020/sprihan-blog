import "bootstrap/dist/css/bootstrap.min.css"; // <-- Bootstrap CSS import
import "./App.css";
import "./index.css";

const user = {
  name: "Welcome to ",
  name1: "Sprihan Haldar’s  Blog",
  imageUr2: "/babu1.png",
  imageSize: 200,
  imageSize1: 230,
};

function Sprihan() {
  return (
    <>
      <div className="spacing">
        {/* <img src="/babu1.png" alt="babu1" />  */}
      </div>
      <div className=" position-absolute top-50 start-50 translate-middle ">
        <h1 className="text-danger-emphasis">{user.name}</h1>
        <h3 className=" text-success-emphasis mb-4">{user.name1}</h3>

        <img
          className="mb-4"
          src={user.imageUr2}
          alt={"Photo of " + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize1,
          }}
        />
      </div>

      {/* <div className= "p-4 text-dark-emphasis bg-primary-subtle border border-success-subtle rounded-4"> */}
      {/* Example element with utilities</div> */}
    </>
  );
}

export default Sprihan;
