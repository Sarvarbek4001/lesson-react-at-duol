const ProductCardComponent = ({imgUrl,title,price,rate,count})=>{
    return (
        <div className={" bg-amber-200 flex flex-col justify-between shadow-md border border-neutral-300 p-4 space-y-4 rounded-md"}>
            <div className={"space-y-4"}>
                <img className={"w-full rounded-md h-[200px] "} src={imgUrl} alt="There is a image of jewerly "/>
                <h2 className={"text-center text-xl"}>{title}</h2>
                <div className={"flex justify-end"}>
                    <span>{price}$</span>
                </div>
            </div>
            <div className={"flex items-center justify-between"} >
                <span>{rate}/5</span>
                <span>{count}</span>
            </div>
        </div>
    )
}

export default ProductCardComponent;