import flashLogo from '../assets/logo/logo.png';
import Image from 'next/image';
import statics from '../assets/image/sidebar/statics.png';
import allTransaction from '../assets/image/sidebar/allTransaction.png';
import billingInvoice from '../assets/image/sidebar/billingInvoice.png';
import clientDashboard from '../assets/image/sidebar/clientDashboard.png';
import supportEmail from '../assets/image/sidebar/supportEmail.png';
import createInvoice from '../assets/image/sidebar/createInvoice.png';
import materialsymbol from '../assets/image/sidebar/material-symbols_dashboard.png';
import notification from '../assets/image/sidebar/notification.png';
import loginImg from '../assets/image/sidebar/login.png';
import rolesidebarImg from '../assets/image/sidebar/rolesidebar.png';
import materialSvg from '../assets/image/sidebar/materialsymbol_dashboard.svg';
import createInvoiceSvg from '../assets/image/sidebar/createInvoice.svg';
import buillingInvoiceSvg from '../assets/image/sidebar/billingInvoice.svg'
import createDashboardSvg from '../assets/image/sidebar/createDashboard.svg';
import allTransactionSvg from '../assets/image/sidebar/allTransaction.svg';
import statisticsSvg from '../assets/image/sidebar/statistics.svg';
import roleSvg from '../assets/image/sidebar/role.svg';
import newclientB from '../assets/image/sidebar/newclient.svg';
import newclientW from '../assets/image/sidebar/newclientW.svg'
import Notificatonsvg from '../assets/image/sidebar/Notification.svg'


import SidebarItem from './Item';
import { useRouter } from 'next/router';
import { selectordersState } from '../../utils/slice/ordersSlice';
import { useSelector } from 'react-redux';
export default function Sidebar(){
    const router = useRouter();
    const orders = useSelector(selectordersState);    
    return(
        <div className=" fixed w-[300px] bg-[#27293D] h-full max-lg:hidden">
            <div className="flex flex-row items-center my-6 ml-5">
                <Image src={flashLogo} width={32} alt={"flash logo"}/>
                <h3 className='text-[18px] ml-3 text-white'>Flash Merchant</h3>    
            </div>
            <div className="pt-4 w-full h-full relative">
                <div className='flex flex-col'>
                    <SidebarItem Imgurl={orders[0]? materialSvg: materialsymbol} section={"OverView"} color={orders[0]? "#FBBF04" : "#27293D"}
                        />
                    <SidebarItem Imgurl={orders[1] ? statisticsSvg: statics} section={"Statistics"} color={orders[1]? "#FBBF04" : "#27293D"} />
                    <SidebarItem Imgurl={orders[3] ? buillingInvoiceSvg : billingInvoice} section={"Billing & Invoices"} color={orders[3]? "#FBBF04" : "#27293D"} />
                    <SidebarItem Imgurl={orders[4] ? allTransactionSvg : allTransaction} section={"All Transactions"} color={orders[4]? "#FBBF04" : "#27293D"} />
                    <SidebarItem Imgurl={orders[2] ? Notificatonsvg: notification} section={"Notification"} color={orders[2]? "#FBBF04" : "#27293D"}/>
                </div>
                <div className=" absolute bottom-[100px] w-full">
                    <button className="py-3 flex flex-row justify-center items-center 
                        w-[184px] mx-auto rounded-md bg-white" onClick={()=> router.push('/')}>
                        <Image src={loginImg} width={24} alt={""}/>
                        <p className="text-black font-medium text-base ml-2 mb-1">
                            Log Out
                        </p>
                    </button>
                </div>                
            </div>            
        </div>
    )
}