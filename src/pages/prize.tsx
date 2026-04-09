import "bootstrap/dist/css/bootstrap.min.css";

const user = {
  title: "📝 Sprihan Halder’s All Prizes",
  name: "Sprihan Halder",
  DOB: "30-10-2025",
  place: "Dhaka, Bangladesh",
  Email: "sprihanhalder@gmail.com",
  imageUr2: "/babay247.jpeg",
  imageSize: 100,
  imageSize1: 100,
};

const MemoryAlbum = () => {

  const prizes = [
    {
      date: "03-11-2025",
      giver: "Grandmother (Paternal)",
      prize: "Silver Bicha",
    },

     {
      date: "03-11-2025",
        giver: "Nur(Friends of Mother)",
      prize: "cloths 1 sets",
    },

    {
      date: "03-11-2025",
        giver: "takuma (Mother)",
      prize: "Towel Set",
    },

    {
      date: "03-11-2025",
      giver: "Grandparents (Paternal)",
      prize: "Silver kharu",
    },

    {
      date: "03-11-2025",
      giver: "Mother",
      prize: "Silver Chain",
    },

     {
      date: "04-11-2025",
      giver: "Relatives (Basa)",
      prize: "cloths 5 sets",
    },

     {
      date: "25-11-2025",
      giver: "Titu (Garrrezala friend of Father)",
      prize: "500 Taka",
    },


    {
      date: "13-12-2025",
      giver: "Grandfather (maternal)",
      prize: "Golden ring",
    },

    {
      date: "25-12-2025",
      giver: "Ayesa (Colleague of Mother)",
      prize: "1000 Taka",
    },

    {
      date: "25-12-2025",
      giver: "Jahangir (Colleague of Mother)",
      prize: "1000 Taka",
    },
     {
      date: "25-12-2025",
      giver: "Nurujaman (Colleague of Mother)",
      prize: "cloths 2 sets",
    },

    {
      date: "25-12-2025",
      giver: "Mijan(Colleague of Mother)",
      prize: "3000 Taka",
    },

    {
      date: "25-12-2025",
      giver: "Rubayet (Colleague of Father)",
      prize: "cloths 1 sets & Combol",
    },

    {
      date: "25-12-2025",
      giver: "Sumaya (Colleague of Father)",
      prize: "cloths 1 sets",
    },

    {
      date: "15-12-2025",
      giver: "Manisa & Ritu (Friends of Mother)",
      prize: "Baby Carrier Bag",
    },

     {
      date: "15-12-2025",
      giver: "Sandeep (Friends of Mother)",
      prize: "cloths 2 sets",
    },

    {
      date: "25-11-2025",
      giver: "Anupom (Friend of Father)",
      prize: "2000 Taka",
    },
    {
      date: "26-02-2026",
      giver: "Toukir (Friend of Father)",
      prize: "2000 Taka",
    },

     {
      date: "17-03-2026",
      giver: "Ibrahim (Friend of Father's Father)",
      prize: "cloths 1 sets",
    },

    {
      date: "19-03-2026",
      giver: "komolesh(father's Uncle Bari)",
      prize: "genji suit",
    },

    {
      date: "19-03-2026",
      giver: "Tusar(father's Uncle Bari)",
      prize: "genji suit",
    },
    {
      date: "19-03-2026",
      giver: "Paish(father's Brother Bari)",
      prize: "genji suit & Bottle",
    },

    {
      date: "19-03-2026",
      giver: "Sohag(father's Brother Bari)",
      prize: "genji suit",
    },

    {
      date: "19-03-2026",
      giver: "Aroup(father's Brother Bari)",
      prize: "100 Taka",
    },
   
     {
      date: "22-03-2026",
      giver: "Noni Gopal (father's Brother Relative)",
      prize: "genji suit",
    },
    {
      date: "22-03-2026",
      giver: "Nikil (father's Uncle Bari)",
      prize: "Thalabason",
    },
  {
      date: "22-03-2026",
      giver: "Ajrin (Mother's relative)",
      prize: "500 Taka",
    },

     {
      date: "22-03-2026",
      giver: "Grandmother (Maternal)",
      prize: "cloths 4 sets",
    },

    {
      date: "03-04-2026",
      giver: "Grandmother (Paternal)",
      prize: "Bridegroom Suit",
    },

    {
      date: "03-04-2026",
      giver: "Grandfather (Paternal)",
      prize: "kasar thala",
    },
  ];

  return (
    <div className="d-flex justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="container py-3">

        {/* PROFILE */}
        <div
          style={{
            position: window.innerWidth < 768 ? "static" : "sticky",
            top: 40,
            height: "fit-content",
          }}
        >
          <div className="card shadow-lg p-4 rounded-4">
            <div className="d-flex align-items-center flex-wrap gap-3">
              <div>
                <h5 className="text-danger-emphasis">{user.title}</h5>
                <p className="text-warning-emphasis mb-1">Name: {user.name}</p>
                <small className="text-info-emphasis d-block">
                  DOB: {user.DOB}
                </small>
                <small className="text-info-emphasis d-block">
                  Email: {user.Email}
                </small>
                <small className="text-secondary-emphasis">
                  Birth Place: {user.place}
                </small>
              </div>

              <img
                className="rounded-circle border ms-auto"
                src={user.imageUr2}
                alt="profile"
                style={{
                  width: user.imageSize,
                  height: user.imageSize1,
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>

        {/* PRIZE TABLE */}
        <div className="card shadow mt-4 rounded-4">
          <div className="card-body">
            <h5 className="text-center mb-3">🎁 Prize History</h5>

            <div className="table-responsive">
              <table className="table table-bordered table-striped table-hover text-center align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Who Gave</th>
                    <th>Gift</th>
                  </tr>
                </thead>

                <tbody>
                  {prizes.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.date}</td>
                      <td>{item.giver}</td>
                      <td>{item.prize}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default MemoryAlbum;
