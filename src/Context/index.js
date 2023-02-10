import React from 'react';
import { App } from 'react-bootstrap-icons';
import  HorsePhoto from '../Sources/Images/Estadisticas/HorsePhoto.jpg'

const AppContext=React.createContext();





function ProviderContext(props){

    /* USER INFO */

    let [userData,setUserData]=React.useState(null);
    let [token,setToken]=React.useState(null);


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

    /* VIDEO PLAYER LOADING*/
    let [Loading_video,setLoading_video]=React.useState(false);

    /* LOADING */
    const [loading,setLoading]=React.useState(false);

    /* RESET VIDEO */
    let [Video_original,setVideo_original]=React.useState(null);
    let [RETURN_ORIGINAL,setRETURN_ORIGINAL]=React.useState(false);
    let [cutCount,setcutCount]=React.useState(false);


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

    let [events,setEvents]=React.useState(null);
    let [horses,setHorses]=React.useState(null);
    let [showModal,setshowModal]=React.useState(true);

    let [typeModel,setTypeModel]=React.useState("Tipo");


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


    const CloseSesion=()=>{
        /* USER INFO */

     setUserData(null);
     setToken(null);


    /* STATISDIC VIDEO (ANALIZAR) */

    setStatisticVideo(false);
    setInputVideoFile(null);
    setVideoMeta(null);
    setTrimmedVideoFile(null);
    setURL([]);
    setTrimIsProcessing(false);
    setRstart(0);
    setRend(100);
    setThumbNails([]);
    setThumbnailIsProcessing(false);
    setOriginalVideo(null);
    setCutVideo(false);
    setDowload(false);

    /* LOADING */
    setLoading(false);
   
    /* FOR VIDEO EDITOR INFO */
    setSelectEvent(false);
    setSelectHorse(false);


    /* ArratEvents */

    setEvents(null);
    setHorses(null);

    


    setEventChoosed({
        img:'',
        name:'',
        number:'',
        date_start:'',
        date_end:'',
        place:'',
        description:'',
        horses:[],
       });
    
    setSelectEvents([]);
    
    /* LIMPIAMOS EL SESSION STORAGE */
    sessionStorage.setItem("UserHorseAppSessionStorage",null);
    sessionStorage.setItem('TokenUserHorseApp', null);
    



    }
   

    /* FUNCTIONS EVENTS */

    const loadEventsForSelect=()=>{
        
        let Array=[];
        
        if(events!==null){

            for (var i=0;i<events.length;i++){
                let element={value:events[i].id,label:events[i].nombre_evento}
                Array.push(element);
            }
    
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


    /* UBICATE HORSES */

    const ubicateHorses=(eventsCopy,horsesCopy)=>{
        console.log("CABALLOS: ",horsesCopy);
        console.log("EVENTOS: ",eventsCopy);
        if(eventsCopy.length!==0){
            for (var i=0;i<eventsCopy.length;i++){
                let ArrayHorses=[];
                for (var h=0;h<horsesCopy.length;h++){
                    if(horsesCopy[h].id_evento_id===eventsCopy[i].id){
                        let hs=horsesCopy[h];

                        if(hs.video_esqueleto_guardado===null){
                            hs = {...hs,['video_esqueleto_guardado']:""}
                        }

                        if(hs.video_guardado===null){
                            hs={...hs,['video_guardado']:""}
                        }

                        if(hs.imagen !== ""){
                           hs={...hs,['imagen']:'https://back.orcas-buho.com.co/'+hs['imagen']} 
                        }

                        if(hs.video_original !==""){
                            hs={...hs,['video_original']:''}  
                        }

                        if(hs.video_procesado!==""){
                            hs={...hs,['video_procesado']:''}   
                        }
                        if(hs.video_esqueleto!==""){
                            hs={...hs,['video_esqueleto']:''}   
                        }
                        
                        if(hs.video_esqueleto_guardado!==""){
                            hs={...hs,['video_esqueleto_guardado']:hs['video_esqueleto_guardado']} 
                        }
                        

                        if(hs.video_guardado!==""){
                            hs={...hs,['video_guardado']:'https://back.orcas-buho.com.co/'+hs['video_guardado']} 
                        }
                        console.log("CABALLOS EJEMPLO: ",hs);
                        ArrayHorses.push(hs);
                    }
                }
                eventsCopy[i]['Horses']=ArrayHorses;
                eventsCopy[i]['imagen']='https://back.orcas-buho.com.co/'+eventsCopy[i]['imagen'];
                if(eventsCopy[i]['video_procesado']!==""){
                    eventsCopy[i]['video_procesado']='https://back.orcas-buho.com.co/'+eventsCopy[i]['video_procesado'];
                    eventsCopy[i]['video_original']='https://back.orcas-buho.com.co/'+eventsCopy[i]['video_original'];
                }
                
            }
            console.log("eventos mas caballos: ",eventsCopy);
            setEvents(eventsCopy);
        }else{
            console.log("eventos mas caballos: ",eventsCopy);
            setEvents(eventsCopy);
        }
        
        
    }






    return (
        
        <AppContext.Provider value={{
            token,setToken,userData,setUserData,horses,setHorses,ubicateHorses,
            StadisticVideo,setStatisticVideo,inputVideoFile, setInputVideoFile
            ,videoMeta, setVideoMeta , trimmedVideoFile, setTrimmedVideoFile,URL, setURL, trimIsProcessing, setTrimIsProcessing,rStart, setRstart,rEnd, setRend
            ,thumbNails, setThumbNails,thumbnailIsProcessing, setThumbnailIsProcessing,loading,setLoading,originalVideo,setOriginalVideo,cutVideo,setCutVideo,
            dowload,loadEventsForSelect,setDowload,sleep,events,setEvents,eventChoosed,setEventChoosed,selectEvents,setSelectEvents,FindEventId,SelectEvent,setSelectEvent,cutCount,setcutCount
            ,SelectHorse,setSelectHorse,CloseSesion,Loading_video,setLoading_video,showModal,setshowModal,typeModel,setTypeModel,Video_original,setVideo_original,RETURN_ORIGINAL,setRETURN_ORIGINAL
        }}>
            {props.children}
        </AppContext.Provider>
          
        
        
    
    );
}



export {ProviderContext,AppContext}