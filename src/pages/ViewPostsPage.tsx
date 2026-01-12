import "bootstrap/dist/css/bootstrap.min.css";

interface Post {
  id: number;
  post_date: string;
  image: string;
  comment: string;
}

const dummyPosts: Post[] = [
  {
    id: 1,
    post_date: "2026-01-10",
    image: "/babu1.png",
    comment: "আজ আমার ব্লগের প্রথম পোস্ট।"
  },
  {
    id: 2,
    post_date: "2026-01-11",
    image: "/babu1.png",
    comment: "React + PostgreSQL নিয়ে কাজ করছি।"
  }
];

const ViewPostsPage = () => {
  return (
    <div className="container my-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold text-primary">📸 All Blog Posts</h3>
      </div>

      {/* Posts */}
      <div className="row g-4">
        {dummyPosts.map((post) => (
          <div key={post.id} className="col-md-6 col-lg-4">
            <div className="card shadow-sm border-0 rounded-4 h-100">

              {/* Image */}
              <img
                src={post.image}
                className="card-img-top rounded-top-4"
                alt="Post"
                style={{
                  height: "220px",
                  objectFit: "cover"
                }}
              />

              {/* Body */}
              <div className="card-body">
                <span className="badge bg-secondary mb-2">
                  📅 {post.post_date}
                </span>

                <p className="mt-3 text-muted">
                  {post.comment}
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

export default ViewPostsPage;
