import React, { useState } from "react";
import ProductItem from "../ProductItem";

export default function Products({ products }) {
    const [filteredProducts, setFilteredProducts] = useState(products);

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
                    filteredProducts.map((product, idx) => (
                        <ProductItem
                            key={product.id}
                            product={product}
                            idx={idx}
                        />
                    ))
                ) : (
                    <div>Loading Products...</div>
                )}
            </div>
        </>
    );
}
