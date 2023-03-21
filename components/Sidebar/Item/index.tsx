import Image from "next/image"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux";
export default function Item(props:any){
    const router = useRouter();
    const handleLink = () =>{
        switch (props?.section){
            case "OverView": router.push('/'); break;
            case "Statistics": router.push('/merchant/statistics'); break;
            case "Client Dashboard": router.push('/dashboard/clientDashboard'); break;
            case "Billing & Invoices":router.push('/merchant/billingInvoice'); break;
            case "All Transactions":router.push('/merchant/allTransaction'); break;
            case "Notification":router.push('/merchant/notifications'); break;
            case "Role":router.push('/dashboard/role');break;
            case "New Account":router.push('/dashboard/newaccount');break;            
        }
    }
    return(
        <div className={`flex flex-row pl-12 py-2 items-center 
        hover:bg-slate-400 cursor-pointer`} onClick={()=>handleLink()}
            style={{backgroundColor: props?.color}}>
            <Image src={props?.Imgurl} width={22} alt={""}/>
            <p className="text-white text-base ml-2">{props?.section}</p>
        </div>
    )
}