import "bootstrap/dist/css/bootstrap.min.css";
import { people } from "./person";
import { getImageUrl } from "./imagelist";

const user = {
  title: "Welcome to Sprihan Haldar’s Blog",
  name: "Sprihan Haldar",
  DOB: "30-10-2025",
  place: "Dhaka, Bangladesh",
  imageUr2: "/babu1.png",
  imageSize: 230,
  imageSize1: 230,
};

const About = () => {
  const listitem = people.map((person) => (
    <div
      key={person.id}
      className="card shadow-sm p-3 rounded-4 mb-3"
    >
      <div className="d-flex align-items-center gap-3">
        <img
          className="rounded-circle border"
          src={getImageUrl(person)}
          style={{
            width: 80,
            height: 80,
            objectFit: "cover",
          }}
        />

        <div>
          <h5 className="text-danger-emphasis mb-1">
            Relation: {person.Relation}
          </h5>
          <p className="mb-0 text-warning-emphasis">
            Name: {person.name}
          </p>
          <small className="text-info-emphasis">
            DOB: {person.Date_of_birth}
          </small>
          <br />
          <small className="text-secondary-emphasis">
            Profession: {person.profession}
          </small>
        </div>
      </div>
    </div>
  ));

  return (
  <div
    className="d-flex justify-content-center"
    style={{ minHeight: "100vh" }}
  >
    {/* 🔒 CENTER WRAPPER */}
    <div
      className="d-flex gap-4"
      style={{
        maxWidth: 1200,
        width: "100%",
        padding: "20px",
      }}
    >
      {/* LEFT FIXED / STICKY */}
      <div
        style={{
          position: "sticky",
          top: 20,
          height: "fit-content",
          minWidth: 280,
        }}
      >
        <div className="card shadow-lg p-4 rounded-4 text-center">
          <img
            className="rounded-circle border mb-3"
            src={user.imageUr2}
            alt={"Photo of " + user.title}
            style={{
              width: user.imageSize,
              height: user.imageSize1,
              objectFit: "cover",
            }}
          />

          <h5 className="text-danger-emphasis">{user.title}</h5>
          <p className="text-warning-emphasis mb-1">{user.name}</p>
          <small className="text-info-emphasis d-block">
            DOB: {user.DOB}
          </small>
          <small className="text-secondary-emphasis">
            {user.place}
          </small>
        </div>
      </div>

      {/* RIGHT SCROLL CONTENT */}
      <div className="flex-grow-1">
        <h3 className="fw-bold text-primary mb-4">
          👨‍👩‍👧‍👦 Family Members
        </h3>
        {listitem}
      </div>
    </div>
  </div>
);

};

export default About;
