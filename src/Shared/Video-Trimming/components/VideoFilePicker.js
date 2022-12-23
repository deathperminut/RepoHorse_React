import React from "react";
import {BsPlayBtn} from 'react-icons/bs';
import {MdOutlineDriveFolderUpload} from 'react-icons/md';

function VideoFilePicker({ showVideo, handleChange,videoSrc, children }) {
  const FileInput = () => (
    <label
      htmlFor="x"
      id={`${showVideo ? "file_picker_small" : ""}`}
      className={`file_picker `}
    >
      <BsPlayBtn className='iconFilm'/>
      <span className='textdragContainer'>Arraste o ponga el video aquí</span>
      <span className='textdragContainer'>o</span>
      <span className='buttonAnalisis'><MdOutlineDriveFolderUpload className='iconVideo'/><span className='textButtonVideo'>Subir archivos</span></span>

      <input onChange={handleChange} type="file" id="x" accept="video/mp4" />
    </label>
  );
 
  return(showVideo ? (<> {children} </>)  : <FileInput />)
}

export default VideoFilePicker;
