import React from "react";
import Dropzone from "react-dropzone";
import {BsPlay} from 'react-icons/bs';
import {MdOutlineDriveFolderUpload} from 'react-icons/md';
import Swal from "sweetalert2";
import { AppContext } from "../../../Context";


function VideoFilePicker({ showVideo, handleChange, children }) {


  /* USE CONTEXT */
  let {SelectEvent,setSelectEvent,
    SelectHorse,setSelectHorse}=React.useContext(AppContext);

  const fileInputChange=(event)=>{

     
    if(SelectEvent && SelectHorse!==false){
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
    {({getRootProps}) => (
      <label 
      id={`${showVideo ? "file_picker_small" : ""}`}
      className={`file_picker `} {...getRootProps()}>
          <span className='textdragContainer'>Arrastre el video aquí</span>
          <span className='textdragContainer'>{"o"}</span>
          <span className='buttonAnalisis btnHoverWhite'><MdOutlineDriveFolderUpload className='iconVideo'/><span className='textButtonVideo'>Subir video</span></span>
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
 

}

export default VideoFilePicker;
