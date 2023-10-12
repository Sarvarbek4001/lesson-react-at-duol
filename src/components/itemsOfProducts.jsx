import ProductCardComponent from "./productCardComponent.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import Loader from "./loader.jsx";
import ErrorMessageComponent from "./errorMessageComponent.jsx";

const ItemsOfProducts = ({selectedCategory}) => {
    const URL = selectedCategory ? `https://fakestoreapi.com/products/category/${selectedCategory}` : "https://fakestoreapi.com/products"
    const [productData, setProductData] = useState([])
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState("");


    useEffect(() => {
        const getProducts = async () => {
            try {
                setLoader(true)
                const response = await axios.get(URL);
                setProductData(response.data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoader(false)
            }
        }
        getProducts()
    }, [selectedCategory]);

    if (loader) return <Loader/>
    if (error) return <ErrorMessageComponent messageOfError={error}/>
    return (
        <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5"}>
            {productData.length > 0 && productData.map((product) => (
                <ProductCardComponent
                    key={product.id}
                    imgUrl={product.image}
                    title={product.title}
                    price={product.price}
                    rate={product?.rating?.rate}
                    count={product?.rating?.count}
                />
            ))}
        </div>
    )
}

export default ItemsOfProducts