import React from 'react';
import { App } from 'react-bootstrap-icons';


const AppContext=React.createContext();





function ProviderContext(props){

    /* STATISDIC VIDEO (ANALIZAR) */

    let [StadisticVideo,setStatisticVideo]=React.useState(false);
    const [inputVideoFile, setInputVideoFile] = React.useState(null);
    const [videoMeta, setVideoMeta] = React.useState(null);
    const [trimmedVideoFile, setTrimmedVideoFile] = React.useState(null);
    const [URL, setURL] = React.useState([]);
    const [trimIsProcessing, setTrimIsProcessing] = React.useState(false);
    const [rStart, setRstart] = React.useState(0);
    const [rEnd, setRend] = React.useState(100);
    const [thumbNails, setThumbNails] = React.useState([]);
    const [thumbnailIsProcessing, setThumbnailIsProcessing] = React.useState(false);
    const [originalVideo,setOriginalVideo]=React.useState(null);
    const [cutVideo,setCutVideo]=React.useState(false);
    const [dowload,setDowload]=React.useState(false);

    /* LOADING */
    const [loading,setLoading]=React.useState(false);


    /* FUNCTIONS */
    const sleep = async (milliseconds) => {
        await new Promise(resolve => {
            return setTimeout(resolve, milliseconds)
        });
    };


    /* ArratEvents */

    let [events,setEvents]=React.useState([]);
    let [eventChoosed,setEventChoosed]=React.useState({
        img:'',
        name:'',
        number:'',
        date_start:'',
        date_end:'',
        place:'',
        description:'',
        horses:[],
       });
    
    let [selectEvents,setSelectEvents]=React.useState([]);
   

    





    return (
        
        <AppContext.Provider value={{
            StadisticVideo,setStatisticVideo,inputVideoFile, setInputVideoFile
            ,videoMeta, setVideoMeta , trimmedVideoFile, setTrimmedVideoFile,URL, setURL, trimIsProcessing, setTrimIsProcessing,rStart, setRstart,rEnd, setRend
            ,thumbNails, setThumbNails,thumbnailIsProcessing, setThumbnailIsProcessing,loading,setLoading,originalVideo,setOriginalVideo,cutVideo,setCutVideo,
            dowload,setDowload,sleep,events,setEvents,eventChoosed,setEventChoosed,selectEvents,setSelectEvents
        }}>
            {props.children}
        </AppContext.Provider>
          
        
        
    
    );
}



export {ProviderContext,AppContext}