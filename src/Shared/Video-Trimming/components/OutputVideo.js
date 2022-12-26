
import React from "react";


const OutputVideo = ({ handleDownload, videoSrc ,loading}) => {
  return videoSrc ? (
      <>
      <video src={videoSrc}   width="450" className="videoStyles"></video>
      <button onClick={handleDownload} className="btn btn_g">
        {" "}
        download
      </button>
      </>
      
  ) : null;
};

export default OutputVideo;
