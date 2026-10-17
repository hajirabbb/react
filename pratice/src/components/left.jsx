import React from 'react';
import background from '/building.png'
import logo from '/logo.jpeg'

const Left = () =>{
    return(
         <div className='relative flex-1 overflow-hidden ' >
             <img src={background} alt="Ghipss building" className ="size-full object-cover block"/>
                 <div className="absolute top-6 left-6 z-1 flex items-center gap-2.5 font-bold">
                            <img src={logo} alt="GhIPSS Logo" className="w-17.5 h-17.5 rounded-full object-contain"  />
                            <span>GHIPSS</span>
                     </div>
             </div>
    );

}
export default Left