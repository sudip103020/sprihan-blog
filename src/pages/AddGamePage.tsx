import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AddGamePage = () => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [winner, setWinner] = useState("");
  const [rubayetPoint, setRubayetPoint] = useState("");
  const [sudipPoint, setSudipPoint] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const gameData = {
    date,
    title,
    winner,
    rubayetPoint: Number(rubayetPoint),
    sudipPoint: Number(sudipPoint),
  };

  try {
    const res = await fetch("http://localhost:9001/api/games/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameData),
    });

    if (!res.ok) {
      throw new Error("API Error");
    }

    alert("গেম যুক্ত হয়েছে ✅");

    // reset
    setDate("");
    setTitle("");
    setWinner("");
    setRubayetPoint("");
    setSudipPoint("");
  } catch (err) {
    console.error(err);
    alert("গেম যুক্ত করা যায়নি ❌");
  }
};

  return (
    <div className="container my-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold text-primary">🎮 Games</h3>

        <button
          className="btn btn-success px-4"
          data-bs-toggle="offcanvas"
          data-bs-target="#addGameDrawer"
        >
          ➕ যুক্ত করুন
        </button>
      </div>

      {/* Empty state */}
      <div className="text-center text-muted border rounded-4 p-5">
         এই পেইজ থেকে প্রতিদিনের গেইম যুক্ত করতে পারবেন। ধন্যবাদ 
      </div>

      {/* Drawer */}
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="addGameDrawer">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bold">➕ নতুন গেম যুক্ত করুন</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          <form onSubmit={handleSubmit}>
            {/* Date */}
            <div className="mb-3">
              <label className="form-label fw-semibold">তারিখ</label>
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            {/* Title */}
            <div className="mb-3">
              <label className="form-label fw-semibold">শিরোনাম</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="গেমের শিরোনাম"
                required
              />
            </div>

            {/* Winner */}
            <div className="mb-3">
              <label className="form-label fw-semibold">বিজয়ী</label>
              <select
                className="form-select"
                value={winner}
                onChange={(e) => setWinner(e.target.value)}
                required
              >
                <option value="">-- বিজয়ী নির্বাচন করুন --</option>
                <option value="রুবায়েত">রুবায়েত</option>
                <option value="সুদীপ">সুদীপ</option>
                <option value="ড্র">ড্র</option>
              </select>
            </div>

            {/* Rubayet Point */}
            <div className="mb-3">
              <label className="form-label fw-semibold">রুবায়েত পয়েন্ট</label>
              <input
                type="number"
                className="form-control"
                value={rubayetPoint}
                onChange={(e) => setRubayetPoint(e.target.value)}
                required
              />
            </div>

            {/* Sudip Point */}
            <div className="mb-3">
              <label className="form-label fw-semibold">সুদীপ পয়েন্ট</label>
              <input
                type="number"
                className="form-control"
                value={sudipPoint}
                onChange={(e) => setSudipPoint(e.target.value)}
                required
              />
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-primary w-100 mt-3">
              সাবমিট
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddGamePage;
