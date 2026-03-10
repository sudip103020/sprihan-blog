import VideoPlayer from "./VideoPlayer";
import "bootstrap/dist/css/bootstrap.min.css";
import { people } from "./videolist";

export default function Video() {
  return (
    <div className="container py-5">
      {/* Caption */}
      <div className="text-center mb-4">
        <h2 className="fw-bold text-danger">🎥 Sprihan's Video Memories</h2>
        <p className="text-muted">Little moments captured forever ❤️</p>
      </div>

      {/* Video Grid */}
      <div className="row g-4">
        {people.map((person) => (
          <div key={person.id} className="col-12 col-sm-6 col-md-4">
            <div className="card shadow-sm border-0 rounded-4 overflow-hidden h-100">
              {/* Video */}
              <VideoPlayer src={person.imageId} />

              {/* Caption */}
              <div className="p-3 text-center">
                <h6 className="fw-bold mb-1">👶 {person.Description}</h6>

                <small className="text-muted">📅 {person.Date_of_memory}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
