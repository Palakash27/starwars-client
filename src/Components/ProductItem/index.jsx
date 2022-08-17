import React from "react";

const IMAGES = {
    "62fb38cb39cc2ed9eab86fad":
        "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6505059616640?fmt=jpeg&qlt=90&wid=512&hei=512",
    "62fb38cb39cc2ed9eab86faa":
        "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6505059617296?fmt=jpeg&qlt=90&wid=512&hei=512",
    "62fb38cb39cc2ed9eab86fab":
        "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/2140058384542?fmt=jpeg&qlt=90&wid=512&hei=512",
    "62fb38cb39cc2ed9eab86fac":
        "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6720107063674?fmt=jpeg&qlt=90&wid=512&hei=512",
    "62fb38cb39cc2ed9eab86fae":
        "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6720107063673?fmt=jpeg&qlt=90&wid=512&hei=512",
};

export default function ProductItem({ product }) {
    return (
        <div className="product-card">
            <img
                className="product-img img-one"
                src={IMAGES[product.id]}
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
