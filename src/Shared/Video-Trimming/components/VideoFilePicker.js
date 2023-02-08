import React from "react";
import Dropzone from "react-dropzone";
import {BsPlay} from 'react-icons/bs';
import {MdOutlineDriveFolderUpload} from 'react-icons/md';
import Swal from "sweetalert2";
import { AppContext } from "../../../Context";



function VideoFilePicker({ showVideo, handleChange, children }) {

  

  const browser = () => {
    if (typeof window !== 'undefined' && 'navigator' in window) {
      const { userAgent } = window.navigator;
      console.log("NAVEGADOR: ",userAgent);
      if (userAgent.indexOf('Chrome') !== -1) return 'Chrome';
      if (userAgent.indexOf('Firefox') !== -1) return 'Firefox';
      if (userAgent.indexOf('Safari') !== -1) return 'Safari';
      if (userAgent.indexOf('Edge') !== -1) return 'Edge';
      if (userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident/') !== -1) return 'Internet Explorer';
    }
    return 'Unknown';
  };

  const browserType = browser();
  console.log("NAVEGADOR:  ",browserType);


  /* USE CONTEXT */
  let {SelectEvent,setSelectEvent,
    SelectHorse,setSelectHorse}=React.useContext(AppContext);
  

  async function createFile(URL){
      let response = await fetch(URL);
      let data = await response.blob();
      let metadata = {
        type: 'video/mp4'
      };
      let file = new File([data], "video.mp4", metadata);
      return file;

  }

  const fileInputChange= async (event)=>{

    console.log("evento: ",event);

     
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
  const fileInputChange_safari= async (event)=>{
     
    if(SelectEvent && SelectHorse!==false){
   
        if(event.target.files[0].type==="video/mp4"){
          let Object={target:{files:event.target.files}}
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
  const [isSafari, setIsSafari] = React.useState(false);

  React.useEffect(() => {
    setIsSafari(window.navigator.userAgent.indexOf("Safari") > -1 &&
                window.navigator.userAgent.indexOf("Chrome") === -1);
  }, []);

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
      className={`file_picker `} {...getRootProps()} >
          <span className='textdragContainer'>Arrastre el video aquí</span>
          <span className='textdragContainer'>{"o"}</span>
          <span className='buttonAnalisis btnHoverWhite'><MdOutlineDriveFolderUpload className='iconVideo'/><span className='textButtonVideo'>Subir video</span></span>
          {isSafari ? <input style={{visibility:"hidden"}} type="file" onChange={fileInputChange_safari}  /> : <></>}
          
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
