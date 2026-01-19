import { useEffect, useState } from "react";
import { Event } from "./Event";
import "bootstrap/dist/css/bootstrap.min.css";

export interface Post {
  id: string;
  date: string;
  imageUrl?: string;
  description: string;
}

const ViewPostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:9001/api/posts/all")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then((data) => {
        const sorted = data.sort(
          (a: Post, b: Post) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
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

  return (
    <div className="container">
      <h3 className="fw-bold text-primary mb-4">📝 All Posts</h3>

      {loading && <div className="text-center">⏳ লোড হচ্ছে...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row g-4">
        {posts.map((post) => (
          <Event key={post.id} post={post} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default ViewPostsPage;
