import React, { useContext } from 'react'
import { themecontext } from '../App'
function ChildC() {
     const {theme,settheme}=useContext(themecontext);
    function toggleclick(){if (theme==="light"){settheme("dark")}
    else {settheme("light")}}
   
  return (
    
      <div><div><button className='border-2 border-black p-2 rounded-lg hover:bg-black hover:text-white backdrop-blur-md shadow-2xl' onClick={toggleclick}>CLICK ME</button></div></div>
    
  )
}

export default ChildC
