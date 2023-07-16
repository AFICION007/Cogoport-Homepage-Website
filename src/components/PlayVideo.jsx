import React from "react";
import "./css/PlayVideo.css";

const PlayVideo = () => {
  return (
    <div className="play-video-main-container">
      <img
        className="play-video-background"
        src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fhomepage-video.png&w=3840&q=75"
      />
      <div className="play-video-subcontainer">
        <img
          className="play-video-play-button"
          src="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/play-button-white.png"
        />
      </div>
    </div>
  );
};

export default PlayVideo;
