import React from "react";

export default function ProductItem({ product }) {
    return (
        <>
            <form class="product-card" method="POST" action="cart.php">
                <img
                    class="product-img img-one"
                    src="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6720107063673?fmt=jpeg&amp;qlt=90&amp;wid=512&amp;hei=512"
                    alt="product-img"
                />
                <div class="product-text">
                    <div class="product-detail-overview">
                        <h3>{product.name}</h3>
                        <h4>${product.price}</h4>
                    </div>
                    <div class="text-left text-medium font-medium my-2">
                        {product.category}
                    </div>
                    <p class="text-left">{product.description}</p>
                </div>
                <div class="product-cart">
                    <button type="submit" name="action" value="add">
                        <b>ADD TO CART</b>
                    </button>
                </div>
            </form>
        </>
    );
}
