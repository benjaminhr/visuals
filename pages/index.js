import React from "react";

const VideosPage = () => {
  const videos = [
    "floor-plans",
    "crust",
    "map-slow",
    "digital",
    "figures",
    "getting-there",
    "triphobia",
  ];
  return (
    <div>
      <p id="title">visuals 2024</p>
      <div className="video-container">
        {videos.map((video, i) => {
          return (
            <video controls key={i}>
              <source src={`demos/${video}.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          );
        })}
      </div>
    </div>
  );
};

export default VideosPage;
