import {AiFillEdit} from "react-icons/ai"
import {BsFillTrash3Fill} from "react-icons/bs"
const ProductCardComponent = ({imgUrl,title,price,rate,count})=>{

    return (
        <div className={" bg-amber-200 flex flex-col justify-between shadow-md border border-neutral-300 p-4 space-y-4 rounded-md"}>
            <div className={"space-y-4"}>
                <img className={"w-full rounded-md h-[200px] "} src={imgUrl} alt="There is a image of jewerly "/>
                <h2 className={"text-center text-xl"}>{title.length > 20 ? `${title.toString().substring(0,22)+'...'}`: title}</h2>
                <div className={"flex justify-end"}>
                    <span>{price}$</span>
                </div>
            </div>
            <div className={"flex items-center justify-between"} >
                <span>{rate}/5</span>
                <span>{count}</span>
            </div>
            <div className={"flex justify-between"}>
                <button className={"border border-indigo-600 shadow-md hover:bg-indigo-600 hover:text-white hover:border-transparent rounded-md text-indigo-600 px-2 py-1"}>
                    <AiFillEdit className={'w-6 h-6 '}/>
                </button>
                <button className={"border border-neutral-600 hover:bg-neutral-600 hover:text-white hover:border-transparent shadow-md rounded-md text-neutral-600 px-2 py-1"}>
                    <BsFillTrash3Fill className={'w-6 h-6 '}/>
                </button>
            </div>
        </div>
    )
}

export default ProductCardComponent;