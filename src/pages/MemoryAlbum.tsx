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
  title: "🎉 Sprihan Halder’s All Memories",
  name: "Sprihan Halder",
  DOB: "30-10-2025",
  place: "Dhaka, Bangladesh",
  Email: "sprihanhalder@gmail.com",
  imageUr2: "/babay276.jpg",
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
      b.Description.toLowerCase().includes(search.toLowerCase()),
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
      ),
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
    <div key={person.id} className="col-12 col-sm-6 col-lg-4 profile-sticky">
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
            
            className="container py-3 px-2"
            
          >
            {person.imageId.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="memory"
                className="rounded-3"
                style={{
                  height: 80,
                  width: 80,
                  maxWidth: "100%",

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
      <div className="container py-3">
        {/* LEFT PROFILE */}
        <div
          style={{
            position: window.innerWidth < 768 ? "static" : "sticky",
            top: 40,

            height: "fit-content",
            paddingLeft: window.innerWidth < 768 ? 10 : 0,
            paddingRight: window.innerWidth < 768 ? 10 : 0,
          }}
        >
          <div className="card shadow-lg p-4 rounded-4">
            <div className="d-flex align-items-center">
              <div>
                <h5 className="text-danger-emphasis">{user.title}</h5>
                <p className="text-warning-emphasis mb-1">Name: {user.name}</p>
                <small className="text-info-emphasis d-block">
                  DOB: {user.DOB}
                </small>
                <small className="text-info-emphasis d-block">
                  Email: {user.Email}
                </small>
                <small className="text-secondary-emphasis">Birth Place: {user.place}</small>
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
          placeholder="Search By Date (DD-MM-YYYY) or Description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* RIGHT CONTENT */}
        <div
          style={{
            overflowY: "auto",

            maxHeight: window.innerWidth < 768 ? "auto" : "calc(100vh - 160px)",

            paddingRight: 5,
          }}
        >
          <div className="row g-4">{listitem}</div>
        </div>
      </div>

      {/* 🔍 MODAL */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex={-1}>
          <div
            className={`modal-dialog modal-dialog-centered ${window.innerWidth < 500 ? "" : "modal-lg"}`}
          >
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
