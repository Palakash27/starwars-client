import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../services/startwars.service";
import ProductItem from "../ProductItem";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        async function fetchProductsData() {
            const products = await fetchProducts();
            setProducts(products);
            setFilteredProducts(products);
        }
        fetchProductsData();
    }, []);

    const filterHandler = (e) => {
        const { value } = e.target;

        if (value === "all") {
            setFilteredProducts(products);
        } else {
            const filteredProducts = products.filter((product) => {
                return product.category
                    .toLowerCase()
                    .includes(value.toLowerCase());
            });
            setFilteredProducts(filteredProducts);
        }
    };

    return (
        <>
            <div className="my-container">
                <div>
                    <label style={{ marginRight: "10px" }}>Brand</label>
                    <select onChange={filterHandler}>
                        <option value="all">All</option>
                        <option value="vans">Vans</option>
                        <option value="darth">Darth</option>
                        <option value="Star Wars">Star Wars</option>
                    </select>
                </div>
            </div>
            <div className="my-container">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))
                ) : (
                    <div>Loading Products...</div>
                )}
            </div>
        </>
    );
}
