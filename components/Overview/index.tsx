import  Sidebar  from "../Sidebar"
import PaymentFeeImg from '../assets/image/overview/paymentfee.png';
import arrowDownImg from '../assets/image/overview/arrow-down.png';
import arrowUpImg from '../assets/image/overview/arrow-up.png';
import Image from "next/image";
import Menubar from "../Sidebar/Menu";
import flashLogo from '../assets/logo/logo.png';
import {useDispatch} from 'react-redux';
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
import { setorders } from "../../utils/slice/ordersSlice";
import { useEffect } from "react";
export default function Overview(){
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(setorders(0));
    },[dispatch])
    return(
        <div className="w-auto m-0 p-0">
            <Sidebar/>
            <div className="ml-[300px] max-lg:ml-0 bg-[#1E1E2F] p-4">
                <div className="flex flex-row items-center">
                    <h3 className="text-[42px] max-lg:hidden max-lg:text-lg max-md:text-base max-sm:text-sm font-bold text-white">Overview</h3>
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
                  Overview
                </h3>
                <div className="flex xl:justify-between max-xl:flex-wrap max-xl:justify-center mt-4">
                    <div className="w-[31%] max-xl:w-[48%] max-md:w-full max-xl:m-2 max-sm:my-2 max-sm:mx-0 bg-[#27293D] rounded-md">
                        <div className="p-5 flex flex-col">
                            <button className="px-1 py-2 bg-[#FBBF04] rounded-md w-[44px] flex justify-center">
                                <Image src={PaymentFeeImg} width={20} alt={"paymentfee image"}/>
                            </button>
                            <h3 className="text-white text-lg mt-3">Payment Fees Saved</h3>
                            <h3 className="text-[39px] text-white font-bold mt-3">$120</h3>
                            <h3 className="text-[#717171] text-sm">Square Account</h3>
                            <button className="mt-12 rounded-md py-2 text-center text-white border-solid border-[1px] border-white">
                                Cash out now
                            </button>
                        </div>
                    </div>
                    <div className="w-[31%] max-xl:w-[48%] max-md:w-full max-xl:m-2 max-sm:my-2 max-sm:mx-0 rounded-md bg-[#27293D] p-5">
                        <h3 className="text-white text-lg text-center font-bold">Budget Consumption</h3>
                        <div className="w-[50%] mx-auto mt-2">
                            <Doughnut data={Doughtnutdata}/>
                        </div>
                        <h3 className="text-sm text-white mt-2 flex justify-center">
                            <span className="text-[#C09203]">. Used Budget</span>
                            <span className="ml-2">. Unused Budget</span>
                        </h3>
                    </div>
                    <div className="w-[31%] max-xl:w-[48%] max-md:w-full max-xl:m-2 max-sm:my-2 max-sm:mx-0 rounded-md bg-[#27293D] p-5">
                        <h3 className="text-white text-sm">Avg. Basket Size</h3>
                        <h3 className="mt-3 text-white text-[29px] font-bold ">$22.13</h3>
                        <div className="flex flex-row items-center">
                            <Image src={arrowUpImg} alt={""}/>
                            <p className="text-[#55BA68] text-sm ml-2">8.8%</p>
                            <p className="text-[#BCBBB9] ml-2 mr-auto">vs last month</p>
                        </div>
                        <div className="mt-4 mx-auto w-[90%]">
                                <Line data={Linedata}/>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex md:justify-between max-md:flex-col">
                    <div className="w-[50%] max-md:w-full bg-[#27293D] rounded-lg p-3">
                        <div className="flex flex-row items-center">
                            <h3 className="text-white text-[17px]">Transactions</h3>
                            <h3 className="ml-auto mr-0 text-[24px] font-bold text-white">$9231.00</h3>
                        </div>
                        <h3 className="text-[#BCBBB9] text-[14px]">Keep track your transactions</h3>
                        <div className="mt-5">
                            <Bar options={Itemoption} data={Bardata}/>
                        </div>
                    </div>
                    <div className="w-[48%] max-md:w-full max-md:mt-4 bg-[#27293D] rounded-lg p-4">
                        <div className="flex flex-row items-center">
                            <h3 className="text-white text-[17px]">Loyalty Signups</h3>
                            <div className="text-white font-bold text-[24px] ml-auto mr-0">$131.00</div>
                        </div>
                        <div className="mt-2 flex flex-row items-center">
                            <Image src={arrowDownImg} width={14} alt={""}/>
                            <p className="ml-2 text-[#F86E51]">3.8%</p>
                        </div>
                        <div className="mt-2">
                            <Line data={Linedata2}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}