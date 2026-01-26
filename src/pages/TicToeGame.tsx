import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export interface Post {
  id: string;
  date: string;
  imageUrl?: string;
  description: string;
}

const tictoe = () => {
  const [posts, setPosts] = useState<Post[]>([]);
 
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [editDescription, setEditDescription] = useState("");
  const [editImage, setEditImage] = useState<File | null>(null);

  useEffect(() => {
    fetch("http://localhost:9001/api/posts/all")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then((data) => {
        const sorted = data.sort(
          (a: Post, b: Post) =>
            new Date(b.date).getTime() - new Date(a.date).getTime(),
        );
        setPosts(sorted);
        // setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("পোস্ট লোড করা যায়নি ❌");
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm("আপনি কি নিশ্চিতভাবে এই পোস্টটি মুছে দিতে চান?"))
      return;

    try {
      const res = await fetch(`http://localhost:9001/api/posts/delete/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error();

      setPosts((prev) => prev.filter((p) => p.id !== id));
      alert("পোস্ট মুছে দেওয়া হয়েছে ✅");
    } catch {
      alert("পোস্ট মুছে দেওয়া যায়নি ❌");
    }
  };

  const handleUpdate = async () => {
  if (!editingPost) return;

  const formData = new FormData();
  formData.append("description", editDescription);

  if (editImage) {
    formData.append("image", editImage);
  }

  try {
    const res = await fetch(
      `http://localhost:9001/api/posts/update/${editingPost.id}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    if (!res.ok) throw new Error();

    const updatedPost = await res.json();

    setPosts((prev) =>
      prev.map((p) => (p.id === updatedPost.id ? updatedPost : p))
    );

    setEditingPost(null);
    alert("পোস্ট আপডেট হয়েছে ✅");
  } catch {
    alert("আপডেট করা যায়নি ❌");
  }
};


  return (
    <div className="container my-5">
      <h3 className="fw-bold text-primary mb-4">📝 All Posts</h3>

      <div className="row g-4">
        {posts.map((post) => (
          <div key={post.id} className="col-12">
            <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
              <div className="row g-0">
                {/* LEFT: Text */}
                <div className="col-md-4 p-4 d-flex flex-column justify-content-start">
                  <span className="badge bg-primary mb-3">
                    📅 {new Date(post.date).toLocaleDateString()}
                  </span>
                  <p className="text-muted mb-0">{post.description}</p>
                </div>

                {/* RIGHT: Image */}
                {post.imageUrl && (
                  <div className="col-md-8">
                    <img
                      src={`http://localhost:9001/uploads/${post.imageUrl}`}
                      alt="post"
                      className="img-fluid w-100 h-100"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )}
                <div className="mt-3">
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => {
                      setEditingPost(post);
                      setEditDescription(post.description);
                      setEditImage(null);
                    }}
                  >
                    ✏️ Edit
                  </button>

                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDelete(post.id)}
                  >
                    🗑 Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editingPost && (
  <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,.5)" }}>
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

export default tictoe;
