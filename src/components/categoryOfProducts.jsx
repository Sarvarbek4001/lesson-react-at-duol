import {useEffect,useState} from "react";
import axios from "axios";

const CategoryOfProducts = ({selectedCategory,setSelectedCategory})=>{
    const [categoryData,setCategoryData] = useState([]);
    const [loader,setLoader] = useState(true)
    useEffect(()=>{
        const getProductCategory = async ()=> {
            try {
                const response = await axios.get("https://fakestoreapi.com/products/categories");
                setCategoryData(response.data)
            } catch (error) {
                console.log(error)
            }finally {
                setLoader(false)
            }
        }
        getProductCategory()
    },[])

    const selectHandler = (e)=>{
        setSelectedCategory(e.target.value)
    }
    return (
        <div >
            {loader ? (
                <div>Loading...</div>
            ) : (
                <>
                    <label htmlFor="location" className="block text-sm font-medium leading-6 text-white">
                        Category
                    </label>
                    <select
                        id="location"
                        name="location"
                        onChange={selectHandler}
                        className="mt-2 block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={selectedCategory}
                    >
                        <option  value={""}>all category</option>
                        {categoryData.length > 0 && categoryData.map((category)=>(
                            <option key={category} value={category}>{category}</option>
                        ))}

                    </select>
                </>
            )}
        </div>
    )
}

export default CategoryOfProducts;