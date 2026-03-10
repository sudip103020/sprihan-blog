import React, { useRef, } from "react";

interface VideoPlayerProps {
  src: string;
  width?: number;
  height?: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  width = 300,
  height = 200,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  // const [isPlaying, setIsPlaying] = useState(false);

  // const togglePlay = () => {
  //   if (!videoRef.current) return;
  //   if (videoRef.current.paused) {
  //     videoRef.current.play();
  //     setIsPlaying(true);
  //   } else {
  //     videoRef.current.pause();
  //     setIsPlaying(false);
  //   }
  // };

  // const handleFullscreen = () => {
  //   if (!videoRef.current) return;
  //   if (videoRef.current.requestFullscreen) {
  //     videoRef.current.requestFullscreen();
  //   }
  // };

  return (
    <div style={{ maxWidth: width, margin: "auto" }}>
      <video
        ref={videoRef}
        style={{ width: "100%", height: height, borderRadius: 8, objectFit: "cover" }}
        controls
      >
        <source src={src} type="video/mp4" />
        আপনার ব্রাউজার ভিডিও সাপোর্ট করছে না
      </video>
      <div
        style={{
          marginTop: 8,
          display: "flex",
          gap: 10,
          justifyContent: "center",
        }}
      >
        {/* { <button onClick={togglePlay} style={{ padding: "5px 10px" }}>
          {isPlaying ? "Pause ⏸️" : "Play ▶️"}
        </button>
        <button onClick={handleFullscreen} style={{ padding: "5px 10px" }}>
          Fullscreen 🔳
        </button> *} */}
      </div>
    </div>
  );
};

export default VideoPlayer;
