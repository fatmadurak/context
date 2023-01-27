import React from 'react'
import { UseTheme } from '../context/ThemeContext'


function ChangeTheme() {
 const {theme,setTheme}=UseTheme();
 console.log(theme)

  return (
    <div>


    active theme:{theme}
    
    <br/>
    <br/>
    <button onClick={()=>setTheme("dark")}>ChangeTheme</button>
    <hr/>
    </div>
  )
}

export default ChangeTheme