import { useState } from "react";
import checkSvg from '../assets/image/notifications/checkboxIcon.svg'
import Image from "next/image";

export default function Tcheckbox(){
    const [showstate, setshowstate] = useState(false);
    return(
        <>
            {
                showstate ? <Image src={checkSvg} width={24} alt={""} className="rounded-md" onClick={()=>setshowstate(false)}/>
                :  <div className="w-[20px] h-[20px] rounded-md border-solid border-gray-500 border-[2px]"
                    onClick={()=>setshowstate(true)}>
                </div>
            }
        </>
    )
}