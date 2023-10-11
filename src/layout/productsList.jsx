import {useEffect, useState} from "react";
import axios from "axios";
import ProductCardComponent from "../components/productCardComponent.jsx";

const ProductsList = () => {
    const [productData, setProductData] = useState([])
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                setProductData(response.data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoader(false)
            }
        }
        getProducts()
    }, []);

    if (loader) return <div
        className={"absolute inset-0  z-10 bg-neutral-800 bg-opacity-10 text-white flex justify-center items-center"}>
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div></div>
    if (error) return <div>Error message:{error}</div>
    return (
        <div className={"my-20"}>
            <div className={"text-center mb-8"}>
                <h1 className={"text-4xl"}>Products List</h1>
            </div>
            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5"}>
                {productData.length > 0 && productData.map((product) => (
                    <ProductCardComponent
                        imgUrl={product.image}
                        title={product.title}
                        price={product.price}
                        rate={product?.rating?.rate}
                        count={product?.rating?.count}
                    />
                ))}
            </div>

        </div>
    )
}

export default ProductsList