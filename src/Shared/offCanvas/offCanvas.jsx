import React from "react";
import { NavLink } from "react-router-dom";
import './offCanvas.css';
import Logo from '../../Sources/Images/Landing/Logo.png'
/* ICONS */
import { GiHorseshoe} from 'react-icons/gi';
import {MdVideoSettings} from 'react-icons/md';
import {IoMdExit} from 'react-icons/io';
import {GoGraph} from 'react-icons/go';
import Logo_only from '../../Sources/Images/Landing/logo_only.png';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context";
import { getAllEvents } from "../../Services/Events/events";
import { getAllHorses } from "../../Services/Horses/horse";
import Preloader from "../preloader/preloader";





function OffCanvas() {

     /* NAVIGATE */
    const navigate=useNavigate();

    let {token,setToken,setUserData,horses,setHorses,events,setEvents,loading,setLoading,ubicateHorses,CloseSesion}=React.useContext(AppContext);


    React.useEffect(()=>{
      
     if(token===null){
        //Get of session Storage
        let UserData=JSON.parse(sessionStorage.getItem('UserHorseAppSessionStorage'));
        let Token=JSON.parse(sessionStorage.getItem('TokenUserHorseApp'));
        console.log(UserData,Token);
        if(UserData===null || Token ===null){
            Swal.fire({
                icon: 'error',
                title: 'Sesión finalizada',
            })
            navigate('/Landing/Inicio');

        }else{
            setUserData(UserData);
            setToken(Token);
            //getEvents And Horses.
            getEvents(Token);
        }
        
     }else{
        if(events===null){
            getEvents(token);
         }


    }
        



    },[token])


    /* GET EVENTS */

    const getEvents=async(Token)=>{

        setLoading(true);


        let result=undefined;
        
        result=await getAllEvents(Token).catch((error)=>{
            setLoading(false);
            console.log("No hay eventos.",error); // NO HAY EVENTOS CREADOS.
            setEvents([]);

        })
        if (result!==undefined){
            console.log("eventos cargados con exito.",result['data']);
            //setEvents(result['data']);
            getHorses(Token,result['data']);
        }
    }
    /* GET Horses */

    const getHorses=async(Token,events)=>{

           let result=undefined;
        
          result=await getAllHorses(Token).catch((error)=>{
            setLoading(false);
            console.log("no hay caballos",error);
            //setHorses([]);
            ubicateHorses(events,[]);
          })
          if (result!==undefined){
            setLoading(false);
            console.log("Caballos cargados con exito.",result['data']);
            //setHorses(result['data']);
            ubicateHorses(events,result['data']);
          }

          //ASOCIAMOS LOS CABALLOS A LOS EVENTOS DETERMINADOS.
          
          

        }




    
    
    const Exit=()=>{
        Swal.fire({
            title: '¿Seguro que desea cerrar sesión?',
            showDenyButton: true,
            confirmButtonText: 'Si',
            denyButtonText: 'No',
          }).then(async (result) => {
            if (result.isConfirmed) {
               /* NAVIGATE  */
               CloseSesion();
               navigate('/Landing/Inicio');
            }
         })
    
    }
    
  return (
    <>
            {
                loading ?
                <>
                <Preloader></Preloader>
                </>
                :

                <></>
            }

        <nav className='offCanvasContainer'>
            <img  className='LogoOffcanvas_only' src={Logo_only} alt="hola"></img>
            <img  className='LogoOffcanvas' src={Logo} alt=""></img>
            <ul className="ulOffcanvas">
                <li className="sectionOffcanvas ">
                <NavLink
                    to="/Main/HorseApp/Analisis"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                    <MdVideoSettings className="iconOffCanvas"/><span className="textOffcanvas middle-size">Analizar</span>
                </NavLink>
                </li>
                <li className="sectionOffcanvas ">
                <NavLink
                    to="/Main/HorseApp/Competiciones"
                   
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    
                >
                    <GiHorseshoe className="iconOffCanvas"/><span className="textOffcanvas middle-size">Competencias y caballos</span>
                </NavLink>
                </li>
                <li className="sectionOffcanvas ">
                <NavLink
                    to="/Main/HorseApp/Estadisticas"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                    <GoGraph className="iconOffCanvas"/><span className="textOffcanvas middle-size">Estadisticas</span>
                </NavLink>
                </li>
                <li className="sectionOffcanvas ">
                <NavLink
                className={({ isActive }) => (isActive ? 'inactive mt-c' : 'inactive mt-c')} onClick={Exit} >
                    <IoMdExit className="iconOffCanvas gray hover-white"/><span className="textOffcanvas middle-size gray">Cerrar sesión</span>
                </NavLink>
                </li>
                
            </ul>
        </nav>
    
    </>
    
  );
}

export default OffCanvas

