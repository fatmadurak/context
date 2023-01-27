import React from 'react'
import  {UseTheme} from '../context/ThemeContexts';


function ChangeTheme() {
 const {theme,toggle}=UseTheme();


  return (
    <div>


    active theme:{theme}
    
    <br/>
    <br/>
    <button onClick={()=>toggle}>ChangeTheme</button>
    <hr/>
    </div>
  )
}

export default ChangeTheme