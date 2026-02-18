import type { Post } from "./ViewPostsPage";
import { useState } from "react";

interface EventProps {
  post: Post;
  onDelete: (id: string) => void;
  onUpdate: (updatedPost: Post) => void; // parent কে আপডেট জানানোর callback
}

export const Event = ({ post, onDelete, onUpdate }: EventProps) => {
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [editDate, setEditDate] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editImage, setEditImage] = useState<File | null>(null);

  const handleUpdate = async () => {
    if (!editingPost) return;

    const formData = new FormData();
    formData.append("date", editDate);
    formData.append("description", editDescription);
    if (editImage) formData.append("image", editImage);

    try {
      const res = await fetch(
        `http://localhost:9001/api/posts/update/${editingPost.id}`,
        { method: "PUT", body: formData }
      );

      if (!res.ok) throw new Error();

      const updatedPost: Post = await res.json();

      onUpdate(updatedPost); // parent কে জানাও আপডেট হয়েছে

      setEditingPost(null);
      alert("পোস্ট আপডেট হয়েছে ✅");
    } catch (error) {
      alert("আপডেট করা যায়নি ❌");
    }
  };

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card shadow-sm p-3 rounded-4 h-auto">
        {/* DATE */}
        <div className="card shadow-sm p-3 rounded-4 bg-primary-subtle">
          <h6 className="text-danger-emphasis mb-1 text-center">
            📅 {new Date(post.date).toLocaleDateString()}
          </h6>
          <p className="mb-1 text-warning-emphasis">{post.description}</p>
        </div>

        {/* IMAGE */}
        {post.imageUrl && (
          <div
            className="d-flex gap-2 mt-2"
            style={{ overflowX: "auto", whiteSpace: "nowrap" }}
          >
            <img
              src={`http://localhost:9001/uploads/${post.imageUrl}`}
              alt="post"
              className="rounded-3"
              style={{
                height: 150,
                width: 200,
                objectFit: "cover",
                cursor: "pointer",
                flexShrink: 0,
              }}
              onClick={() =>
                window.open(
                  `http://localhost:9001/uploads/${post.imageUrl}`,
                  "_blank"
                )
              }
            />
          </div>
        )}

        {/* ACTION BUTTONS */}
        <div className="mt-3">
          <button
            className="btn btn-sm btn-outline-primary me-2"
            onClick={() => {
              setEditingPost(post);
              setEditDate(post.date.split("T")[0]);
              setEditDescription(post.description);
              setEditImage(null);
            }}
          >
            ✏️ Edit
          </button>

          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => onDelete(post.id)}
          >
            🗑 Delete
          </button>
        </div>
      </div>

      {/* EDIT MODAL */}
      {editingPost && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,.5)" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content rounded-4">
              <div className="modal-header">
                <h5 className="modal-title">✏️ Edit Post</h5>
                <button
                  className="btn-close"
                  onClick={() => setEditingPost(null)}
                />
              </div>

              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label fw-semibold">তারিখ</label>
                  <input
                    type="date"
                    className="form-control"
                    value={editDate}
                    onChange={(e) => setEditDate(e.target.value)}
                    required
                  />
                </div>

                <textarea
                  className="form-control mb-3"
                  rows={4}
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />

                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  onChange={(e) => setEditImage(e.target.files?.[0] || null)}
                />

                {editingPost.imageUrl && (
                  <img
                    src={`http://localhost:9001/uploads/${editingPost.imageUrl}`}
                    className="img-fluid mt-3 rounded"
                  />
                )}
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setEditingPost(null)}
                >
                  Cancel
                </button>

                <button className="btn btn-primary" onClick={handleUpdate}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
