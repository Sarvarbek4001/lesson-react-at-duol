import Header from "./components/header.jsx";
import ProductsList from "./layout/productsList.jsx";

function App() {

    return (
        <div className={""}>
            <Header/>
            <main className={"max-w-7xl mx-auto px-4 md:px-8 "}>
                <ProductsList/>
            </main>
        </div>
    )
}

export default App
