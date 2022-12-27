import React from 'react'
import { useState } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import * as helpers from "../utils/helpers";
import VideoFilePicker from "../components/VideoFilePicker";
import OutputVideo from "../components/OutputVideo";
import RangeInput from "../components/RangeInput";
import './videoTrimmer.css';
import '../styles/globals.css';
import { AppContext } from '../../../Context';



const FF = createFFmpeg({
    log: false,
  });
  
  (async function () {
    await FF.load();
  })();



export default function     VideoTrimmer() {

    /*USAMOS EL CONTEXT*/
    let {StadisticVideo,setStatisticVideo}=React.useContext(AppContext); 


    const [inputVideoFile, setInputVideoFile] = useState(null);
    const [trimmedVideoFile, setTrimmedVideoFile] = useState(null);
    // const ref = useRef();
    const [videoMeta, setVideoMeta] = useState(null);
    const [URL, setURL] = useState([]);
    const [trimIsProcessing, setTrimIsProcessing] = useState(false);
  
    const [rStart, setRstart] = useState(0);
    const [rEnd, setRend] = useState(100);
    const [thumbNails, setThumbNails] = useState([]);
    const [thumbnailIsProcessing, setThumbnailIsProcessing] = useState(false);
  
    const handleChange = async (e) => {
      let file = e.target.files[0];
      setInputVideoFile(file);
      // setStatisticVideo(true);
  
      setURL(await helpers.readFileAsBase64(file));
    };
  
    const handleLoadedData = async (e) => {
      // console.dir(ref.current);
  
      const el = e.target;
  
      const meta = {
        name: inputVideoFile.name,
        duration: el.duration,
        videoWidth: el.videoWidth,
        videoHeight: el.videoHeight
      };
      console.log("sera=:",{ meta });
      setVideoMeta(meta);
      const thumbNails = await getThumbnails(meta);
      setThumbNails(thumbNails);
    };

    
  
    const getThumbnails = async ({ duration }) => {
      if (!FF.isLoaded()) await FF.load();
      setThumbnailIsProcessing(true);
      let MAX_NUMBER_OF_IMAGES = 15;
      let NUMBER_OF_IMAGES = duration < MAX_NUMBER_OF_IMAGES ? duration : 15;
      let offset =
        duration === MAX_NUMBER_OF_IMAGES ? 1 : duration / NUMBER_OF_IMAGES;
  
      const arrayOfImageURIs = [];
      FF.FS("writeFile", inputVideoFile.name, await fetchFile(inputVideoFile));
  
      for (let i = 0; i < NUMBER_OF_IMAGES; i++) {
        let startTimeInSecs = helpers.toTimeString(Math.round(i * offset));
  
        try {
          await FF.run(
            "-ss",
            startTimeInSecs,
            "-i",
            inputVideoFile.name,
            "-t",
            "00:00:1.000",
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
      setThumbnailIsProcessing(false);
      setStatisticVideo(true);
  
      return arrayOfImageURIs;
    };
  
    const handleTrim = async () => {
      setTrimIsProcessing(true);
  
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
        console.log(data);
        const dataURL = await helpers.readFileAsBase64(
          new Blob([data.buffer], { type: "video/mp4" })
        );
  
        setTrimmedVideoFile(dataURL);
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
  
    return (
      <>
      

            <VideoFilePicker
              handleChange={handleChange}
              showVideo={!!inputVideoFile}
              thumbNails={thumbNails}
              videoSrc={trimmedVideoFile}
            >
               <video
                  
                  className={`videoStyles ${StadisticVideo ? "display-flex" : "display-none"}`}
                  src={inputVideoFile ? URL : null}
                  controls
                  muted
                  onLoadedMetadata={handleLoadedData}
                  width="620"
                  height="400"
                ></video>
                

            </VideoFilePicker>
          <OutputVideo
            videoSrc={trimmedVideoFile}
            handleDownload={() => helpers.download(trimmedVideoFile)}
            loading={thumbnailIsProcessing}
          />
        {
          <>
            <RangeInput
              rEnd={rEnd}
              rStart={rStart}
              handleUpdaterStart={handleUpdateRange(setRstart)}
              handleUpdaterEnd={handleUpdateRange(setRend)}
              loading={thumbnailIsProcessing}
              videoMeta={videoMeta}
              control={
                <div className="u-center">
                  <button
                    onClick={handleTrim}
                    className="btn btn_b"
                    disabled={trimIsProcessing}
                  >
                    {trimIsProcessing ? "trimming..." : "trim selected"}
                  </button>
                </div>
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
