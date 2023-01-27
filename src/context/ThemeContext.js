import { createContext,useContext, useState } from "react";


const ThemeContext=createContext();



export const ThemeContextProvider=({children})=>{
 const {theme,setTheme}=useState();
    const values={

      theme,
      setTheme,

    }

return <ThemeContext.Provider value={values}> {children}</ThemeContext.Provider>



}



export const UseContext=()=>{

const context=useContext(ThemeContext);

if (context===undefined) {
    

    throw new Error("context must be within contextProvider")


}



}