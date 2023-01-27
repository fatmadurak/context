import React from 'react'
import { UseTheme } from '../context/ThemeContext'


function ChangeTheme() {
 const {theme,setTheme}=UseTheme();


  return (
    <div>


    active theme:{theme}
    
    <br/>
    <br/>
    <button onClick={()=>setTheme("light")}>ChangeTheme</button>
    <hr/>
    </div>
  )
}

export default ChangeTheme