import CategoryOfProducts from "../components/categoryOfProducts.jsx";
import ItemsOfProducts from "../components/itemsOfProducts.jsx";
import {useState} from "react";

const ProductsList = () => {
    const [selectedCategory,setSelectedCategory] = useState("")
    return (
        <div className={"my-10"}>
            <div className={"text-start mb-5"}>
                <h1 className={"text-2xl text-white font-bold"}>Products List</h1>
            </div>
            <div className={"flex justify-end mb-5"}>
                <CategoryOfProducts selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            </div>
            <ItemsOfProducts selectedCategory={selectedCategory}/>
        </div>
    )
}

export default ProductsList