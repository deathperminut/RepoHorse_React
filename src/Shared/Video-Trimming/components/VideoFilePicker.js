import React from "react";
import Dropzone from "react-dropzone";
import {BsPlayBtn} from 'react-icons/bs';
import {MdOutlineDriveFolderUpload} from 'react-icons/md';
import Swal from "sweetalert2";
import { AppContext } from "../../../Context";


function VideoFilePicker({ showVideo,thumbNails,StatisticVideo, handleChange,videoSrc, children }) {


  /* USE CONTEXT */
  let {SelectEvent,setSelectEvent,
    SelectHorse,setSelectHorse}=React.useContext(AppContext);

  const fileInputChange=(event)=>{
     
    if(SelectEvent && SelectHorse){
      if(event[0].type==="video/mp4"){
        let Object={target:{files:event}}
        handleChange(Object);
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Tipo de archivo invalido',
        })
      }
      
    }else{
      
    }
    

  }

  let {StadisticVideo}=React.useContext(AppContext);

   React.useEffect(()=>{
     console.log("StadisticVideo",StadisticVideo)
  },[StadisticVideo])
  const FileInput = () => (
    <>

    <Dropzone onDrop={acceptedFiles => fileInputChange(acceptedFiles)} >
    {({getRootProps, getInputProps}) => (
      <label htmlFor="x"
      id={`${showVideo ? "file_picker_small" : ""}`}
      className={`file_picker `} {...getRootProps()}>
          <BsPlayBtn className='iconFilm'/>
          <span className='textdragContainer'>Arraste o ponga el video aquí</span>
          <span className='textdragContainer'>o</span>
          <span className='buttonAnalisis btnHoverWhite'><MdOutlineDriveFolderUpload className='iconVideo'/><span className='textButtonVideo'>Subir archivos</span></span>

          {/* <input onChange={handleChange} type="file" id="x" accept="video/mp4" />  */}

      </label>
    )}
    </Dropzone>
     

    </>
    
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
