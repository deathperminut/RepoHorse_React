import React from 'react'
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import * as helpers from "../utils/helpers";
import VideoFilePicker from "../components/VideoFilePicker";
import RangeInput from "../components/RangeInput";
import './videoTrimmer.css';
import '../styles/globals.css';
import { AppContext } from '../../../Context';
import Preloader_2 from '../../preloader/preloader_2/preloader_2';
import Preloader_3 from '../../preloader/preloader_2/preloader_3';


const FF = createFFmpeg({
    log: false,
  });
  
  (async function () {
    await FF.load();
  })();



export default function     VideoTrimmer() {

    /*USAMOS EL CONTEXT*/
    let {Loading_video, setLoading_video,StadisticVideo,setStatisticVideo,inputVideoFile, setInputVideoFile
      ,videoMeta, setVideoMeta , trimmedVideoFile, setTrimmedVideoFile,URL, setURL, trimIsProcessing, setTrimIsProcessing,rStart, setRstart,rEnd, setRend
      ,thumbNails, setThumbNails,thumbnailIsProcessing, setThumbnailIsProcessing,setLoading,originalVideo,setOriginalVideo,
      cutVideo,setCutVideo,dowload,setDowload}=React.useContext(AppContext); 


      /*USE STATE */


      



    
  
    const handleChange = async (e) => {
      console.log("entra");
      let file = e.target.files[0];
      let fileCopy=new File([file], 'project.mp4',{type: "video/mp4"});
      setInputVideoFile(fileCopy);
      //setLoading_video(true);
      setLoading(true);
      // setStatisticVideo(true);
      let Filedowload=await helpers.readFileAsBase64(fileCopy);
      setURL(Filedowload);
      setTrimmedVideoFile(Filedowload);
    };
  
    const handleLoadedData = async (e) => {
      console.log("entramos aqui",originalVideo);
      
      // if(originalVideo!=null){
      //   return;
      // }
      // console.dir(ref.current);
  
      const el = e.target;
  
      const meta = {
        name: 'project.mp4',
        duration: el.duration,
        videoWidth: el.videoWidth,
        videoHeight: el.videoHeight
      };
      console.log("sera=:",{ meta },inputVideoFile);
      setVideoMeta(meta);
      const thumbNails = await getThumbnails(meta);
      setThumbNails(thumbNails);
      
      
    };

    
  
    const getThumbnails = async ({ duration }) => {
      if (!FF.isLoaded()) await FF.load();
      //setThumbnailIsProcessing(true);
      setRstart(0);
      setRend(100);
      let MAX_NUMBER_OF_IMAGES = 15;
      let NUMBER_OF_IMAGES = duration < MAX_NUMBER_OF_IMAGES ? duration : 15;
      
      let offset =
        duration === MAX_NUMBER_OF_IMAGES ? 1 : duration / NUMBER_OF_IMAGES;
      console.log("NUmeros",NUMBER_OF_IMAGES,duration,offset);
      const arrayOfImageURIs = [];
      FF.FS("writeFile", inputVideoFile.name, await fetchFile(inputVideoFile));
      
      if(NUMBER_OF_IMAGES<13){
        NUMBER_OF_IMAGES=15;
        if(offset<1.2){
          offset=0.1;
        }
        
        
      }
      
      for (let i = 0; i < NUMBER_OF_IMAGES; i++) {
        let startTimeInSecs = helpers.toTimeString(Math.round(i * offset));
  
        try {
          await FF.run(
            "-ss",
            startTimeInSecs,
            "-i",
            inputVideoFile.name,
            "-t",
            "00:00:1.00",
            "-vf",
            `scale=150:-1`,
            `img${i}.png`
          );
          const data = FF.FS("readFile", `img${i}.png`);
  
          let blob = new Blob([data.buffer], { type: "image/png" });
          let dataURI = await helpers.readFileAsBase64(blob);
          
          FF.FS("unlink", `img${i}.png`);
          arrayOfImageURIs.push(dataURI);
        } catch (error) {
          console.log({ message: error });
        }
      }
      //setLoading_video(false);
      setLoading(false);
      setThumbnailIsProcessing(false);
      setStatisticVideo(true);

  
      return arrayOfImageURIs;
    };
  
    const handleTrim = async () => {
      //setLoading_video(true);
      setLoading(true);
      setTrimIsProcessing(true);
      setCutVideo(false);
      

     
      let startTime = ((rStart / 100) * videoMeta.duration).toFixed(2);
      let offset = ((rEnd / 100) * videoMeta.duration - startTime).toFixed(2);
      console.log(
        startTime,
        offset,
        helpers.toTimeString(startTime),
        helpers.toTimeString(offset)
      );
  
      try {
        FF.FS("writeFile", inputVideoFile.name, await fetchFile(inputVideoFile));
        // await FF.run('-ss', '00:00:13.000', '-i', inputVideoFile.name, '-t', '00:00:5.000', 'ping.mp4');

        await FF.run(
          "-ss",
          helpers.toTimeString(startTime),
          "-i",
          inputVideoFile.name,
          "-t",
          helpers.toTimeString(offset),
          "-c",
          "copy",
          "ping.mp4"
        );
  
        const data = FF.FS("readFile", "ping.mp4");
        console.log("data: ",data);
        const dataURL = await helpers.readFileAsBase64(
          new Blob([data.buffer], { type: "video/mp4" })
        );
        console.log("data",data);
        console.log("dataURL",dataURL);
  
        setTrimmedVideoFile(dataURL);
        //setInputVideoFile(dataURL);
        
        if(originalVideo===null){
          setOriginalVideo(URL);
        }
        setURL(dataURL);
      } catch (error) {
        console.log(error);
      } finally {
        setTrimIsProcessing(false);
      }

    };
  
    const handleUpdateRange = (func) => {
      return ({ target: { value } }) => {
        func(value);
      };
    };

    React.useEffect(()=>{
     if(cutVideo){
      handleTrim();
     }
    },[cutVideo])
    React.useEffect(()=>{
      if(dowload){
        helpers.download(trimmedVideoFile);
        setDowload(false);
      }
     },[dowload])

     const updateTime=(event)=>{
      let Video=document.getElementById('VideoPlayerHorseApp');
      if(videoMeta!=null){
        let end=((rEnd / 100) * videoMeta.duration).toFixed(2);
        if (Video.currentTime >= end){
          let Start=((rStart / 100) * videoMeta.duration).toFixed(2);
          Video.currentTime=Start
          //Video.stop();
        }
      }
      
     }
   
    return (
      <>
      {
                Loading_video ?
                <>
                <Preloader_2/>
                
                </>
                :

                <></>
      }
      {
                Loading_video ?
                <>
                <Preloader_3/>
                
                </>
                :

                <></>
      }

          
           
           
      

            <VideoFilePicker
              handleChange={handleChange}
              showVideo={!!inputVideoFile}
              thumbNails={thumbNails}
              videoSrc={trimmedVideoFile}
            >
              
            
                  <video
                  onTimeUpdate={updateTime}
                  id='VideoPlayerHorseApp'
                  className={`videoStyles ${StadisticVideo ? "display-flex" : "display-none"}`}
                  src={inputVideoFile ? URL : null}
                  controls
                  autoplay
                  onLoadedMetadata={handleLoadedData}
                  width="620"
                  height="400"
                >
              
                </video>
                

            </VideoFilePicker>

        {
          <>
            <RangeInput
              rEnd={rEnd}
              rStart={rStart}
              handleUpdaterStart={handleUpdateRange((event)=>{
                setRstart(event);
                let Video=document.getElementById('VideoPlayerHorseApp');
                let startTime=((event / 100) * videoMeta.duration).toFixed(2);
                Video.currentTime=startTime;
                console.log(helpers.toTimeString(startTime));
              })}
              handleUpdaterEnd={handleUpdateRange(setRend)}
              loading={thumbnailIsProcessing}
              videoMeta={videoMeta}
              control={
                <>

                </>

              }
              thumbNails={thumbNails}
            />
          </>
        }

      </>
        
    );
}

export async function getServerSideProps(context) {
    // set HTTP header
  
    context.res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    context.res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    console.log({ isSecureContext: context });
    return {
      props: {}
    };
  }
