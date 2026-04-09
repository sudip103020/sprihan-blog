import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AddPostPage = () => {
  const [date, setDate] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("date", date);
    formData.append("description", comment);
    if (image) formData.append("image", image);

    try {
      const res = await fetch("http://localhost:8080/api/posts/save", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("API Error");
      }

      alert("পোস্ট যুক্ত হয়েছে ✅");
      setDate("");
      setComment("");
      setImage(null);
    } catch (err) {
      console.error(err);
      alert("পোস্ট যুক্ত করা যায়নি ❌");
    }
  };

  return (
    <div className="container my-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold text-primary">📝 Blog Posts</h3>

        {/* Add Button */}
        <button
          className="btn btn-success px-4"
          data-bs-toggle="offcanvas"
          data-bs-target="#addPostDrawer"
        >
          ➕ যুক্ত করুন
        </button>
      </div>

      {/* Empty state */}
      <div className="text-center text-muted border rounded-4 p-5">
        এই পেইজ থেকে প্রতিদিনের ইভেন্ট যুক্ত করতে পারবেন। ধন্যবাদ
      </div>

      {/* Drawer / Offcanvas */}
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="addPostDrawer">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bold">➕ নতুন পোস্ট যুক্ত করুন</h5>
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

            {/* Image */}
            <div className="mb-3">
              <label className="form-label fw-semibold">ছবি</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={(e) =>
                  setImage(e.target.files ? e.target.files[0] : null)
                }
                required
              />
            </div>

            {/* Comment */}
            <div className="mb-3">
              <label className="form-label fw-semibold">মন্তব্য</label>
              <textarea
                className="form-control"
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="আপনার মন্তব্য লিখুন..."
                required
              ></textarea>
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

export default AddPostPage;
