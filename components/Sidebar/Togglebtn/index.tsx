import { useState } from "react"

export default function ToggleBtn(){
    const [toggleState, SettoggleState] = useState(false);
    return(
        <div className="w-[48px] h-[25px] rounded-full bg-[#FBBF04] flex items-center px-[1px]
             cursor-pointer transition duration-[1500ms] ease-in-out"
            onClick={()=>SettoggleState(!toggleState)}>
            <div className={`w-[24px] h-[24px] rounded-full bg-white transition-all duration-1000 ease-in-out ${toggleState ? '' : 'ml-auto mr-0'}`}></div>
        </div>
    )
}