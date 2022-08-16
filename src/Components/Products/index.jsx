import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../services/startwars.service";
import ProductItem from "../ProductItem";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const products = fetchProducts();
        setProducts(products);
    }, []);

    return (
        <div className="my-container">
            {products.length > 0 ? (
                products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))
            ) : (
                <div>Loading Products...</div>
            )}
        </div>
    );
}
