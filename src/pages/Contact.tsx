import "bootstrap/dist/css/bootstrap.min.css";

export default function LocationSection() {

  const latitude = 23.692194;
  const longitude = 90.432056;

  const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <div className="container py-5">

      {/* Title */}
      <div className="text-center mb-4">
        <h2 className="fw-bold text-danger">📍 Memory Location</h2>
        <p className="text-muted">
          Where this beautiful moment happened
        </p>
      </div>

      {/* Card */}
      <div className="card shadow-lg border-0 rounded-4 overflow-hidden">

        {/* Google Map */}
        <iframe
          src={`https://www.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`}
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>

        {/* Location Info */}
        <div className="p-4 text-center bg-light">

          <h5 className="fw-bold mb-2">📍 Exact Location</h5>

          <p className="text-muted mb-3">
            23°41'31.9"N 90°25'55.4"E
          </p>

          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-danger px-4 py-2 rounded-pill"
          >
            📍 Open in Google Maps
          </a>

        </div>

      </div>

    </div>
  );
}
