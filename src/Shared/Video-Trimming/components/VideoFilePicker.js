import React from "react";
import {BsPlayBtn} from 'react-icons/bs';
import {MdOutlineDriveFolderUpload} from 'react-icons/md';
import { AppContext } from "../../../Context";

function VideoFilePicker({ showVideo,thumbNails,StatisticVideo, handleChange,videoSrc, children }) {

  let {StadisticVideo}=React.useContext(AppContext);

   React.useEffect(()=>{
     console.log("StadisticVideo",StadisticVideo)
  },[StadisticVideo])
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

  if(showVideo){
          return(
            <>
            {children}
            </>
          )
  }else{
    return( <FileInput />)
  }
 
  // return(thumbNails ? 
  //   (<>
  //   {children}
  //    </>)  
  //   : 
    
  //   <FileInput />)
}

export default VideoFilePicker;
