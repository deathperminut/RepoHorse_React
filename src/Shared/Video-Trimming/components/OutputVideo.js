
import React from "react";


const OutputVideo = ({ handleDownload, videoSrc }) => {
  return videoSrc ? (
      <>
      <video src={videoSrc} autoPlay controls muted width="450"></video>
      <button onClick={handleDownload} className="btn btn_g">
        {" "}
        download
      </button>
      </>
      
  ) : null;
};

export default OutputVideo;
