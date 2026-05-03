import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const user = {
  title: "🎁 Sprihan Halder’s Onnoprason Gifts",
  name: "Sprihan Halder",
  DOB: "30-10-2025",
  place: "Dhaka, Bangladesh",
  Email: "sprihanhalder@gmail.com",
  imageUr2: "/babay247.jpeg",
  imageSize: 100,
  imageSize1: 100,
};

const MemoryAlbum = () => {
  const [search, setSearch] = useState<string>("");

  const prizes = [
    {
      date: "03-04-2026 (onnprason event)",
      giver: "Grandmother (Paternal)",
      prize: "Bridegroom Suit",
    },

    {
      date: "03-04-2026 (onnprason event)",
      giver: "Grandfather (Paternal)",
      prize: "kasar thala",
    },
    {
      date: "24-04-2026 (onnprason event)",
      giver: "Monisa (Mother's friend)",
      prize: "1500/- Taka ",
    },
    {
      date: "28-04-2026 (onnprason event)",
      giver: "Sumaya (Colleague of Father)",
      prize: "2500/- Taka ",
    },
    {
      date: "29-04-2026 (onnprason event)",
      giver: "Grandmother  (Maternal)",
      prize: "50000/- Taka",
    },

    {
      date: "29-04-2026 (onnprason event)",
      giver: "Grandmother  (Maternal)",
      prize: "Locket(gold) & Cloth 1 Set ",
    },
    {
      date: "29-04-2026 (onnprason event)",
      giver: "Antu (Father's Brother)",
      prize: "Plate,  Cloth 1 Set(arong) ",
    },

    {
      date: "29-04-2026 (onnprason event)",
      giver: "Sathi (Father's Sister)",
      prize: "Glass & Plate",
    },

    {
      date: "29-04-2026 (onnprason event)",
      giver: "Cironjit (Mother's friend)",
      prize: "Cloth 1 Set(arong)",
    },

    {
      date: "29-04-2026 (onnprason event)",
      giver: "Sandeep (Mother's friend)",
      prize: "Cloth 1 Set(arong)",
    },

    {
      date: "29-04-2026 (onnprason event)",
      giver: "Cotomasi (Paternal)",
      prize: "Silver Baselet",
    },

    {
      date: "01-05-2026 (onnprason event)",
      giver: "Rubayet (Colleague of Father)",
      prize: "3000/- Taka",
    },

    {
      date: "01-05-2026 (onnprason event)",
      giver: "Jannatul (Mother's friend)",
      prize: "Silver chain with locket",
    },

    {
      date: "01-05-2026 (onnprason event)",
      giver: "Ibrahim (GrandFather's friend)",
      prize: "Silver chain ",
    },
    {
      date: "01-05-2026 (onnprason event)",
      giver: "Basar 9th floor anty ",
      prize: "1000/- Taka",
    },
    {
      date: "01-05-2026 (onnprason event)",
      giver: "Colleague of Mothers (Name Unknown) ",
      prize: "4000/- Taka",
    },

    {
      date: "01-05-2026 (onnprason event)",
      giver: "Nur (Mother's friend)",
      prize: "200/- Taka",
    },
    {
      date: "01-05-2026 (onnprason event)",
      giver: "Chanan Halder (Father's Brother)",
      prize: "Flux 1 Set",
    },
    {
      date: "01-05-2026 (onnprason event)",
      giver: "Bikas Das (GrandFather's friend)",
      prize: "1000/- Taka",
    },
  ];

  const filteredPrizes = prizes.filter((item) => {
    const text = search.toLowerCase();

    return (
      item.date.toLowerCase().includes(text) ||
      item.giver.toLowerCase().includes(text) ||
      item.prize.toLowerCase().includes(text)
    );
  });

  const highlightText = (text: string) => {
    if (!search) return text;

    const regex = new RegExp(`(${search})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span
          key={index}
          style={{ backgroundColor: "yellow", fontWeight: "bold" }}
        >
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <div
      className="d-flex justify-content-center"
      style={{ minHeight: "100vh" }}
    >
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

        <input
          className="form-control mt-3 shadow-sm"
          placeholder="Search By Date, Name or Gift..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* PRIZE TABLE */}
        <div className="card shadow mt-4 rounded-4">
          <div className="card-body">
            <h5 className="text-center mb-3 text-success">
              Total Cash Received:{" "}
              {filteredPrizes.reduce((total, item) => {
                if (item.prize.toLowerCase().includes("taka")) {
                  const amount =
                    parseInt(item.prize.replace(/[^0-9]/g, "")) || 0;
                  return total + amount;
                }
                return total;
              }, 0)}{" "}
              Taka
            </h5>
            <div className="table-responsive">
              <table className="table table-bordered table-striped table-hover text-center align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Date and Event</th>
                    <th>Who Gave</th>
                    <th>Gift</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredPrizes.length > 0 ? (
                    filteredPrizes.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{highlightText(item.date)}</td>
                        <td>{highlightText(item.giver)}</td>
                        <td>{highlightText(item.prize)}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="text-danger">No results found ❌</td>
                    </tr>
                  )}
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
