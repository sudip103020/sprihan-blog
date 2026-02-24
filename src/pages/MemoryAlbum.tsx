import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { people } from "./memorylist";


interface Person {
  id: number;
  Date_of_memory: string;
  Description: string;
  imageId: string[];
}

const user = {
  title: "👨‍👩‍👧‍👦 Sprihan Halder’s All Memories",
  name: "Sprihan Haldar",
  DOB: "30-10-2025",
  place: "Dhaka, Bangladesh",
  imageUr2: "/babu1.png",
  imageSize: 100,
  imageSize1: 100,
};

const MemoryAlbum = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeImages, setActiveImages] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  const openAlbum = (images: string[], index: number) => {
    setActiveImages(images);
    setActiveIndex(index);
    setShowModal(true);
  };

   const filteredBooks = people.filter(
    (b) =>
      b.Date_of_memory.toLowerCase().includes(search.toLowerCase()) ||
      b.Description.toLowerCase().includes(search.toLowerCase())
  );

  const highlightText = (text: string) => {
  if (!search) return text;

  const regex = new RegExp(`(${search})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    part.toLowerCase() === search.toLowerCase() ? (
      <span key={index} style={{ backgroundColor: "yellow" }}>
        {part}
      </span>
    ) : (
      part
    )
  );
};


  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % activeImages.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? activeImages.length - 1 : prev - 1));
  };

  // TypeScript-safe scroll refs
  const scrollRefs = useRef<(HTMLDivElement | null)[]>(
    Array.from({ length: people.length }, () => null),
  );

  const listitem = filteredBooks.map((person: Person, idx) => (
  <div key={person.id} className="col-12 col-md-6 col-lg-4 profile-sticky">

      <div className="card shadow-sm p-3 rounded-4 h-auto">
        <div>
          {/* DATE & DESCRIPTION */}
          <div className="card shadow-sm p-3 rounded-4 bg-primary-subtle">
         <h6 className="text-danger-emphasis text-center">
  {highlightText(person.Date_of_memory)}
</h6>

<p className="text-warning-emphasis">
  {highlightText(person.Description)}
</p>

          </div>

          {/* 📸 ALBUM GRID */}
          <div
            ref={(el) => {
              (scrollRefs.current as HTMLDivElement[])[idx] = el!;
            }}
            className="d-flex gap-2 mt-2"
            style={{
              overflowX: "auto",
              whiteSpace: "nowrap",
            }}
          >
            {person.imageId.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="memory"
                className="rounded-3"
                style={{
                  height: window.innerWidth < 500 ? 60 : 80,
                  width: window.innerWidth < 500 ? 60 : 80,

                  objectFit: "cover",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
                onClick={() => openAlbum(person.imageId, index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div
      className="d-flex justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="d-flex flex-column gap-4"
        style={{
          maxWidth: 1200,
          width: "100%",
          padding: "20px",
          minHeight: "100vh",
        }}
      >
        {/* LEFT PROFILE */}
        <div
          style={{
            position: window.innerWidth < 768 ? "static" : "sticky",
            top: 40,

            height: "fit-content",
          }}
        >
          <div className="card shadow-lg p-4 rounded-4">
            <div className="d-flex align-items-center">
              <div>
                <h5 className="text-danger-emphasis">{user.title}</h5>
                <p className="text-warning-emphasis mb-1">{user.name}</p>
                <small className="text-info-emphasis d-block">
                  DOB: {user.DOB}
                </small>
                <small className="text-secondary-emphasis">{user.place}</small>
              </div>
              <img
                className="rounded-circle border ms-auto"
                src={user.imageUr2}
                alt="profile"
                style={{
                  width: user.imageSize,
                  height: user.imageSize1,
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>

        <input
        placeholder="Search By Date or Description..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />


        {/* RIGHT CONTENT */}
        <div
          style={{
            overflowY: "auto",
          
            maxHeight: "calc(100vh - 160px)",
            paddingRight: 5,
          }}
        >
          <div className="row g-4">{listitem}</div>
        </div>
      </div>

      {/* 🔍 MODAL */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content rounded-4">
              <div className="modal-header">
                <h5 className="modal-title">📸 Memory Album</h5>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                />
              </div>

              <div className="modal-body text-center">
                <img
                  src={activeImages[activeIndex]}
                  alt="active memory"
                  className="img-fluid rounded-3"
                  style={{
                    maxHeight: "70vh",
                    objectFit: "contain",
                  }}
                />
                <div className="d-flex justify-content-between mt-3">
                  <button className="btn btn-primary" onClick={prevImage}>
                    Prev
                  </button>
                  <button className="btn btn-primary" onClick={nextImage}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoryAlbum;
