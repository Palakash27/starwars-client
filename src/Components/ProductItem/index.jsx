import React from "react";

const IMAGES = [
    "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6505059616640?fmt=jpeg&qlt=90&wid=512&hei=512",
    "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6505059617296?fmt=jpeg&qlt=90&wid=512&hei=512",
    "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/2140058384542?fmt=jpeg&qlt=90&wid=512&hei=512",
    "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6720107063674?fmt=jpeg&qlt=90&wid=512&hei=512",
    "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6720107063673?fmt=jpeg&qlt=90&wid=512&hei=512",
    "http://clipart-library.com/images_k/no-sign-transparent-background/no-sign-transparent-background-12.png",
];

export default function ProductItem({ product, idx }) {
    return (
        <div className="product-card">
            <img
                className="product-img img-one"
                src={IMAGES[idx]}
                alt="product-img"
            />
            <div className="product-text">
                <div className="product-detail-overview">
                    <h3>{product.name}</h3>
                    <h4>${product.price}</h4>
                </div>
                <p className="text-left">{product.description}</p>
            </div>
            <div className="product-cart">
                <button type="submit" name="action" value="add">
                    <b>{product.category}</b>
                </button>
            </div>
        </div>
    );
}
