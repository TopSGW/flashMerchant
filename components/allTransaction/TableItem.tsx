import Image from "next/image"
import paymentImage from '../assets/image/billingInvoice/paymentImg.png'

export default function TableItem(){
    return(
        <tr className="text-left text-[#BCBBB9]">
        <td className="py-2 pl-2">
            <h3 className="text-[14px]">03/22</h3>
            <h3 className="text-[14px]">10:12 AM</h3>
        </td>
        <td className="text-left text-white">
            <div className="flex flex-row items-center">
                <Image src={paymentImage} width={20} alt=""/>
                <h3 className="text-[14px] text-white ml-2">91351</h3>
            </div>
        </td>
        <td className="max-xl:hidden">
            <h3 className="text-[14px] ">
                Purchage with PIN
            </h3>
            <h3 className="text-[14px]">(Chip)</h3>
        </td>
        <td className="text-[14px] max-xl:hidden">$54656</td>
        <td>
            <button className="px-4 max-sm:px-2 max-sm:text-[12px] py-1 bg-[#252525] text-[#55BA68] rounded-full
                ronded-full">Active</button>
        </td>
    </tr>        
        )
}