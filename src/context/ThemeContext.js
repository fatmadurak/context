import { createContext,useContext, useState } from "react";


const ThemeContext=createContext();



 export const ThemeContextProvider=({children})=>{
 const {theme,setTheme}=useState("light");
    const values={

      theme,
      setTheme,

    }

return <ThemeContext.Provider value={values}> {children}</ThemeContext.Provider>



}

export const UseTheme=()=>{

const context=useContext(ThemeContext);

if (context===undefined) {
    

    throw new Error("context must be within contextProvider")


}

return context;

}