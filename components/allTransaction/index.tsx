import Sidebar from "../Sidebar"
import {useDispatch} from 'react-redux'
import { setorders } from "../../utils/slice/ordersSlice"
import { useEffect } from "react"
import Image from "next/image"
import flashLogo from '../assets/logo/logo.png';
import Menubar from "../Sidebar/Menu"
import announcerImg from '../assets/image/allTransactions/announcer.png'
import searchImg from '../assets/image/billingInvoice/search.png'
import crodownImg from '../assets/image/allTransactions/crodown.png'
import paymentImage from '../assets/image/billingInvoice/paymentImg.png'

import TableItem from "./TableItem"
export default function Alltransaction(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setorders(4));
    },[dispatch])
    return(
        <div className="w-auto m-0 p-0">
            <Sidebar/>
            <div className="ml-[300px] max-lg:ml-0 bg-[#1E1E2F] p-4">
                <div className="flex flex-row items-center">
                    <h3 className="text-[42px] max-lg:hidden max-lg:text-lg max-md:text-base max-sm:text-sm font-bold text-white">Merchant Detail</h3>
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
                    Merchant Detail
                </h3> 
                <div className="flex sm:justify-between max-sm:flex-col mt-6">
                    <div className="min-w-[292px] max-sm:w-full">
                        <div className="w-full px-3 py-3 rounded-lg bg-[#27293D] pb-12">
                            <h3 className=" text-white text-[19px]">Merchant</h3>
                            <h3 className="text-[14px] text-[#FFF]/[.5]">25151 Harborside New York US</h3>
                            <h3 className="text-[17px] text-white">ID:456468465465</h3>
                            <Image src={announcerImg} alt={""} className="mt-4 w-full rounded-lg"/>
                            <div className="flex flex-row items-center mt-3">
                                <h3 className=" text-[#D0D5DD] text-[14px]">Live Scan Status</h3>
                                <button className="px-3 py-[2px] ml-3 bg-[#F86E51] text-[12px] text-center rounded-full">Suspicious</button>
                            </div>
                        </div>
                        <div className="w-full px-3 py-3 rounded-lg bg-[#27293D] mt-8">
                            <div className="py-2 border-b-[1px] border-solid border-[#000]/[.2] mb-2">
                                <h3 className="text-[16px] text-[#FFF]/[.4]">MCC</h3>
                                <h3 className="text-white text-[20px] mt-2">1234</h3>
                            </div>
                            <div className="py-2 border-b-[1px] border-solid border-[#000]/[.2] mb-2">
                                <h3 className="text-[16px] text-[#FFF]/[.4]">Threat Identified On</h3>
                                <h3 className="text-white text-[20px] mt-2">03/22 10:11AM</h3>
                            </div>
                            <div className="py-2 border-b-[1px] border-solid border-[#000]/[.2] mb-2">
                                <h3 className="text-[16px] text-[#FFF]/[.4]">Last Modified on</h3>
                                <h3 className="text-white text-[20px] mt-2">03/22 10:11AM</h3>
                            </div>
                            <div className="py-2 border-b-[1px] border-solid border-[#000]/[.2] mb-2">
                                <h3 className="text-[16px] text-[#FFF]/[.4]">Last Modified by</h3>
                                <h3 className="text-white text-[20px] mt-2">Numan Xafar</h3>
                            </div>                                                                                    
                        </div>
                    </div>
                    <div className="max-sm:ml-0 max-sm:mt-5 w-full ml-12 max-md:ml-6">
                        <div className="border-solid border-b-[2px] border-gray-400">
                            <div className="flex flex-row">
                                <h3 className="text-[#FBBF04] px-4 py-2 text-[14px] bg-[#282828]
                                    border-b-[2px] border-solid border-[#FBBF04]">Authorizations</h3>
                                <h3 className="text-[#BCBBB9] text-[14px] px-4 py-2">Summary</h3>
                                <h3 className="text-[#BCBBB9] text-[14px] px-4 py-2">Activity</h3>
                            </div>
                        </div>
                        <div className="bg-[#27293D]">
                            <div className="mt-8">
                                <div className="my-4 py-4 flex xl:justify-between max-xl:flex-col px-2">
                                    <div className="xl:w-[31%] flex flex-row items-center rounded-lg border-[1px] border-[#484848] px-2 py-2">
                                        <Image src={searchImg} width={19} alt=""/>
                                        <input type="text" className=" focus:outline-none placeholder:text-[16px] rounded-lg bg-[#27293D]
                                        pl-2 text-[16px] text-[#BCBBB9] placeholder:text-[#BCBBB9]" placeholder="Search"/>
                                    </div>
                                    <button className="xl:w-[31%] max-xl:mt-6 flex flex-row items-center rounded-lg border-[1px] border-[#484848] px-2 py-2">
                                        <h3 className="text-[16px] text-[#BCBBB9]">Payment Method</h3>
                                        <Image src={crodownImg} alt={""} width={22} className="ml-auto mr-0"/>
                                    </button>
                                    <button className="xl:w-[31%] max-xl:mt-6 flex flex-row items-center rounded-lg border-[1px] border-[#484848] px-2 py-2">
                                        <h3 className="text-[16px] text-[#BCBBB9]">Response</h3>
                                        <Image src={crodownImg} alt={""} width={22} className="ml-auto"/>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-8 border-gray-300/40 border-t-[1px] bg-[#27293D]">
                                <table className="w-full mt-3">
                                    <thead>
                                        <tr className="text-[#BCBBB9] text-left">
                                            <th className="py-2 pl-2">Date Identified</th>
                                            <th className="py-2">Card</th>
                                            <th className="py-2 max-xl:hidden">Payment Method</th>
                                            <th className="py-2 max-xl:hidden">Amount</th>
                                            <th className="py-2">Response</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <TableItem/>
                                        <TableItem/>
                                        <TableItem/>
                                        <TableItem/>
                                        <TableItem/>
                                        <TableItem/>
                                        <TableItem/>
                                        <TableItem/>
                                        <TableItem/>
                                    </tbody>
                                </table>
                            </div>   
                        </div>
                    </div>
                </div>     
            </div>

        </div>
    )
}