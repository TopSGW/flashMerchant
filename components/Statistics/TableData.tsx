
export default function TabelData(){
    const Tdata = [
        {
            ItemName:"Name Here", ProductCode: "+ 6,320.50", SellingPrice:"+ 6,320.50",  tDate: "Wed 1:00 pm", Quantity: "Wed 1:00 pm"
        },
        {
            ItemName:"Name Here", ProductCode: "+ 6,471.39", SellingPrice:"+ 6,471.39", tDate: "Wed 1:00 pm", Quantity: "Wed 1:00 pm"
        },
        {
            ItemName:"Name Here", ProductCode: "- 2,223.9", SellingPrice:"- 2,223.9", tDate: "Wed 7:20 pm", Quantity: "Wed 7:20 pm"
        },
        {
            ItemName:"Name Here", ProductCode: "+ 7,344.50", SellingPrice:"+ 7,344.50", tDate: "Wed 1:00 pm", Quantity: "Wed 1:00 pm"
        },
        {
            ItemName:"Name Here", ProductCode: "- 6,157.14", SellingPrice:"- 6,157.14", tDate: "Wed 7:20 pm", Quantity: "Wed 7:20 pm"
        },
        {
            ItemName:"Name Here", ProductCode: "+ 6,320.50", SellingPrice:"+ 6,320.50", tDate: "Wed 1:00 pm", Quantity: "Wed 1:00 pm"
        },
        {
            ItemName:"Name Here", ProductCode: "+ 6,320.50", SellingPrice:"+ 6,320.50", tDate: "Wed 1:00 pm", Quantity: "Wed 1:00 pm"
        },
        {
            ItemName:"Name Here", ProductCode: "+ 6,320.50", SellingPrice:"+ 6,320.50", tDate: "Wed 1:00 pm", Quantity: "Wed 1:00 pm"
        },
        {
            ItemName:"Name Here", ProductCode: "+ 6,320.50", SellingPrice:"+ 6,320.50", tDate: "Wed 1:00 pm", Quantity: "Wed 1:00 pm"
        },
        {
            ItemName:"Name Here", ProductCode: "+ 6,320.50", SellingPrice:"+ 6,320.50", tDate: "Wed 1:00 pm", Quantity: "Wed 1:00 pm"
        },
        {
            ItemName:"Name Here", ProductCode: "+ 6,320.50", SellingPrice:"+ 6,320.50", tDate: "Wed 1:00 pm", Quantity: "Wed 1:00 pm"
        },
        {
            ItemName:"Name Here", ProductCode: "+ 6,320.50", SellingPrice:"+ 6,320.50", tDate: "Wed 1:00 pm", Quantity: "Wed 1:00 pm"
        },
    ];
    return(
        <table className="w-full mt-4">
            <thead>
                <tr className="text-[#A5ACBA] border-y-[1px] border-[#252525]">
                    <th className="py-2 pl-2 text-left">Item Name</th>
                    <th className="py-2 pl-2 text-left max-sm:hidden">Product Code</th>
                    <th className="py-2 pl-2 text-left">Selling Price</th>
                    <th className="py-2 pl-2 text-left max-sm:hidden">Date</th>
                    <th className="py-2 pl-2 text-left max-sm:hidden">Quantity</th>
                </tr>
            </thead>
            <tbody>
                    {Tdata.map((list, index) =>{
                        return(
                            <tr className="text-[#A5ACBA] border-y-[1px] border-[#252525]" key={index}>
                                <td className="py-2 pl-2 text-left text-white">{list.ItemName}</td>
                                <td className="py-2 pl-2 text-left max-sm:hidden">{list.ProductCode}</td>
                                <td className="py-2 pl-2 text-left">{list.SellingPrice}</td>
                                <td className="py-2 pl-2 text-left max-sm:hidden">{list.tDate}</td>
                                <td className="py-2 pl-2 text-left max-sm:hidden">{list.Quantity}</td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    )
}