import "bootstrap/dist/css/bootstrap.min.css";
import { people } from "./person";
import { getImageUrl } from "./imagelist";

const user = {
  title: "👨‍👩‍👧‍👦 Welcome to Sprihan Halder’s Family ",
  name: "Sprihan Halder",
  DOB: "30-10-2025",
  Email: "sprihanhalder@gmail.com",
  place: "Dhaka, Bangladesh",
  imageUr2: "/babay275.jpg",
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
<div className="container py-4">
  <div className="row g-4">

    {/* LEFT PROFILE */}
    <div className="col-12 col-lg-4">
      <div style={{ position: "sticky", top: 20 }}>
        <div className="card shadow-lg p-4 rounded-4 text-center">

          <img
            className="rounded-circle border mb-3 mb-3 mx-auto d-block"
            src={user.imageUr2}
            style={{
              width: user.imageSize,
              height: user.imageSize1,
              objectFit: "cover",
            }}
          />

              <h5 className="text-danger-emphasis">{user.title}</h5>
                <p className="text-warning-emphasis mb-1">Name: {user.name}</p>
                <small className="text-info-emphasis d-block">
                  DOB: {user.DOB}
                </small>
                <small className="text-info-emphasis d-block">
                  Email: {user.Email}
                </small>
                <small className="text-secondary-emphasis">Birth Place: {user.place}</small>

        </div>
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div className="col-12 col-lg-8">

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
