import Sidebar from "../Sidebar"
import {useDispatch} from 'react-redux'
import { setorders } from "../../utils/slice/ordersSlice"
import { useEffect, useState } from "react";
import Image from "next/image";
import flashLogo from '../assets/logo/logo.png';
import Menubar from "../Sidebar/Menu";
import ToggleBtn from "../Sidebar/Togglebtn";
import Tcheckbox from "./Tcheckbox";
import orderIcon from '../assets/image/notifications/orderIcon.svg';
export default function Notifications(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setorders(2));
    },[dispatch])
    const [selectbtn, setSelectbtn] = useState([true,false,false,true,false,false]);
    const handleSelect = (m:number, index:number) =>{
        if(index == 1){
            const tmpState = [false,false,false,selectbtn[3],selectbtn[4],selectbtn[5]];
            tmpState[m] = true;
            setSelectbtn(tmpState);    
        }
        else{
            const tmpState = [selectbtn[0],selectbtn[1],selectbtn[2],false,false,false];
            tmpState[m] = true;
            setSelectbtn(tmpState);    
        }
    } 
    return(
        <div className="w-auto m-0 p-0">
            <Sidebar/>
            <div className="ml-[300px] max-lg:ml-0 bg-[#1E1E2F] p-4">
                <div className="flex flex-row items-center">
                    <h3 className="text-[42px] max-lg:hidden max-lg:text-lg max-md:text-base max-sm:text-sm font-bold text-white">Notification Settings</h3>
                    <div className="lg:hidden flex flex-row items-center">
                      <Image src={flashLogo} width={24} alt={"flash logo"}/>
                      <h3 className='text-[18px] max-md:text-base max-sm:text-sm ml-3 text-white'>Flash Merchant</h3>    
                    </div>
                    <div className=" ml-auto max-lg:hidden">
                        <input type="date" className="px-4 py-3 max-sm:px-2 max-sm:py-1"/>
                    </div>
                    <div className="lg:hidden ml-auto">
                        <Menubar/>
                    </div>
                </div>
                <h3 className="mt-4 lg:hidden max-lg:text-lg max-md:text-base max-sm:text-sm font-bold text-white">
                    Notification Settings
                </h3>
                <div className="mt-4 flex min-[1419px]:justify-between max-[1419px]:flex-wrap max-[1419px]:justify-center">
                    <div className="w-[266px] max-[1419px]:m-2 max-sm:w-full max-sm:flex rounded-lg bg-[#27293D] p-3">
                        <h3 className="text-white">New Order Notification</h3>
                        <div className="mt-[60px] max-sm:mt-0 max-sm:ml-auto">
                            <ToggleBtn/>
                        </div>
                    </div>
                    <div className="w-[266px] max-[1419px]:m-2 max-sm:w-full max-sm:flex rounded-lg bg-[#27293D] p-3">
                        <h3 className="text-white">Order Cancelation Notification</h3>
                        <div className="mt-[60px] max-sm:mt-0 max-sm:ml-auto">
                            <ToggleBtn/>
                        </div>
                    </div>
                    <div className="w-[266px] max-[1419px]:m-2 max-sm:w-full max-sm:flex rounded-lg bg-[#27293D] p-3">
                        <h3 className="text-white">New Order Notification</h3>
                        <div className="mt-[60px] max-sm:mt-0 max-sm:ml-auto">
                            <ToggleBtn/>
                        </div>
                    </div>
                    <div className="w-[266px] max-[1419px]:m-2 max-sm:w-full max-sm:flex rounded-lg bg-[#27293D] p-3">
                        <h3 className="text-white">Order Cancelation Notification</h3>
                        <div className="mt-[60px] max-sm:mt-0 max-sm:ml-auto">
                            <ToggleBtn/>
                        </div>
                    </div>
                </div>
                <div className="mt-5">{/*email*/}
                    <h3 className="text-[18px] text-white">Send me email notifications:</h3>
                    <div className="mt-2 flex flex-row items-center cursor-pointer" onClick={()=>handleSelect(0,1)}>
                        {selectbtn[0] ? <Image src={orderIcon} alt={""}/> : <div className="w-[18px] h-[18px] rounded-full border-gray-500 border-[2px]"></div>}
                        <h3 className="text-[14px] text-white ml-3">Send me email notifications:</h3>
                    </div>
                    <div className="mt-2 flex flex-row items-center cursor-pointer" onClick={()=>handleSelect(1,1)}>
                        {selectbtn[1] ? <Image src={orderIcon} alt={""}/> : <div className="w-[18px] h-[18px] rounded-full border-gray-500 border-[2px]"></div>}
                        <h3 className="text-[14px] text-white ml-3">Once an hour at most</h3>
                    </div>
                    <div className="mt-2 flex flex-row items-center cursor-pointer" onClick={()=>handleSelect(2,1)}>
                        {selectbtn[2] ? <Image src={orderIcon} alt={""}/> : <div className="w-[18px] h-[18px] rounded-full border-gray-500 border-[2px]"></div>}
                        <h3 className="text-[14px] text-white ml-3">Never</h3>
                    </div>
                </div>
                <div className="mt-10">
                    <h3 className="text-white text-[18px]">Email News & Updates</h3>
                    <div className="mt-1 max-w-[604px]">
                        <h3 className="text-[14px] text-[#BCBBB9]">Lorem Ipsum is simply dummy text of  the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h3>
                        <div className="mt-2 flex flex-row items-center">
                            <Tcheckbox/>
                            <h3 className="text-white text-[14px] ml-3">Tips and Tricks</h3>
                        </div>
                        <div className="mt-2 flex flex-row items-center">
                            <Tcheckbox/>
                            <h3 className="text-white text-[14px] ml-3">Offers and Promotions</h3>
                        </div>
                        <div className="mt-2 flex flex-row items-center">
                            <Tcheckbox/>
                            <h3 className="text-white text-[14px] ml-3">New Order Notification</h3>
                        </div>
                        <div className="mt-2 flex flex-row items-center">
                            <Tcheckbox/>
                            <h3 className="text-white text-[14px] ml-3">Order Cancelation Notification</h3>
                        </div>
                    </div>
                </div>
                <div className="mt-8 mb-4">{/*Sign-in Notification*/}
                    <h3 className="text-[18px] text-white">Sign-in Notifications</h3>
                    <div className=" max-w-[604px] mt-2">
                        <h3 className="text-[#BCBBB9] text-[14px]">These emails help keep your Substance account secure. If you haven’t already, you should also enable two-factor authentication.</h3>
                    </div>
                    <div className="mt-2 flex flex-row cursor-pointer" onClick={()=>handleSelect(3,2)}>
                        {selectbtn[3] ? <Image src={orderIcon} alt={""} className=" self-start mt-1"/> : <div className="min-w-[18px] min-h-[18px] rounded-full border-gray-500 border-[2px] self-start mt-1"></div>}
                        <div className="flex flex-col ml-3">
                            <h3 className="text-[14px] text-white">Most secure</h3>
                            <h3 className="text-[14px] text-[#BCBBB9]">Receive an email anytime someone signs in to your Cuboid account from an unrecognized device.</h3>
                        </div>
                    </div>
                    <div className="mt-2 flex flex-row cursor-pointer" onClick={()=>handleSelect(4,2)}>
                        {selectbtn[4] ? <Image src={orderIcon} alt={""} className=" self-start mt-1"/> : <div className="min-w-[18px] min-h-[18px] rounded-full border-gray-500 border-[2px] mt-[3px] self-start"></div>}
                        <div className="flex flex-col ml-3">
                            <h3 className="text-[14px] text-white">Standart</h3>
                            <h3 className="text-[14px] text-[#BCBBB9]">Receive an email anytime someone signs in to your Cuboid account from an unrecognized device.</h3>
                        </div>
                    </div>
                    <div className="mt-2 flex flex-row cursor-pointer" onClick={()=>handleSelect(5,2)}>
                        {selectbtn[5] ? <Image src={orderIcon} alt={""} className=""/> : <div className="w-[18px] h-[18px] rounded-full border-gray-500 border-[2px]"></div>}
                        <h3 className="text-[14px] text-white ml-3">Don’t send me any sign-in notifications</h3>
                    </div>
                </div>
                <div className="mt-4 flex flex-row">
                    <button className="bg-white px-3 py-2 text-[14px] text-black rounded-md">Discord</button>
                    <button className="bg-[#FBBF04] px-3 py-2 text-[14px] text-black ml-3 rounded-md">Save Changes</button>
                </div>                
            </div>
        </div>
    ) 
}