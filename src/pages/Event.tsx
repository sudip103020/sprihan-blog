import type { Post } from "./ViewPostsPage";

interface EventProps {
  post: Post;
  onDelete: (id: string) => void;
}

export const Event = ({ post, onDelete }: EventProps) => {
  return (
    <div className="col-md-6 col-lg-4 container my-5 ">
      <div className="card shadow-sm border-0 rounded-4 h-100">
        {/* DATE */}
        <div className="text-center py-3 bg-light border-bottom">
          <span className="badge bg-primary px-3 py-2">
            📅 {new Date(post.date).toLocaleDateString()}
          </span>
        </div>

        {/* IMAGE */}
        {post.imageUrl && (
          <div style={{ width: "100%" }}>
            <img 
              src={`http://localhost:9001/uploads/${post.imageUrl}`}
              alt="post"
              style={{
                width: "100%",
                height: "270px",
                objectFit: "cover",
                display: "block",
                position: "static", // 🔥 VERY IMPORTANT
              }}
            />
          </div>
        )}

        {/* DESCRIPTION */}
        <div className="card-body">
          <p className="text-muted mb-0" style={{ lineHeight: "1.6" }}>
            {post.description}
          </p>
        </div>

        <div className="card-footer bg-white border-0 d-flex justify-content-end">
          {/* <button className="btn btn-sm btn-outline-primary">Edit</button> */}

          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => onDelete(post.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
