import Image from "next/image"
import downloadImg2 from '../assets/image/billingInvoice/download2.png';
import filepdfImg from '../assets/image/billingInvoice/filepdf.png'

export default function DownloadItem(){
    return(
    <div className="px-4 py-4 flex flex-row items-center border-b-[1px] border-gray-300/20 border-solid">
        <div className="flex flex-row">
            <button className="p-2 bg-white justify-center items-center rounded-md">
                <Image src={filepdfImg} alt="pdf"/>
            </button>
            <div className="ml-4 flex flex-col">
                <h3 className="text-white text-[14px]">Report- June 2024</h3>
                <h3 className="text-[#BCBBB9] text-[14px]">Month to Date</h3>
            </div>
        </div>
        <div className=" ml-auto flex flex-row items-center mr-0">
            <Image src={downloadImg2} alt="download"/>
            <h3 className="text-[#55BA68] ml-3 text-[14px] max-sm:hidden">Download</h3>
        </div>
    </div>        
    )
}