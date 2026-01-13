import { useEffect, useState } from "react";

interface Post {
  id: string;
  date: string;
  description: string;
  image: string;
}

const PostsView = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:9001/api/posts/all")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container my-5">
      <h3 className="fw-bold text-primary mb-4">📝 All Posts</h3>

      {posts.length === 0 ? (
        <div className="text-center text-muted border rounded-4 p-5">
          এখনো কোনো পোস্ট নেই
        </div>
      ) : (
        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-md-4 mb-4">
              <div className="card h-100">
                {post.image && (
                  <img
                    src={`http://localhost:9001/uploads/${post.image}`}
                    className="card-img-top"
                    alt="post"
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{new Date(post.date).toLocaleDateString()}</h5>
                  <p className="card-text">{post.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostsView;
