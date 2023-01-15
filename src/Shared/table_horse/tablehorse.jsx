import React from 'react';
import {BsFillPlayFill} from 'react-icons/bs';
import Table from 'react-bootstrap/Table';
import HorsePhoto from '../../Sources/Images//Estadisticas/HorsePhoto.jpg';
import ReactPlayer from 'react-player';
import Conteo from '../../Sources/Video/Conteo.mp4';
import './tablehorse.css';
// import  Video from  '../../Sources/Video/MessiCampeon.mp4';

export default function Tablehorse() {
  
    /* ARRAY */
    let ListHorse=[
      {
        name:"Condel del viento",
        Edad:"38 meses",
        Andar:"P4",
        Tipo:"C Caballar",
        BPM: 500,
        Puntos: 55555,
        id:1
      },
      {
        name:"Condel del viento",
        Edad:"38 meses",
        Andar:"P4",
        Tipo:"C Caballar",
        BPM: 500,
        Puntos: 55555,
        id:2
      },
      {
        name:"Condel del viento",
        Edad:"38 meses",
        Andar:"P4",
        Tipo:"C Caballar",
        BPM: 500,
        Puntos: 55555,
        id:3
      },
      {
        name:"Condel del viento",
        Edad:"38 meses",
        Andar:"P4",
        Tipo:"C Caballar",
        BPM: 500,
        Puntos: 55555,
        id:4
      },
      {
        name:"Condel del viento",
        Edad:"38 meses",
        Andar:"P4",
        Tipo:"C Caballar",
        BPM: 500,
        Puntos: 55555,
        id:5
      },
      {
        name:"Condel del viento",
        Edad:"38 meses",
        Andar:"P4",
        Tipo:"C Caballar",
        BPM: 500,
        Puntos: 55555,
        id:6
      },
      {
        name:"Condel del viento",
        Edad:"38 meses",
        Andar:"P4",
        Tipo:"C Caballar",
        BPM: 500,
        Puntos: 55555,
        id:7
      },
      {
        name:"Condel del viento",
        Edad:"38 meses",
        Andar:"P4",
        Tipo:"C Caballar",
        BPM: 500,
        Puntos: 55555,
        id:8
      },
      {
        name:"Condel del viento",
        Edad:"38 meses",
        Andar:"P4",
        Tipo:"C Caballar",
        BPM: 500,
        Puntos: 55555,
        id:9
      },
      {
        name:"Condel del viento",
        Edad:"38 meses",
        Andar:"P4",
        Tipo:"C Caballar",
        BPM: 500,
        Puntos: 55555,
        id:10
      },
    ];

    /*USE STATE */
    let [ShowVideo,setShowVideo]=React.useState(false);

  return (
             <>
             {ShowVideo===false ?
            
            <>
                <Table>
                            <thead>
                                <tr>
                                <th className='titletext'>Nombre</th>
                                <th className='titletext'>Edad</th>
                                <th className='titletext'>Andar</th>
                                <th className='titletext'>Tipo</th>
                                <th className='titletext'>BPM</th>
                                <th className='titletext'>Puntos</th>
                                <th className='titletext'>Videos</th>
                                </tr>
                            </thead>
                            <tbody className='tablebody'>
                                {ListHorse.map(Horse=>{
                                return(
                                    
                                    <tr key={Horse.id}>
                                        <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText middle-size'>{Horse.name}</span></td>
                                        <td className='b-none text-table second-size'>{Horse.Edad}</td>
                                        <td className='b-none text-table second-size '>{Horse.Andar}</td>
                                        <td className='b-none text-table second-size '>{Horse.Tipo}</td>
                                        <td className='b-none'><span className='BPMData middle-size'>{Horse.BPM}</span></td>
                                        <td className='b-none'><span className='PointData middle-size'>{Horse.Puntos}</span></td>
                                        <td className='b-none' onClick={()=>setShowVideo(true)}>
                                            <div className='iconVideoPlayContainer'>
                                            <BsFillPlayFill className='iconVideoPlay'/>
                                            </div>
                                        </td>
                                    </tr>
                                );
                                    
                                })}
                                
                                
                            </tbody>
                </Table> 
            </>
            :
            <>
               
            <ReactPlayer className="VideoPlayer"   controls={true} url={Conteo} playing={true} width={'100%'} height={'100%'} youtubeConfig={{ playerVars: { showinfo: 1 } }}/>
            <button className='buttonVideo' onClick={()=>setShowVideo(false)}>X</button>

            </>
          }


             </>  
              


                    
  );
}
