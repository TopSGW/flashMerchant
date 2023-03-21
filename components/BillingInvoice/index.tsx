import Sidebar from "../Sidebar"
import {useDispatch} from 'react-redux'
import { setorders } from "../../utils/slice/ordersSlice"
import { useEffect } from "react";
import Image from "next/image";
import flashLogo from '../assets/logo/logo.png'
import Menubar from "../Sidebar/Menu";
import searchImg from '../assets/image/billingInvoice/search.png';
import downloadImg from '../assets/image/billingInvoice/download.png';
import downloadImg2 from '../assets/image/billingInvoice/download2.png';
import filepdfImg from '../assets/image/billingInvoice/filepdf.png'
import DownloadItem from "./downloadItem";
import paymentImg from '../assets/image/billingInvoice/paymentImg.png'
import editImg from '../assets/image/billingInvoice/editImg.png'
import bellImg from '../assets/image/billingInvoice/bell.png'
import ToggleBtn from "../Sidebar/Togglebtn";

export default function BillingInvoice(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setorders(3))
    },[dispatch])
    return(
        <div className="w-auto m-0 p-0">
            <Sidebar/>
            <div className="ml-[300px] max-lg:ml-0 bg-[#1E1E2F] p-4">
                <div className="flex flex-row items-center">
                    <h3 className="text-[42px] max-lg:hidden max-lg:text-lg max-md:text-base max-sm:text-sm font-bold text-white">Billing & Invoices</h3>
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
                    Billing & Invoices
                </h3>
                <div className="rounded-lg bg-[#27293D] mt-10">
                    <div className="flex xl:flex-row max-xl:flex-col xl:items-center p-3">
                        <h3 className="text-[17px] text-white">Estimated Cost For This Month Period</h3>
                        <div className="flex sm:flex-row max-sm:flex-col xl:ml-auto max-xl:mt-3">
                            <div className="xl:ml-auto rounded-lg border-[#D0D5DD] border-[1px] flex flex-row items-center bg-[#1E1E2F]">
                                <Image src={searchImg} alt={""} className="ml-2"/>
                                <input type="text" className="sm:ml-auto px-4 py-2 border-solid rounded-lg
                                    bg-[#1E1E2F] focus:outline-none text-[#BCBBB9] placeholder:text-[#BCBBB9]" placeholder="Search"/>
                            </div>
                            <div className="flex flex-row max-sm:mt-4">
                                <div className="bg-white rounded-lg mx-4 max-sm:ml-auto">
                                    <input type="date" className="w-[145px] h-[40px] bg-white rounded-lg px-2"/>
                                </div>
                                <button className="flex flex-row items-center justify-center px-3 py-2
                                    rounded-lg border-[#D0D5DD] border-solid border-[1px]">
                                    <Image src={downloadImg} alt="downloadImg" className="mt-1"/>
                                    <h3 className="text-white text-[14px] ml-2 mt-1 max-md:hidden">Download All PDF</h3>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" border-b-[1px] border-[#000000]/[.2] border-solid mx-2"></div>
                    <div className="py-4">
                        <DownloadItem/>
                        <DownloadItem/>
                        <DownloadItem/>
                        <DownloadItem/>
                    </div>
                </div>
                <div className="pt-3 px-3 pb-6 mt-6 rounded-lg bg-[#27293D]">
                    <h3 className="text-[42px] text-white font-semibold">Manage</h3>
                    <h3 className="text-[16px] text-[#BCBBB9] font-semibold">Update your card and Notification settings</h3>
                    <div className="mt-5 flex xl:justify-between max-xl:flex-wrap max-xl:justify-center">

                        <div className="bg-[#2C2E47] w-[344px] max-sm:w-full max-xl:w-[442px] max-xl:m-2 rounded-lg p-3 relative">
                            <h3 className="text-white text-[17px] font-semibold">
                                Estimated Cost For This Month Period
                            </h3>
                            <h3 className="mt-3 text-[29px] text-white font-semibold">$19,04</h3>
                            <h3 className="text-[14px] text-[#717171]">Set biling email alerts for the following settigns</h3>
                            <div className="mt-4 border-t-[1px] border-[#000000]/[.2] border-solid pb-4"></div>
                            <div className="p-3 rounded-lg bg-[#2D47CA] mt-5">
                                <div className="flex flex-row mt-10 max-[394px]:mt-3">
                                    <Image src={paymentImg} alt="paymentlogo" className="max-[394px]:w-[50px] max-[394px]:h-[50px]"/>
                                    <div className="flex flex-col ml-4 w-full">
                                        <h3 className="text-white text-[18px]">Visa **** 4422</h3>
                                        <h3 className="text-[#FFF]/[.4] mt-3 max-[394px]:mt-0 max-sm:text-sm">Card Info</h3>
                                        <div className="flex flex-row items-center mt-3 max-[394px]:mt-0 max-[394px]:hidden">
                                            <h3 className="text-[#FFF]/[.4] text-[14px] ml-auto">Expiry</h3>
                                            <h3 className="ml-2 mr-5 text-white">04/12</h3>
                                            <div className="flex flex-row items-center">
                                                <h3 className="text-white text-[14px]">Edit</h3>
                                                <Image src={editImg} alt="" className="ml-2"/>
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                                <div className="flex flex-row items-center mt-3 max-[394px]:mt-0 min-[394px]:hidden">
                                        <h3 className="text-[#FFF]/[.4] text-[14px] ml-auto">Expiry</h3>
                                        <h3 className="ml-2 mr-5 text-white">04/12</h3>
                                        <div className="flex flex-row items-center">
                                            <h3 className="text-white text-[14px]">Edit</h3>
                                            <Image src={editImg} alt="" className="ml-2"/>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className="bg-[#2C2E47] w-[272px] max-sm:w-full max-xl:m-2 rounded-lg p-3 relative">
                            <div className="flex flex-row items-start">
                                <div className="w-[52px] h-[52px] bg-black flex justify-center items-center rounded-full">
                                    <Image src={bellImg} alt="bellImg"/>
                                </div>
                                <div className="ml-auto"><ToggleBtn/></div>
                            </div>
                            <div className="mt-6 border-solid border-t-[1px] border-gray-500"></div>
                            <h3 className="text-white text-[17px] mt-6">Charge Notifications</h3>
                            <h3 className="textt-[14px] text-[#BCBBB9] mt-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </h3>
                            <div className="mt-[37px] w-full flex">
                                <button className="ml-auto mr-0 px-4 py-2 bg-[#FBBF04] 
                                    text-black rounded-lg text-[14px] font-semibold">Update</button>
                            </div>
                        </div>

                        <div className="bg-[#2C2E47] w-[272px] max-sm:w-full  max-xl:m-2 rounded-lg p-3 relative">
                            <div className="flex flex-row items-start">
                                <div className="w-[52px] h-[52px] bg-black flex justify-center items-center rounded-full">
                                    <Image src={bellImg} alt="bellImg"/>
                                </div>
                                <div className="ml-auto"><ToggleBtn/></div>
                            </div>
                            <div className="mt-6 border-solid border-t-[1px] border-gray-500"></div>
                            <h3 className="text-white text-[17px] mt-6">Monthly Budget Exceeded Notifications</h3>
                            <h3 className="textt-[14px] text-[#BCBBB9] mt-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </h3>
                            <div className="w-full flex mt-3">
                                <button className="ml-auto mr-0 px-4 py-2 bg-[#FBBF04] 
                                    text-black rounded-lg text-[14px] font-semibold">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}