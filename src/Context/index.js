import React from 'react';
import { App } from 'react-bootstrap-icons';
import  HorsePhoto from '../Sources/Images/Estadisticas/HorsePhoto.jpg'

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
    
    /* FOR VIDEO EDITOR INFO */
    let [SelectEvent,setSelectEvent]=React.useState(false);
    let [SelectHorse,setSelectHorse]=React.useState(false);


    /* ArratEvents */

    let [events,setEvents]=React.useState([
        {img:HorsePhoto,
        name:'65° Feria Equina',
        number:'21',
        date_start:'2021-05-10',
        date_end:'2021-05-16',
        place:'Manizales',
        description:'',
        horses:[],
    id:0},
    {img:HorsePhoto,
        name:'65° Feria Equina',
        number:'21',
        date_start:'2021-05-10',
        date_end:'2021-05-16',
        place:'Manizales',
        description:'',
        horses:[],
    id:4},{img:HorsePhoto,
        name:'65° Feria Equina',
        number:'21',
        date_start:'2021-05-10',
        date_end:'2021-05-16',
        place:'Manizales',
        description:'',
        horses:[],
    id:3},
    {img:HorsePhoto,
        name:'65° Feria Equina',
        number:'21',
        date_start:'2021-05-10',
        date_end:'2021-05-16',
        place:'Manizales',
        description:'',
        horses:[],
    id:2},{img:HorsePhoto,
        name:'65° Feria Equina',
        number:'21',
        date_start:'2021-05-10',
        date_end:'2021-05-16',
        place:'Manizales',
        description:'',
        horses:[],
    id:1}
    ]);
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
   

    /* FUNCTIONS EVENTS */

    const loadEventsForSelect=()=>{
        
        let Array=[];

        for (var i=0;i<events.length;i++){
            let element={value:events[i].id,label:events[i].name}
            Array.push(element);
        }

        setSelectEvents(Array);
    }

    const FindEventId=(id)=>{
        let result=null;
        for (var i=0;i<events.length;i++){
            if(events[i].id===id){
                result=events[i];
                break;
            }
        } 
        return result;
    }






    return (
        
        <AppContext.Provider value={{
            StadisticVideo,setStatisticVideo,inputVideoFile, setInputVideoFile
            ,videoMeta, setVideoMeta , trimmedVideoFile, setTrimmedVideoFile,URL, setURL, trimIsProcessing, setTrimIsProcessing,rStart, setRstart,rEnd, setRend
            ,thumbNails, setThumbNails,thumbnailIsProcessing, setThumbnailIsProcessing,loading,setLoading,originalVideo,setOriginalVideo,cutVideo,setCutVideo,
            dowload,loadEventsForSelect,setDowload,sleep,events,setEvents,eventChoosed,setEventChoosed,selectEvents,setSelectEvents,FindEventId,SelectEvent,setSelectEvent
            ,SelectHorse,setSelectHorse
        }}>
            {props.children}
        </AppContext.Provider>
          
        
        
    
    );
}



export {ProviderContext,AppContext}