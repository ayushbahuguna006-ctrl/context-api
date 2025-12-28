import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildC'
const themecontext=createContext();
function App() {
const [theme,settheme]=useState("light")

  return (
    <>
    <themecontext.Provider value={{theme,settheme}}>
      <div className='min-h-screen flex justify-center items-center font-bold border-2 bg-cyan-100 ' style={{backgroundColor:theme==="light"?"yellow":"green"}}>
         <ChildA />
      </div>
    </themecontext.Provider>
    </>
  )
}

export default App
export {themecontext}
