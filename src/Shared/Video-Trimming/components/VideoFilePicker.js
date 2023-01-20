import React from "react";
import Dropzone from "react-dropzone";
import {BsPlayBtn,BsPlay} from 'react-icons/bs';
import {MdOutlineDriveFolderUpload} from 'react-icons/md';
import  {BsFillCollectionPlayFill,BsCollectionPlay} from 'react-icons/bs';
import {FiPlayCircle} from 'react-icons/fi';
import {HiOutlinePlay} from 'react-icons/hi';
import {CiPlay1} from 'react-icons/ci'
import {SiAirplayvideo} from 'react-icons/si';
import {MdSmartDisplay} from 'react-icons/md';
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
          text:'formato valido: mp4'
        })
      }
      
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Asegurate de seleccionar un ejemplar asociado a un evento',
      })
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
          <BsPlay className='iconFilm'/>
          <span className='textdragContainer'>Arraste el video aquí</span>
          <span className='textdragContainer'>{""}</span>
          <span className='buttonAnalisis btnHoverWhite'><MdOutlineDriveFolderUpload className='iconVideo'/><span className='textButtonVideo'>Subir video</span></span>

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
