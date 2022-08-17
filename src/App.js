import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Signup from "./Components/Signup";
import Admin from "./Components/Admin";
import { fetchProducts } from "./services/startwars.service";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProductsData() {
            const products = await fetchProducts();
            setProducts(products);
        }
        fetchProductsData();
    }, []);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/products"
                    element={<Products products={products} />}
                />
                <Route path="/signup" element={<Signup />} />
                <Route path="/admin" element={<Admin products={products} />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
