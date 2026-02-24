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
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/posts/all");
        if (!res.ok) throw new Error("Failed to fetch posts");

        const data: Post[] = await res.json();
        const sorted = data.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setPosts(sorted);
      } catch {
        setError("পোস্ট লোড করা যায়নি ❌");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm("আপনি কি নিশ্চিতভাবে এই পোস্টটি মুছে দিতে চান?"))
      return;

    try {
      const res = await fetch(`http://localhost:8080/api/posts/delete/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error();

      setPosts((prev) => prev.filter((p) => p.id !== id));
      alert("পোস্ট মুছে দেওয়া হয়েছে ✅");
    } catch {
      alert("পোস্ট মুছে দেওয়া যায়নি ❌");
    }
  };

  const handleUpdate = (updatedPost: Post) => {
    // পুরানো পোস্ট লিস্টে আপডেটেড পোস্ট replace করা
    setPosts((prev) =>
      prev.map((p) => (p.id === updatedPost.id ? updatedPost : p))
    );
  };

  return (
    <div className="container">
      <h3 className="fw-bold text-primary mb-4">📝 All Posts from Database</h3>

      {loading && (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">লোড হচ্ছে...</span>
          </div>
        </div>
      )}

      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && posts.length === 0 && (
        <div className="alert alert-info text-center">
          কোনো পোস্ট পাওয়া যায়নি।
        </div>
      )}

      <div className="row g-4">
        {posts.map((post) => (
          <Event
            key={post.id}
            post={post}
            onDelete={handleDelete}
            onUpdate={handleUpdate} // এখানে আপডেট ফাংশন পাঠানো
          />
        ))}
      </div>
    </div>
  );
};

export default ViewPostsPage;
