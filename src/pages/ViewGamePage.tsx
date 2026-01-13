import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Game {
  id: number;
  date: string;
  title: string;
  winner: string;
  rubayetPoint: number;
  sudipPoint: number;
}

const ViewGamesPage = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:9001/api/games/all")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch games");
        }
        return res.json();
      })
      .then((data) => {
        setGames(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("ডাটা লোড করা যায়নি ❌");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container my-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold text-primary">🎮 All Games</h3>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center text-muted">
          ⏳ লোড হচ্ছে...
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="alert alert-danger text-center">
          {error}
        </div>
      )}

      {/* Empty State */}
      {!loading && games.length === 0 && (
        <div className="text-center text-muted border rounded-4 p-5">
          এখনো কোনো গেম যুক্ত হয়নি
        </div>
      )}

      {/* Games */}
      <div className="row g-4">
        {games.map((game) => (
          <div key={game.id} className="col-md-6 col-lg-4">
            <div className="card shadow-sm border-0 rounded-4 h-100">

              {/* Body */}
              <div className="card-body">
                <span className="badge bg-secondary mb-2">
                  📅 {game.date}
                </span>

                <h5 className="fw-bold mt-3">
                  {game.title}
                </h5>

                <p className="mt-2 mb-1">
                  🏆 বিজয়ী: <strong>{game.winner}</strong>
                </p>

                <p className="mb-0 text-muted">
                  🔵 রুবায়েত: {game.rubayetPoint} পয়েন্ট
                </p>
                <p className="mb-0 text-muted">
                  🟢 সুদীপ: {game.sudipPoint} পয়েন্ট
                </p>
              </div>

              {/* Footer */}
              <div className="card-footer bg-white border-0 d-flex justify-content-end gap-2">
                <button className="btn btn-sm btn-outline-primary">
                  Edit
                </button>
                <button className="btn btn-sm btn-outline-danger">
                  Delete
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewGamesPage;
