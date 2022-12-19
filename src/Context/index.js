import React from 'react';
import { App } from 'react-bootstrap-icons';


const AppContext=React.createContext();





function ProviderContext(props){

    /* ESTADISTIC STATE */

    let [StadisticVideo,setStatisticVideo]=React.useState(false);





    return (
        
        <AppContext.Provider value={{
            StadisticVideo,setStatisticVideo
        }}>
            {props.children}
        </AppContext.Provider>
          
        
        
    
    );
}



export {ProviderContext,AppContext}