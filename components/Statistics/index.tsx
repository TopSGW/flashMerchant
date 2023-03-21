import Sidebar from "../Sidebar"
import Menubar from "../Sidebar/Menu"
import Image from "next/image"
import totalSalesImg from '../assets/image/statistics/totalSales.png';
import totalVisitorImg from '../assets/image/statistics/totalVisitors.png'
import totalUpImg from '../assets/image/statistics/totalUp.png'
import totalMadeImg from '../assets/image/statistics/totalMade.png'
import totalRefundedImg from '../assets/image/statistics/totalRefunded.png'
import totalDownImg from '../assets/image/statistics/totalDown.png'
import TabelData from "./TableData";
import flashLogo from '../assets/logo/logo.png';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  } from 'chart.js';
import { Doughnut, Line, Bar } from "react-chartjs-2";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const Doughtnutdata = {
    labels: [
        'All',
        'Direct'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
      ],
      hoverOffset: 4
    }]
  };
  const Linedata = {
    labels: ["", "", ""],
    datasets: [
      {
        label: "Statistics",
        data: [20, 25, 72],
        fill: true,
        tension: 0.4,
        borderColor: "#742774",
        backgroundColor: 'rgba(0, 255, 255, 0.5)',
      }
    ]
  };
  const Linedata2 = {
    labels: ["", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Statistics",
        data: [20, 25, 11, 190, 44, 55, 66, 72],
        fill: true,
        tension: 0.4,
        borderColor: "#742774",
        backgroundColor: 'rgba(0, 255, 255, 0.5)',
      }
    ]
  };
  const Linedata3 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        tension: 0.2,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Orders",
        data: [0, 25, 35, 51, 54, 76],
        fill: false,
        tension: 0.2,
        borderColor: "#742774"
      }
    ]
  };  
  export const Itemoption = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Revenue',
      },
    },
  };
const labels=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];  
export const Bardata = {
    labels,
    datasets: [
      {
        label: '',
        data: [13,5,45,48,22,23,12,19,39,32,41,47],
        backgroundColor: '#FBBF04',
        borderWidth: 1,
        barThickness: 15,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        maxBarThickness: 18,
        borderRadius: 6
      },
    ],
  };

import { useDispatch } from 'react-redux'
import { setorders } from "../../utils/slice/ordersSlice";  
import { useEffect } from "react";
export default function Statistics(){
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setorders(1));
  },[dispatch])
    return(
        <div className="w-auto m-0 p-0">
            <Sidebar/>
            <div className="ml-[300px] max-lg:ml-0 bg-[#1E1E2F] p-4">
                <div className="flex flex-row items-center">
                    <h3 className="text-[42px] max-lg:hidden max-lg:text-lg max-md:text-base max-sm:text-sm font-bold text-white">Statics</h3>
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
                    Statics
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-[#27293D] mt-4 rounded-lg">
                    <div className="p-3 bg-[#FBBF04] rounded-l-lg max-sm:rounded-lg">
                        <div className="flex flex-row items-center">
                            <Image src={totalSalesImg} alt={""}/>
                            <h3 className="text-[16px] ml-3 text-[#27293D]">Total Sales</h3>
                        </div>
                        <h3 className="text-[30px] text-[#27293D] max-lg:text-lg max-md:text-base max-sm:text-sm mt-3">
                            $391,820.75
                        </h3>
                        <div className="flex flex-row items-center mt-2">
                            <Image src={totalMadeImg} alt={""}/>
                            <h3 className="ml-2 text-[#27293D] text-base">21.9%</h3>
                            <h3 className="ml-3 text-[#27293D] text-base">+$67k today</h3>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="flex flex-row items-center">
                            <Image src={totalVisitorImg} alt={""}/>
                            <h3 className="text-[16px] ml-3 text-white">Visitor</h3>
                        </div>
                        <h3 className="text-[30px] text-white max-lg:text-lg max-md:text-base max-sm:text-sm mt-3">
                            831,071
                        </h3>
                        <div className="flex flex-row items-center mt-2">
                            <Image src={totalUpImg} alt={""}/>
                            <h3 className="ml-2 text-white text-base">13%</h3>
                            <h3 className="ml-3 text-[#BCBBB9] text-base">+7k today</h3>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="flex flex-row items-center">
                            <Image src={totalVisitorImg} alt={""}/>
                            <h3 className="text-[16px] ml-3 text-white">Total orders</h3>
                        </div>
                        <h3 className="text-[30px] text-white max-lg:text-lg max-md:text-base max-sm:text-sm mt-3">
                            1,042,665
                        </h3>
                        <div className="flex flex-row items-center mt-2">
                            <Image src={totalUpImg} alt={""}/>
                            <h3 className="ml-2 text-white text-base">5.7%</h3>
                            <h3 className="ml-3 text-[#BCBBB9] text-base">+5k today</h3>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="flex flex-row items-center">
                            <Image src={totalRefundedImg} alt={""}/>
                            <h3 className="text-[16px] ml-3 text-white">Total orders</h3>
                        </div>
                        <h3 className="text-[30px] text-white max-lg:text-lg max-md:text-base max-sm:text-sm mt-3">
                            50,441
                        </h3>
                        <div className="flex flex-row items-center mt-2">
                            <Image src={totalDownImg} alt={""}/>
                            <h3 className="ml-2 text-white text-base">11%</h3>
                            <h3 className="ml-3 text-[#BCBBB9] text-base">+21 today</h3>
                        </div>
                    </div>                                                            
                </div>
                <div className="flex justify-between max-md:flex-col mt-8">
                    <div className="w-[68%] max-md:w-full rounded-lg bg-[#27293D] p-2">
                        <Line data={Linedata3}/>
                    </div>
                    <div className="w-[30%] max-md:hidden max-md:mt-3 rounded-lg bg-[#27293D] p-2">
                        <Doughnut data={Doughtnutdata}/>
                    </div>
                </div>
                <div className="flex xl:justify-between max-xl:flex-col mt-4">
                    <div className="w-[40%] max-xl:hidden rounded-lg bg-[#27293D] p-2">
                        <h3 className="text-[17px] text-white px-2">Your wallet</h3>
                        <div className="mt-2">
                            <Doughnut data={Doughtnutdata}/>
                        </div>
                        <h3 className="mt-2 text-[#A5ACBA] px-4 text-[14px]">Totall of all balances</h3>
                    </div>
                    <div className="w-[58%] max-xl:w-full max-lg:mt-3 rounded-lg bg-[#27293D] py-2">
                        <h3 className="text-white text-[17px] font-medium mt-3 ml-4">Sales & Stock</h3>
                        <TabelData/>
                    </div>
                </div>
            </div>
        </div>
    )
}