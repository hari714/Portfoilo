    import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react";
import { cn } from "./Lib/Ulits"; 
    export const Toggle =() =>{
   
    const [isDarkMode,setISDarkMode]=useState(false);


    useEffect(()=>{
        const storedtheme = localStorage.getItem("theme");
        if(storedtheme === "dark"){
            setISDarkMode(true);
             document.documentElement.classList.add("dark");
        }else{
              localStorage.setItem("rheme","light");
            setISDarkMode(false);
        }
    })

    const toggle =()=>{
        if(isDarkMode){
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme","light");
            setISDarkMode(false);
        }
        else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
            setISDarkMode(true);
        }
    }

        return(
            <button onClick={toggle} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-hidden "
            )}>
                {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"/>:<Moon className="h-6 w-6 text-blue-900"/>}
                </button>

        )
    }